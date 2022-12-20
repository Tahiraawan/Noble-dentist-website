import React from 'react';
import Card from '../components/Card';

const Services = () => {
  return (
    <div className=' bg-[#0E9594] grid md:grid-cols-2 gap-4 md:pt-[48px]  md:pb-[78px] lg:pl-[149px] lg:pr-[20px] md:px-[50px] px-[50px]'>
       
       <div className='pt-[123px] pb-[10px]'>
            <span className='text-[#F5DFBB] font-[900] text-[20px] leading-[25px]'>where we are the best</span>
            <h1 className='font-[900] text-[55px] leading-[60px] text-[#F5F9FC]'>Our Services</h1>
            <p className='font-[400] text-[17px] leading-[25px] text-[#D4EEEB] pt-[20px] pb-[30px]'>We provide personalized, comprehensive and gentle dental care in a relaxed, patient-friendly setting, individualized care in a supportive, comfortable environment.</p>
            <button className="text-[#FFFFFF] font-[600]  text-[17px] leading-[25px] border border-[#FFFFFF] px-[25px] py-[10px] hover:bg-[#F5DFBB] hover:border-black hover:text-[#0E9594] ease-in duration-200">
          More Services
        </button>
        </div>
        <div>
          <Card/>
        </div>
      
       
    </div>
  )
}

export default Services