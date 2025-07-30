import React from "react";
import { Check, Sparkles } from "lucide-react";
import Container from "../Container/Container";
import { CheckCircle } from "lucide-react"; // or use react-icons if preferred

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
        <div className="flex items-center gap-[311px]">
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
        <div className="flex items-center justify-between relative">
          <div>
            <div className="bg-[#FCCC44]  p-10 rounded-[20px]  ">
              <h2 className="text-[21px] font-bold text-[#192335] mb-[22px]">
                Education Is The Key
              </h2>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2  text-[#192335]"
                  >
                    <CheckCircle className="text-blue-600 mt-1" size={20} />
                    <span className="text-[17px] leading-6 pb-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img className="absolute left-[-122px] animate-float " src="\big star.png" alt="" />
            </div>
          </div>
          <div className="relative">
            <div>
              <img
                className="w-[700px] rounded-[20px]  "
                src="/image6.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="absolute right-[-30px]  animate-float"
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
