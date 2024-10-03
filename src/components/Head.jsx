import React from "react";
import swigi_logo from "../assets/swigi_logo.png";

const Head = () => {
  const navItem = [
    {
      name: "Swiggy Corporate",
      img: <i className="fi fi-rr-shopping-bag"></i>,
    },
    {
      name: "Search",
      img: <i className="fi fi-rr-search"></i>,
    },
    {
      name: "Offers",
      img: <i className="fi fi-tr-badge-percent"></i>,
    },
    {
      name: "Help",
      img: <i className="fi fi-rr-life-ring"></i>,
    },
    {
      name: "Sign In",
      img: <i className="fi fi-rs-employee-man-alt"></i>,
    },
    {
      name: "Cart",
      img: <i className="fi fi-rs-cart-minus"></i>,
    },
  ];
  return (
    <div className="w-full shadow-md h-20 flex justify-center items-center">
      <div className="w-[50%] flex items-center">
        <img className="w-10 mx-20" src={swigi_logo} alt="" />
        <p className="font-bold border-b-2 border-black">Other </p>
        <span className="mt-2 px-4 text-orange-600">
          <i className="fi fi-bs-angle-down"></i>
        </span>
      </div>
      <div className="w-full list-none flex justify-around ">
        {navItem.map((item,idx) => (
          <li key={idx} className="flex justify-center items-center">
            <span className="px-1">
              <p className="mt-1">{item.img}</p>
            </span>
            {item.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Head;
