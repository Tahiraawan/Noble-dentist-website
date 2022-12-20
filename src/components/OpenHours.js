import React from 'react'
import { openHoursData } from '../data/OpenHoursData';
import OpenHoursItems from './OpenHoursItems';

const OpenHours = () => {
  return (
    <div>
        {openHoursData.map((data) => {
        return (
          <OpenHoursItems
            day={data.day}
            date={data.date}
          />
        );
      })}
    </div>
  )
}

export default OpenHours