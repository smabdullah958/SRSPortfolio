import Image from "next/image"
const aboutpage = () => {
  return (
    <div id="about"
     className='w-full h-full 2xl:py-14 bg-gray-900 sm:px-16 px-10   md:pt-0 text-[#ece3e3] text-xl '>
     <div>
     <h1 className='text-3xl font-bold pt-5 sm:pt-10 pb-5 text-center'>About Me</h1>
       <div className='flex flex-col md:grid md:grid-cols-3 gap-12'>
        <div className="text-justify md:col-span-2 md:text-[16px] flex-col justify-center items-center content-center order-2 md:order-1">
    I’m an <span className='text-blue-400'>IT professional</span> with <span className='text-blue-400'>30 years of experience</span> in the technology industry. with a strong background in software engineering, training, content creation, and e-commerce. With decades of hands-on industry experience, I’ve worked across modern and legacy technologies while guiding students and professionals toward real-world computer science skills.
</div>
<div className="flex justify-center pt-5 order-1 md:order-2">
          <Image
            src="/me (2).jpeg"
            alt="My Image"
            width={200}
            height={200}
            loading="lazy"
            className="rounded-4xl shadow-lg  hover:scale-105 transition-all hover:duration-1000"
          />
        </div>
</div>
</div>
    </div>
  )
}

export default aboutpage