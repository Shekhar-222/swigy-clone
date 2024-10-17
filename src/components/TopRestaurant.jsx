import React, { useEffect, useState } from "react";
import { IMG_URL } from "../utils/constants";

export default function TopRestaurant({ data }) {
  console.log("data--->", data);
  const [value, setValue] = useState(0);

  const handlePrev = () => {
    setValue((prev) => prev + 20);
  };
  const handleNext = () => {
    setValue((prev) => prev - 20);
  };
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

      <div
        className="flex mt-6 duration-300"
        style={{ translate: `${value}%` }}
      >
        {data.map((restaurant) => (
          <div className="min-w-[273px] max-h-[182px] mx-2 mb-28 relative hover:scale-95 duration-300">
            <img
              className="w-full h-full rounded-2xl shadow-xl "
              src={`${IMG_URL}${restaurant?.info?.cloudinaryImageId}`}
              alt=""
            />
            <div className="bg-gradient-to-t from-black from-1% to transparent to-40% h-full rounded-2xl w-full absolute top-0"></div>
            <div className="absolute bottom-0 text-white p-2 text-xl font-bold">
              {restaurant?.info?.aggregatedDiscountInfoV3?.header
                ? restaurant?.info?.aggregatedDiscountInfoV3?.header +
                  " " +
                  restaurant?.info?.aggregatedDiscountInfoV3?.subHeader
                : ""}
            </div>
            <div className="bg-white font-bold text-lg p-1 line-clamp-1">
              {restaurant?.info?.name}
            </div>
            <div className="flex items-center gap-1 relative">
              <span className="text-green-700 mt-1">
                <i class="fi fi-ss-circle-star"></i>
              </span>
              {restaurant?.info?.avgRatingString}{" "}
              <span className="absolute bottom-1 left-11 font-bold">.</span>
              <span className="font-bold ml-2">
                {restaurant?.info?.sla.slaString}
              </span>
            </div>
            <div className="line-clamp-1 text-black/60">
              {restaurant?.info?.cuisines.join(", ")}
            </div>
            <div className=" text-black/60">{restaurant?.info?.locality}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
