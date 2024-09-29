import React from 'react'
import swigi_logo from '../assets/swigi_logo.png'
const Head = () => {
    return (
        <div className='w-full shadow-md h-20 flex justify-center items-center'>
            <div className='w-[50%] flex items-center'>
                <img className='w-10 mx-20' src={swigi_logo} alt="" />
                <p className='font-bold border-b-2 border-black'>Other </p><span className='mt-2 px-4 text-orange-600'><i class="fi fi-bs-angle-down"></i></span>
            </div>
            <div className='w-full list-none flex justify-around '>
                
                <li><span className='px-2'><i className="fi fi-rr-shopping-bag"></i></span>Swiggy Corporate</li>
                <li><span className='px-2'><i className="fi fi-rr-search"></i></span> Search</li>
                <li><span className='px-2'><i className="fi fi-tr-badge-percent"></i></span>Offers</li>
                <li><span className='px-2'><i className="fi fi-rr-life-ring"></i></span>Help</li>
                <li><span className='px-2'><i className="fi fi-rs-employee-man-alt"></i></span>Sign In</li>
                <li><span className='px-2'><i className="fi fi-rs-cart-minus"></i></span>Cart</li>
            </div>
        </div>
    )
}

export default Head
