import React from 'react'

const Banner = () => {
  return (
    <section className="bg-[url('/main-banner.png')] bg-cover bg-center] text-white ">
      <div className='flex flex-col md:flex-row items-center justify-between pl-[300px] gap-[140px] '>
               {/* Left Content */}
    <div className="max-w-[532px]   z-10 pt-[115px] pb-[197px]">
      <p className="font-bold text-[#4ADA85] text-[18px] leading-8">Click Learn Thrive</p>
      <h1 className="font-bold text-[59px] leading-18 pt-[11px] pb-[17px]">
        Unlock your potential through education
      </h1>
      <p className="text-[#ffffff] text-[17px] leading-6 mb-[30px]">
        Magnis viverra nisl rhoncus egestas rhoncus elit at. Massa volutpat eleifend pellentesque vivamus nulla.
      </p>
      <button className="bg-[#F8BC26] text-black px-[37px] py-[21px] rounded-[5px] font-semibold ">
        Contact Us
      </button>
    </div>

    {/* Right Side Decoration */}
      <div>
        <img src="/banner.png" alt="" />
      </div>
      </div>
  </section>
  )
}

export default Banner

































