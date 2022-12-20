import React from "react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className=" md:flex justify-between bg-[#17786C] text-[#FFFFFF] pt-[23px] pb-[20.78px] w-full fixed top-0 left-0 z-10 ">
      <div className="pl-[100px]">
        <h1>
          <Link href="/">Noble Dental Care</Link>
        </h1>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-6 cursor-pointer text-2xl md:hidden"
      >
        {open ? "close" : "menu"}
      </div>
      <div
        className={`md:flex gap-6 absolute md:static md:z-auto z-[-1] left-0 w-full bg-[#17786C] md:w-auto md:pl-0 pl-9 pb-6 md:pb-0 ${
          open ? "top-[55px]" : " top-[-499px]"
        } `}
      >
        <div className="pl-[18px]">
          <ul className="md:flex  md:space-x-[53.67px]  ">
            <li className="cursor-pointer hover:text-[#E7DABF] md:my-0 my-7">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#E7DABF] md:my-0 my-7">
              Meet the Doctor
            </li>
            <li
              className="cursor-pointer hover:text-[#E7DABF] md:my-0 my-7"
              onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
            
            >
              Our Services
              {dropdownOpen &&  <div
        className={` invisible md:visible ${
          dropdownOpen
            ? `top-[74%] opacity-100 visible`
            : "top-[110%] invisible opacity-0"
        } absolute left-0 z-40 w-full rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}
      >
        <div className="flex justify-around py-[20px] cursor-auto">
          <div className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary">
            <ul className="text-gray-500 flex flex-col gap-6 list-[circle]">
              <h1 className="font-bold text-[#17786C] ">GENERAL DENTISTRY</h1>
              <li className="cursor-pointer">General Dentistry for Children</li>
              <li className="cursor-pointer">Professional Teeth Cleaning</li>
              <li className="cursor-pointer">Cleaning Services</li>
            </ul>
          </div>
          <div className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary">
            <ul className="text-gray-500 flex flex-col gap-6 list-[circle]">
              <h1 className="font-bold text-[#17786C]">GENERAL DENTISTRY</h1>
              <li className="cursor-pointer">General Dentistry for Children</li>
              <li className="cursor-pointer">Professional Teeth Cleaning</li>
              <li className="cursor-pointer">Cleaning Services</li>
            </ul>
          </div>
          <div className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary">
            <ul className="text-gray-500 flex flex-col gap-6 list-[circle]">
              <h1 className="font-bold text-[#17786C] ">GENERAL DENTISTRY</h1>
              <li className="cursor-pointer">General Dentistry for Children</li>
              <li className="cursor-pointer">Professional Teeth Cleaning</li>
              <li className="cursor-pointer">Cleaning Services</li>
            </ul>
          </div>
        </div>
      </div>}
            </li>
            <li className="cursor-pointer hover:text-[#E7DABF] md:my-0 my-7">
              Contacts
            </li>
          </ul>
        </div>
        <div className=" flex items-center pl-[18px]  pr-[100px] ">
          <svg
            width="14.92"
            height="12.95"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4161 12.5651V14.8151C15.4169 15.0239 15.3741 15.2307 15.2905 15.4221C15.2068 15.6135 15.0841 15.7853 14.9301 15.9265C14.7762 16.0677 14.5945 16.1752 14.3966 16.2421C14.1988 16.309 13.9891 16.3339 13.7811 16.3151C11.4732 16.0643 9.25634 15.2757 7.30859 14.0126C5.49646 12.8611 3.96009 11.3247 2.80859 9.51257C1.54107 7.55598 0.75227 5.32832 0.506088 3.01007C0.487345 2.80267 0.511994 2.59364 0.578463 2.39629C0.644932 2.19894 0.751766 2.01759 0.892162 1.86379C1.03256 1.70999 1.20344 1.5871 1.39393 1.50296C1.58442 1.41882 1.79034 1.37527 1.99859 1.37507H4.24859C4.61257 1.37149 4.96543 1.50038 5.24141 1.73772C5.51739 1.97506 5.69765 2.30466 5.74859 2.66507C5.84355 3.38512 6.01968 4.09212 6.27359 4.77257C6.3745 5.04102 6.39633 5.33276 6.33652 5.61323C6.2767 5.89371 6.13773 6.15116 5.93609 6.35507L4.98359 7.30757C6.05125 9.18523 7.60593 10.7399 9.48359 11.8076L10.4361 10.8551C10.64 10.6534 10.8975 10.5145 11.1779 10.4546C11.4584 10.3948 11.7501 10.4167 12.0186 10.5176C12.699 10.7715 13.406 10.9476 14.1261 11.0426C14.4904 11.094 14.8231 11.2775 15.061 11.5582C15.2988 11.8389 15.4252 12.1973 15.4161 12.5651Z"
              stroke="white"
              stroke-opacity="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="pl-[5px]">(510) 493-2130</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
