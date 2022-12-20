import React from "react";

const About = () => {
  return (
    
    <div className=" w-full" style={{  
      backgroundImage:`url(/Aboutimg.png)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} >
      <div className="bg-gradient-to-r from-[#F5DFBB]  opacity-90 mix-blend-multiply">
        <div className="md:pt-[125px] py-[80px] md:pb-[124px] md:pl-[149px] px-[100px] ">
        <h1 className="text-[#281C08] font-[900] text-[55px] leading-[66px] pb-[20px] ">
          Welcome to Noble Dental Care
        </h1>
        <div>
          <hr className="border-t-[1px] w-[70%] border-t-[#052727] opacity-[50%]" />
        </div>
        <p className="text-[#281C08] font-[400]  text-[17px] leading-[25px] pt-[20px] pb-[50px] ">
          We provide personalized, comprehensive and gentle dental care in a
          relaxed, patient-friendly setting, individualized care in a
          supportive,patient-friendly and comfortable environment.
        </p>
        <button className="text-[#281C08] font-[600]  text-[17px] leading-[25px] border border-[#281C08] hover:text-[#0E9594] ease-in duration-200 p-2">
          Learn More
        </button>
      </div></div>
    </div>
  );
};

export default About;
