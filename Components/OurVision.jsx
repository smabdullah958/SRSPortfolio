import Image from 'next/image'
import React from 'react'

const OurVision = () => {
  return (
    <div className='bg-gray-900'>
              <h1 className='text-3xl font-bold pt-5 pb-8 sm:pt-10  text-center text-gray-50 '>Our Vision</h1>
      
    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between  2xl:py-14  sm:px-16 px-10   md:pt-0 text-[#ece3e3] text-xl '>

            <Image src="/Mission.png" alt="mission" width={500} height={500} lazy="loading" className='rounded-2xl order-2 md:order-1 mt-5 md:mt-0 ' />
      
        <h1 className='text-sm sm:text-xl lg:text-2xl font-bold  md:ml-10  justify-start text-justify order-1 md:order-2'>create value,share Knowledge and empower businesses and learners through the power of technology</h1>

        
    </div>
      
    </div>
  )
}

export default OurVision
