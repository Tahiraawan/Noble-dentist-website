import React from "react";
import Image from "next/image";

const MeetDoctor = () => {
  return (
    <div className="bg-[#269486] pt-[60px] lg:px-[149px] md:px-[100px] sm:px-[60px] px-[60px] pb-[69px]">
      <h1 className="text-[#F5F9FC] font-[700] text-[50px] leading-[60px]">
        Meet the Doctor
      </h1>
      <div className="grid md:grid-cols-2 lg:gap-8 md:gap-[80px] gap-5 pt-[50px]">
        <div className="relative">  
          <Image
            src="/doctorimg.png"
            alt="Picture of the author"
            width={260}
            height={350}
          />
          <span className="absolute lg:top-[150px] md:top-[90px] lg:left-[149px] md:left-[100px] text-[#F5F9FC] font-[800] lg:text-[55px] md:text-[50px] text-[40px] top-[130px] left-[130px] leading-[60px]">
            Dr. Syed Zafar Sayeedi
          </span>
        </div>
        <div>
          <p className="font-[400] text-[17px] leading-[25px] text-[#E8F4F3]">
            Dr. Syed Zafar Sayeedi has been in the field of dentistry since
            2001. He is recognized not only for excellence in quality
            restorative, cosmetic, surgical and preventative care, but also for
            taking the time to understand patients’ immediate concerns and
            needs.
            <br />
            <br />
            Dr. Sayeedi got his Fellowship in Implantology. He has been taking
            CE classes in orthodontics, endodontics, esthetics, and implants in
            order to provide patients with the most up to date and
            technologically advanced care available. Dentistry is constantly
            changing and it is important to be in tune with all the positive
            advances that are made in the profession. This benefits patients
            because they can feel comfortable in the office knowing that they
            will be given the most comprehensive treatment available.
            <br />
            <br />
            Dr. Sayeedi is friendly, comforting,and has treated thousands of
            satisfied patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetDoctor;
