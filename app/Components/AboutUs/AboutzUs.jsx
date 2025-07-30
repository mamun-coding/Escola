import React from 'react'
import Container from '../Container/Container'
import FeatureCard from "../Card/Card";
const features = [
    { title: "Parse Optional", desc: "The goal of ecology is to understand how organisms interact with each other" },
    { title: "Unbranded", desc: "The goal of ecology is to understand how organisms interact with each other" },
    { title: "Nulla iste Commodi", desc: "The goal of ecology is to understand how organisms interact with each other" },
  ];
const AboutUs = () => {
  return (
    <>
    <section className="bg-[url('/banner2.jpg')] bg-cover bg-center  h-[876px] mt-[124px] relative">
      <Container>
      <div className="flex items-center gap-[311px] pt-[127px]">
          <div>
            <p className="font-bold text-[18px] leading-8 text-[#2F57EF] pb-[20px]">
              Top Popular Course
            </p>
            <h3 className="font-bold text-[42px] text-[#192335] leading-13 pb-[47px] ">
              Knowledge is power education is the key
            </h3>
          </div>
          <div>
            <p className="text-[17px] leading-6 pb-[20px] text-[#192335]">
              Education is the process of acquiring knowledge, skills, values,
              and attitudes through various methods such as
            </p>
            <div>
              <button className="border border-[#2F57EF] text-[#192335] px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#2F57EF] hover:text-white hover:translate-y-1">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center ">
      <div className=" flex flex-col md:flex-row  rounded-[40px] overflow-hidden shadow-md max-w-6xl transform translate-y-[100px]">
        {/* Left Image */}
        <div className="md:w-1/2 w-full h-96 md:h-auto relative">
          <img src="/banner3.png" alt="" />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-white">
          {features.map((item, i) => (
            <FeatureCard
              key={i}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
      </Container>
    </section>
  </>
  
   )
}

export default AboutUs




