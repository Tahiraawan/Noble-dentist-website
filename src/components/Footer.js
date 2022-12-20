import React from "react";
import OpenHours from "../components/OpenHours";

const Footer = () => {
  // const data = `<p>I am paragrapj</p> <ul><li>li 1 </li></ul>`
  return (
    <div
      className="grid md:grid-cols-3 bg-[#269486] text-[#FFFFFF] py-[79px] px-[100px] 
    gap-[23px]"
    >
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="font-[900] text-[17px] leading-[25px] pb-[35px]">
            Noble DENTAL CARE
          </h1>
          {/* <div dangerouslySetInnerHTML={{__html:data}} /> */}
          <p className="font-[400] text-[17px] leading-[30px]">
            We are dedicated to helping patients achieve the sense of wellbeing
            and increased confidence that a healthy smile can bring.
          </p>
        </div>
        <span>© 2022 Vigorant inc.</span>
      </div>
      <div>
        <h1 className="font-[900] text-[17px] leading-[25px] pb-[35px]">
          QUICK LINKS
        </h1>
        <ul>
          <li className="pb-[7px] cursor-pointer hover:text-[#E7DABF]">Home</li>
          <li className="pb-[7px] cursor-pointer hover:text-[#E7DABF]">
            Meet the Doctor
          </li>
          <li className="pb-[7px] cursor-pointer hover:text-[#E7DABF]">
            Our Service
          </li>
          <li className="cursor-pointer hover:text[#E7DABF]">Contacts</li>
        </ul>
      </div>
      <div>
        <h1 className="font-[900] text-[17px] leading-[25px] pb-[35px]">
          OPEN HOURS
        </h1>
        <OpenHours />
      </div>
    </div>
  );
};
export default Footer;
