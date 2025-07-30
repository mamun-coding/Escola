"use client";
import { Users, BookOpen, Clock, CheckCircle } from 'lucide-react';
import { useState, useEffect, use } from 'react';
import Container from '../Container/Container';

function CountUpAnimation({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = end / 40; // 40 steps total
    const stepTime = duration / 40; // time per step

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
}

const Courses = () => {
  return (
    <>
   <Container className='pt-[240px]'>
   <div className="bg-white ">
      <div className="">
        <div className="grid lg:grid-cols-[1fr_440px] gap-[80px] items-center">
          {/* Left Side - Image and Stats */}
          <div className="">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden ">
               <img src="/coursest.png" alt="" className='' />
              
               
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  <CountUpAnimation end={200} />+
                </div>
                <div className="text-gray-600">Courses</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  <CountUpAnimation end={100} />+
                </div>
                <div className="text-gray-600">Subjects</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="">
            {/* Top Popular Course Badge */}
            <div className="inline-flex items-center  text-[#2F57EF] text-[18px] font-bold">
              Top Popular Course
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-[42px] font-bold text-gray-900 pt-[18px] pb-[18px]">
                Knowledge Is Power Is The Key Education
              </h1>
           <div className='pt-[17px] pb-[43px]'>
           <p className="text-lg text-[#] leading-6 ">
                Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training
              </p>
           </div>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-[21px] font-bold text-[#192335] mb-3 leading-8">Smart Scholars</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The goal of ecology is to understand how organisms interact with each other
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-[21px] font-bold text-[#192335] mb-3 leading-8">Knowledge Hub</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The goal of ecology is to understand how organisms interact with each other
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            
          </div>
        </div>
      </div>
    </div>
   </Container>
    </>
  )
}

export default Courses
