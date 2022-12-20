import React from "react";

const Appointment = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 ">
      <div className="bg-[#E7DABF] lg:col-span-3  ">
        <div className=" lg:py-[110px] md:py-[70px] sm:pt-[20px] pl-[30px] py-[25px] lg:pr-[97px] md:pr-[20px] lg:pl-[150px] md:pl-[100px] sm:pl-[34px] sm:pb-[50px]">
          <h1 className=" text-[#281C08] font-[700] text-[55px] leading-[60px] mb-[12px]">
            Schedule an Appointment
          </h1>
          <span className="text-[#54400D] font-[400] text-[17px] leading-[25px] ">
            Fill out the form below, and our team will reach out to you as soon
            as possible.
          </span>
          <ul>
          <p className="text-[#281C08] font-[700] text-[25px] leading-[30px] py-[22px]">
            Question about payment types ?
          </p>
            <li
              className="list-[circle] text[
#281C08] list-inside pb-[8px] "
            >
              Denti-Cal
            </li>
            <li
              className="list-[circle]  text[
#281C08] list-inside pb-[8px] "
            >
              Cash, Check, Major Credit Cards, Care credit
            </li>
            <li
              className="list-[circle]  text[
#281C08] list-inside pb-[8px] "
            >
              Cash, Check, Major Credit Cards, Care credit
            </li>
            <li
              className="list-[circle]  text[
#281C08] list-inside "
            >
              Cash, Check, Major Credit Cards, Care credit
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#0E9594] lg:col-span-2">
        <form className="flex flex-col bg-[#0E9594] w-[400px] m-auto py-[55.5px] ">
          <label
            htmlFor="fname"
            className="text-[#FFFFFF] pb-[8px] pt-[15px] font-[400] text-[15px] leading-[20px]"
          >
            First Name
          </label>
          <input
            type="text"
            id="fname"
            placeholder="Your First name"
            className="text-[#000B09] pt-[8px] pb-[8px] pl-[12px] "
          />
          <label
            htmlFor="email"
            className="text-[#FFFFFF] pb-[8px] pt-[15px] font-[400] text-[15px] leading-[20px]"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Type Email"
            className="text-[#000B09] pt-[8px] pb-[8px] pl-[12px] "
          />
          <label
            htmlFor="phone"
            className="text-[#FFFFFF] pb-[8px] pt-[15px] font-[400] text-[15px] leading-[20px]"
          >
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="text-[#000B09] pt-[8px] pb-[8px] pl-[12px]  "
          />
          <label
            htmlFor="message"
            className="text-[#FFFFFF] pb-[8px] pt-[15px] font-[400] text-[15px] leading-[20px]"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Leave your message here"
            className="mb-[20px] pt-[8px] pb-[8px] pl-[12px]"
          />
          <button className="bg-[#F5DFBB] text-[#2A2006] py-[10px] px-[64px] font-[700] text-[17px] leading-[25px] hover:text-[#0E9594]">
            Submit the appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
