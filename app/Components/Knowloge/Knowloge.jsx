import React from "react";
import { CheckCircle } from "lucide-react";

// Mock Container component
const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const items = [
  "education is the key",
  "A Whole Lot of Digital Love for Less",
  "Know what your target market wants and needs",
  "A Whole Lot of Digital Love for Less",
];

const Knowloge = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[311px] mb-8 lg:mb-12">
          <div className="flex-1">
            <p className="font-bold text-base sm:text-[18px] leading-6 sm:leading-8 text-[#2F57EF] pb-4 sm:pb-[20px]">
              Top Popular Course
            </p>
            <h3 className="font-bold text-2xl sm:text-3xl lg:text-[42px] text-[#192335] leading-tight sm:leading-13 pb-6 sm:pb-[47px]">
              Knowledge is power education is the key
            </h3>
          </div>
          <div className="flex-1">
            <p className="text-base sm:text-[17px] leading-6 pb-4 sm:pb-[20px] text-[#192335]">
              Education is the process of acquiring knowledge, skills, values,
              and attitudes through various methods such as
            </p>
            <div>
              <button className="border border-[#2F57EF] text-[#192335] px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:bg-[#2F57EF] hover:text-white hover:translate-y-1 text-sm sm:text-base">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between relative gap-8 lg:gap-12">
          <div className="w-full lg:w-auto order-2 lg:order-1">
            <div className="bg-[#FCCC44] p-6 sm:p-8 lg:p-10 rounded-[20px] relative">
              <h2 className="text-lg sm:text-xl lg:text-[21px] font-bold text-[#192335] mb-4 sm:mb-[22px]">
                Education Is The Key
              </h2>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[#192335]"
                  >
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm sm:text-base lg:text-[17px] leading-6 pb-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <img 
                className="absolute left-[-60px] xl:left-[-122px] animate-bounce" 
                src="/big star.png" 
                alt="" 
              />
            </div>
          </div>
          
          <div className="relative w-full lg:w-auto order-1 lg:order-2">
            <div>
              <img
                className="w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-[500px] xl:w-[700px] rounded-[20px] mx-auto lg:mx-0"
                src="/image6.png"
                alt=""
              />
            </div>
            <div className="hidden lg:block">
              <img
                className="absolute right-[-20px] xl:right-[-30px] top-4 animate-bounce"
                src="/image7.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Knowloge;