import React, { useEffect, useState } from 'react'
import { IMG_URL } from "../utils/constants";

export default function OnYourMind({data}) {
   
    const [value, setValue] = useState(10);
    
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
