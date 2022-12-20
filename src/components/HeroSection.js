import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#269486] ">
      <div className="grid md:grid-cols-3 mb-[33px]">
        <div className="md:pt-[170px] pt-[80px]  pl-[22px] md:pl-[50px]">
          <span className="text-[#F5F9FC] font-[600] text-[18px] leading-[20px]">
            That’s what we’re all about.
          </span>
          <h1 className="pb-[40px] md:font-[700] font-[500px] md:text-[80px] text-[60px] md:leading-[80px] leading-[80px] mt-[5px] text-[#F5F9FC] whitespace-nowrap relative">
            Excellent Care <br /> for your family
          </h1>
          <p className="text-[#F5F9FC] font-[400] text-[17px] leading-[25px] mb-[40px] ">
            We are dedicated to helping patients achieve the sense of wellbeing
            and increased confidence that a healthy smile can bring.
          </p>
          <button className="bg-[#F5DFBB] text-[#2A2006] py-[10px] px-[64px] font-[700] text-[17px] leading-[25px] hover:text-[#0E9594]">
            Book an appointment
          </button>
        </div>
        <div
          className="col-span-2 "
          style={{
            backgroundImage: `url(/Heroimg.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="grid md:grid-cols-3 gap-[30px] pl-[40px] pb-[75px]">
        <div className="flex flex-col gap-3">
          <span className="font-[600] text-[17px] leading-[25px] text-white">
            01
          </span>
          <hr className="border-t-[1px] w-[250px] border-t-[#FFFFFF] opacity-[50%]" />
          <span className="font-[400] text-[17px] leading-[25px] text-[#FFFFFF]">
            Digital X-Ray and Computerized Imaging (up to 90% less radiation)
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-[600] text-[17px] leading-[25px] text-white">
            02
          </span>
          <hr className="border-t-[1px] w-[250px] border-t-[#FFFFFF] opacity-[50%]" />
          <span className="font-[400]  text-[17px] leading-[25px] text-[#FFFFFF]">
            Digital X-Ray and Computerized Imaging (up to 90% less radiation)
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-[600] text-[17px] leading-[25px] text-white">
            03
          </span>
          <hr className="border-t-[1px] w-[250px] border-t-[#FFFFFF] opacity-[50%]" />
          <span className="font-[400]  text-[17px] leading-[25px] text-[#FFFFFF]">
            Digital X-Ray and Computerized Imaging (up to 90% less radiation)
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
