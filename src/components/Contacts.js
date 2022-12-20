import React from "react";

const Contacts = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="lg:py-[100px] md:py-[50px] py-[20px] lg:pl-[149px] pl-[20px] md:pl-[95px] pr-[33px] bg-[#E7DABF]">
        <h1 className=" text-[#2A2006] font-[700] text-[70px] leading-[75px] pb-[10px]">
          Contacts
        </h1>
        <span className="text-[#2A2006] font-[700] text-[20px] leading-[30px]">
          We'd love to help you.
        </span>
        <div className="pt-[30px] text-[#54400D] font-[400] text-[17px] leading-[25px] w-[300px]">
          <ul>
            <li className="flex pb-[20px]">
              <span>img</span>
              <span className="pl-[17.5px]">
                Noble Dental Care34603 Alvarado Niles Rd Union Ciry, CA 94587
              </span>
            </li>
            <li className="flex pb-1">
              <span>img</span>
              <span className="pl-[17.5px]">contact@nobledentalcares.com</span>
            </li>
            <li className="flex pb-1 ">
              <span>img</span>
              <span className="pl-[17.5px]">(510) 402-4769</span>
            </li>
            <li className="flex pb-[49px]">
              <span>img</span>
              <span className="pl-[17.5px]">(510) 402-4769</span>
            </li>
          </ul>
        </div>
        <div className="flex sm:flex-row flex-col text-[#54400D] font-[900] text-[17px] leading-[25px] gap-6">
          <button className="px-3 p-2 border border-[#54400D] hover:text-[#0E9594] hover:border-[#0E9594] ease-in duration-200">
            Call Us (510) 493-2130
          </button>
          <button className="px-3 p-2 border border-[#54400D] hover:text-[#0E9594] hover:border-[#0E9594] ease-in duration-200">
            Get Direction
          </button>
        </div>
      </div>
      <div
        className=" w-full"
        style={{
          backgroundImage: `url(/map.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Contacts;
