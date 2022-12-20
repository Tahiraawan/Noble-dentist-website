import React from "react";

const OpenHoursItems = (props) => {
  return (
    <div className="flex gap-[19px] pb-[7px]">
      <span>
        {props.day}
      </span>
      <span className="text-left">{props.date}</span>
    </div>
  );
};

export default OpenHoursItems;
