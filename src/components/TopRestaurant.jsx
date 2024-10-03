import React, { useEffect, useState } from "react";
import { IMG_URL } from "../utils/constants";

export default function TopRestaurant() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const result = await response.json();
    console.log(
      result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setData(
      result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const handlePrev = () => {
    setValue((prev) => prev+20);
  };
const handleNext = () => {
    setValue((prev) => prev-20);
}
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl ">Top restaurant chains in Pune</h1>
        <div className="flex gap-4">
          <span onClick={handlePrev}>
            <i className="fi fi-tr-arrow-circle-left text-2xl cursor-pointer"></i>
          </span>
          <span onClick={handleNext}>
            <i className="fi fi-ts-arrow-circle-right  text-2xl cursor-pointer"></i>
          </span>
        </div>
      </div>

      <div className="flex mt-6 duration-300" style={{translate:`${value}%`}}>
        {data.map((restaurant) => (<>
          <div className="min-w-[295px] max-h-[192px] mx-2 mb-10 ">
            <img
              className="w-full h-full rounded-2xl shadow-xl "
              src={`${IMG_URL}${restaurant?.info?.cloudinaryImageId}`}
              alt=""
            />
            <div>{restaurant?.info?.name}</div>
          </div>
            </>

          
        ))}
      </div>
    </div>
  );
}
