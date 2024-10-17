import React, { useEffect, useState } from "react";

import OnYourMind from "./OnYourMind";
import TopRestaurant from "./TopRestaurant";

export default function Body() {
  const [onYourMinddata, setOnYourMinddata] = useState([]);
  const [topRestaurantData, setTopRestaurantData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const result = await response.json();

    // console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setOnYourMinddata(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setTopRestaurantData(
      result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <>
      <div className="w-[75%] mx-auto overflow-hidden">
        <OnYourMind data={onYourMinddata} />
        <hr className="font-bold mt-10" />
        <TopRestaurant data={topRestaurantData} />
      </div>
    </>
  );
}
