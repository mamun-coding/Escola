import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaLongArrowAltRight, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-[45px] py-4 lg:py-[20px] bg-[#ffffff] gap-4 lg:gap-0'>
        
        {/* Contact Information */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-center w-full lg:w-auto'>
          
          {/* Email */}
          <div className='flex gap-2 items-center'>
            <div>
              <MdEmail color='#0D7DFB' size={18} />
            </div>
            <div className='text-sm sm:text-base leading-[160%]'>
              <a href="mailto:info@example.com" className="hover:text-[#0D7DFB] transition-colors">
                info@example.com
              </a>
            </div>
          </div>
          
          {/* Location */}
          <div className='flex gap-2 items-center'>
            <div>
              <IoLocationSharp color='#0D7DFB' size={18} />
            </div>
            <div className='text-sm sm:text-base text-center sm:text-left'>
              6391 Elgin St. Celina, 10299
            </div>
          </div>
        </div>

        {/* CTA and Social Media */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[30px] items-center w-full lg:w-auto'>
          
          {/* Get a quote button */}
          <div className='flex gap-2 lg:gap-[10px] px-6 lg:px-[30px] py-3 lg:py-5 bg-[#0D7DFB] items-center rounded hover:bg-[#0B6DE0] transition-colors cursor-pointer'>
            <p className='font-semibold text-sm lg:text-[15px] leading-[1.3] text-white whitespace-nowrap'>
              Get a quote
            </p>
            <span>
              <FaLongArrowAltRight color='white' size={16} />
            </span>
          </div>
          
          {/* Social Media Icons */}
          <div className='flex gap-4 lg:gap-[25px] items-center'>
            <a href="#" className="hover:text-[#0D7DFB] transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="hover:text-[#0D7DFB] transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-[#0D7DFB] transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-[#0D7DFB] transition-colors">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar