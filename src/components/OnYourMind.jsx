import React, { useEffect, useState } from 'react'
import { IMG_URL } from "../utils/constants";

export default function OnYourMind() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(10);
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
      );
      const result = await response.json();
      // console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    };
    const handlePrev = () => {
      // TODO: Implement previous image functionality
      setValue((prev) => prev - 20);
    };
    const handleNextv = () => {
      // TODO: Implement next image functionality
      setValue((prev) => prev + 20);
    };
  return (<>
    <div className="flex justify-between mt-2">
          <div>
            <h1 className="text-2xl font-bold">What,s in Your mind?</h1>
          </div>
          <div>
            <span onClick={handlePrev} className="mx-5">
              <i className="fi fi-tr-arrow-circle-left text-2xl cursor-pointer"></i>
            </span>
            <span onClick={handleNextv}>
              <i className="fi fi-ts-arrow-circle-right  text-2xl cursor-pointer"></i>
            </span>
          </div>
        </div>
        <div className={`flex overflow-hidden`}>
          {data.map((item, idx) => (
            <img key={idx}
              style={{ translate: `${-value}%` }}
              className="w-32 mt-1 duration-500"
              src={`${IMG_URL}${item.imageId}`}
            />
          ))}
        </div>
        </>
  )
}
