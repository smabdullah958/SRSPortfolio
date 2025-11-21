"use client"
import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
let [Submitting,SetSubmitting]=useState(null);
  const [result, setResult] =useState("");
  let [Data,SetData]=useState({
    access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed",
    UserName:"",
    Email:"",
    Subject:"", 
    Message:"",
  })

  let HandleValues=((e)=>{
 SetData({...Data,[e.target.name]:e.target.value})
console.log(Data)
})

let HandleClick=async()=>{

  if(!Data.UserName || !Data.Email || !Data.Subject || !Data.Message){
    SetSubmitting(true)
    setResult("all fields are mandatory");
    return;
  }
SetSubmitting(false)
setResult("Sending...")
let response=await fetch("https://api.web3forms.com/submit",
 { method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(Data)
 });
     const data = await response.json();
if(data.success){
  setResult("Form Submitted Successfully")
SetSubmitting(null)
  SetData({
    access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed",
    UserName:"",
    Email:"",
    Subject:"", 
    Message:"",
  })
}
else{
  console.log('internal error');
  setResult(data.message);
}
}

  return (
  <div id="Contact" className='bg-gray-900'>
    <h1 className='text-3xl font-bold pt-5 pb-8 sm:pt-10  text-center text-gray-50'>Contact Us</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between  2xl:py-14  sm:px-16 px-10   md:pt-0 text-[#ece3e3] text-xl '>
        <form onSubmit={(e)=>e.preventDefault()} className='order-1 md:order-2  md:mt-5 '>
   {Submitting && <span className='text-red-500 '>{result}</span>}
          <input type='text' name='UserName' value={Data.UserName} onChange={HandleValues} required placeholder='UserName' className='w-full p-2 border border-gray-300 rounded-md mb-3'  />
          
          <input type="email" name='Email' value={Data.Email} onChange={HandleValues} required 
          placeholder='Email' className='w-full p-2 border border-gray-300 rounded-md mb-3'/>  
          
    
          <input type="text" name='Subject' value={Data.Subject} onChange={HandleValues} required placeholder='Subject' className='w-full p-2 border border-gray-300 rounded-md mb-3'/>

          <textarea cols={40} rows={40} name='Message' value={Data.Message} required 
          onChange={HandleValues} placeholder='Message' className='mb-3 w-full p-2 border border-gray-300 rounded-md h-32'/>
          <button disabled={Submitting===false}  className={`w-full p-2 bg-[#007bff] hover:bg-[#0056b3] text-white rounded-md mb-5 transition duration-300 ease-in-out ${Submitting===false ? "opacity-20 cursor-not-allowed" : ""}`}
           onClick={HandleClick}>{Submitting===false ? "Sending..." :"Send Message"}</button>
        </form>
        {/* Contact Info Section */}
        <div className='mb-5 md:mb-0'>
          <div className='text-sm font-bold md:mx-10 lg:w-[30vw] flex flex-col justify-start text-justify'>

            <h2 className='text-xl md:text-2xl font-extrabold mb-5 text-[#5c9de7]'>
              Let’s Build Something Great Together
            </h2>

            <p className='text-lg md:text-xl mb-5'>
              Feel free to reach out for collaborations, business , projects, or consultations.
            </p>

            <p className='flex items-center gap-3 mb-2'>
              <FaPhone className='text-blue-400' /> 
              +92 31234556
            </p>

            <p className='flex items-center gap-3 mb-2'>
              <FaEnvelope className='text-blue-400' />
              srs@gmail.com
            </p>

            <p className='flex items-center gap-3 mb-2'>
              <FaMapMarkerAlt className='text-blue-400' />
              Pakistan (Available worldwide)
            </p>

            <p className='flex items-center gap-3 mb-2'>
              <FaClock className='text-blue-400' />
              Response Time: Within 24 hours
            </p>

          </div>
        </div>
</div>
</div>
  )
}

export default ContactUs
