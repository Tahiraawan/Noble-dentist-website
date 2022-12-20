import React from "react";

function CardItem(props) {
  return (
    <div className=" px-9 py-9 md:p-0 flex flex-col border md:border-none w-[400px] m-auto md:w-full mb-2  ">
      <img src={props.imageLink} alt="" className='w-24 mb-6 fill-red-900'/>
      <span className="text-[#F5F9FC]  font-[500] text-[25px] leading-[30px] pb-[15px]">
        {props.title}
      </span>
      <span className="text-[#D4EEEB]  font-[400] text-[17px] leading-[25px]">{props.paragraph}</span>
    </div>
  );
}

export default CardItem;
