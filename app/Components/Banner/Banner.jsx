import React from 'react'

const Banner = () => {
  return (
    <section className="bg-[url('/main-banner.png')] bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center">
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[140px] py-12 lg:py-20'>
          
          {/* Left Content */}
          <div className="w-full lg:max-w-[532px] z-10 text-center lg:text-left">
            <div>
              <p className="font-bold text-[#4ADA85] text-base sm:text-lg lg:text-[18px] leading-6 sm:leading-8">
                Click Learn Thrive
              </p>
              
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[59px] leading-tight lg:leading-[70px] pt-3 lg:pt-[11px] pb-4 lg:pb-[17px]">
                Unlock your potential through education
              </h1>
              
              <p className="text-[#ffffff] text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-6 mb-6 lg:mb-[30px] max-w-md lg:max-w-none mx-auto lg:mx-0">
                Magnis viverra nisl rhoncus egestas rhoncus elit at. Massa volutpat eleifend pellentesque vivamus nulla.
              </p>
              
              <button className="bg-[#F8BC26] text-black px-6 sm:px-8 lg:px-[37px] py-3 sm:py-4 lg:py-[21px] rounded-[5px] font-semibold text-sm sm:text-base hover:bg-[#E6A91F] transition-colors duration-300 inline-block">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className='w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-0'>
            <div className='relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none'>
              <img 
                src="/banner.png" 
                alt="Education Banner" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner