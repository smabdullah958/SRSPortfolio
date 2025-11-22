"use client"
import Aos from 'aos'
import Image from 'next/image'
import React, { useEffect } from 'react'


const OurVision = () => {
useEffect(()=>{
  Aos.init({ duration: 500 });
},[])
  return (
    <div className='bg-gray-900'>
              <h1 
              data-aos="fade-down"
              className='text-3xl font-bold pt-5 sm:pt-10  text-center text-gray-50 '>
                Our Vision</h1>
      
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-between  2xl:py-14  sm:px-16 px-10   md:pt-0 text-[#ece3e3] text-xl '>
        <div 
                      data-aos="fade-right"
        className='flex justify-center  order-1 md:order-2'>
            <Image src="/Mission.png" alt="mission" width={400} height={400} lazy="loading" className='rounded-2xl order-2 md:order-1 my-7 md:mt-0 ' />
            </div>
      
        <h1 
        data-aos="fade-left"
        className=' sm:p-10 text-justify text-sm sm:text-md md:text-xl col-span-1 md:col-span-2 md:text-[16px] flex-col justify-center items-center content-center order-1 md:order-2'>
        create value,share Knowledge and empower businesses and learners through the power of technology</h1>

        
    </div>
      
    </div>
  )
}

export default OurVision
