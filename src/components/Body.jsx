import React, { useEffect, useState } from "react";

import OnYourMind from "./OnYourMind";
import TopRestaurant from "./TopRestaurant";

export default function Body() {
  
  return (
    <>
      <div className="w-[75%] mx-auto overflow-hidden">
        <OnYourMind/>
        <hr className="font-bold mt-10" />
        <TopRestaurant/>
      </div>
    </>
  );
}
