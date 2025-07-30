import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaLongArrowAltRight, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Topbar = () => {
  return (
    <>
    <div className='flex justify-between items-center px-[45px] py-[20px] bg-[#ffffff]'>
      <div className='flex gap-10 items-center'>
          <div className='flex gap-2 items-center'>
                 <div>
                 <MdEmail color='#0D7DFB' />
                 </div>
                 <div className='text-[16px] leading-[160%]'>
                 info@example.com
                 </div>
          </div>
          <div className='flex gap-2 items-center'>
            <div> <IoLocationSharp color='#0D7DFB' />
            </div>
            <div>6391 Elgin St. Celina, 10299</div>
          </div>
      </div>
      <div className='flex gap-[30px] items-center '>
           <div className='flex gap-[10px] px-[30px] py-5 bg-[#0D7DFB] items-center'>
              <p className='font-semibold text-[15px] leading-[1.3] text-white'>Get a quote</p>
              <span><FaLongArrowAltRight color='white' /></span>
           </div>
           <div className='flex gap-[25px] items-center'>
           <FaFacebook />
           <FaInstagram/>
           <FaTwitter/>
           <FaLinkedin/>
              
           </div>
      </div>
    </div>
    </>
  )
}

export default Topbar
