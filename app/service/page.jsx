"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PenTool,
  Bot,
  Lightbulb,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import Container from "../Components/Container/Container";
import Heding from "../Components/Heding/Heding";
import Subscribe from "../Components/Subsribe/Subscribe";
import From from "../Components/From/From";

const features = [
  {
    icon: <img src="/icon1.svg" alt="icon1" className="w-7 h-7" />,
    bg: "bg-red-100",
    title: "Future Focus",
    desc: "Ecology is crucial for our understanding of the natural world",
  },
  {
    icon: <img src="/icon2.svg" alt="icon2" className="w-7 h-7" />,
    bg: "bg-cyan-100",
    title: "Smart Scholars",
    desc: "Ecology is crucial for our understanding of the natural world",
  },
  {
    icon: <img src="/icon3.svg" alt="icon3" className="w-7 h-7" />,
    bg: "bg-yellow-100",
    title: "Knowledge Hub",
    desc: "Ecology is crucial for our understanding of the natural world",
  },
  {
    icon: <img src="/icon4.svg" alt="icon4" className="w-7 h-7" />,
    bg: "bg-purple-100",
    title: " Learning Pathways",
    desc: "Ecology is crucial for our understanding of the natural world",
  },
];

const courses = [
  {
    id: 1,
    category: "Devlopment",
    categoryColor: "bg-blue-500",
    image: "/image2.png",
    students: 30,
    rating: 5,
    reviews: 11,
    title: "Design of Personal Shape Our Your Path",
    instructor: "Angela",
    instructorImage: "/image4.png",
  },
  {
    id: 2,
    category: "Design",
    categoryColor: "bg-blue-500",
    image: "/image2.png",
    students: 30,
    rating: 5,
    reviews: 11,
    title: "Design of Personal Shape Our Your Path",
    instructor: "Angela",
    instructorImage: "/image4.png",
  },
  {
    id: 3,
    category: "Python",
    categoryColor: "bg-blue-500",
    image: "/image3.png",
    students: 30,
    rating: 5,
    reviews: 11,
    title: "Python for Data Science & Machine",
    instructor: "Angela",
    instructorImage: "/image4.png",
  },
  {
    id: 4,
    category: "Design",
    categoryColor: "bg-blue-500",
    image: "/image2.png",
    students: 30,
    rating: 5,
    reviews: 11,
    title: "Design of Personal Shape Our Your Path",
    instructor: "Angela",
    instructorImage: "/image4.png",
  },
  {
    id: 5,
    category: "Design",
    categoryColor: "bg-blue-500",
    image: "/image2.png",
    students: 30,
    rating: 5,
    reviews: 11,
    title: "Design of Personal Shape Our Your Path",
    instructor: "Angela",
    instructorImage: "/image4.png",
  },
  {
    id: 6,
    category: "Design",
    categoryColor: "bg-blue-500",
    image: "/image2.png",
    students: 30,
    rating: 5,
    reviews: 11,
    title: "Design of Personal Shape Our Your Path",
    instructor: "Angela",
    instructorImage: "/image4.png",
  },
  {
    id: 7,
    category: "Design",
    categoryColor: "bg-blue-500",
    image: "/image2.png",
    students: 30,
    rating: 5,
    reviews: 11,
    title: "Design of Personal Shape Our Your Path",
    instructor: "Angela",
    instructorImage: "/image4.png",
  },
];

const ServicePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCourses = 3;
  const maxIndex = Math.max(0, courses.length - visibleCourses);

  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <>
      <section className="bg-[url('/Hero.jpg')] bg-cover bg-center] h-[300px] text-black ">
        <div className=" flex items-center justify-center mx-auto pt-[80px]">
          <h2 className="font-bold text-[36px]">Service Page</h2>
        </div>
        <div className=" flex items-center justify-center mx-auto pt-1">
          <Link href="/service">service</Link>
        </div>
      </section>
      <Container>
        {/* ✅ FEATURES SECTION */}
        <section className="py-16 px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-transform"
              >
                <div
                  className={`w-16 h-16 mx-auto flex items-center justify-center rounded-lg ${item.bg}`}
                >
                  {item.icon}
                </div>
                <h3 className="mt-4 font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ COURSES SLIDER */}
        <section className=" py-12 relative">
          <div className="flex justify-start">
            <div>
              <p className="font-bold text-[18px] text-[#2F57EF]">
                Services we’re offering
              </p>
              <h3 className="font-bold text-[42px] leading-13 pt-3 w-[434px]">
                Navigating your path to success
              </h3>
            </div>
          </div>
          {/* Slider Buttons */}
          <div className="flex gap-3 justify-end mb-6">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                currentIndex === maxIndex
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* ✅ Carousel Wrapper */}
          <div className="overflow-hidden px-6">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCourses)
                }%)`,
              }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="min-w-[100%] md:min-w-[50%] lg:min-w-[33.33%] px-3"
                >
                  {/* Single Course Card */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                      />
                      <span
                        className={`${course.categoryColor} absolute top-4 left-4 text-white px-4 py-2 rounded-lg text-sm font-medium`}
                      >
                        {course.category}
                      </span>
                    </div>
                    <div className="p-6">
                      {/* Stats */}
                      <div className="flex justify-between mb-4">
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">
                            {course.students} Students
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="flex text-[#FF9747] mr-2">
                            {[...Array(course.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-[#192335] font-medium">
                            ({course.reviews})
                          </span>
                        </div>
                      </div>
                      {/* Title */}
                      <h3 className="text-[22px] font-bold text-[#192335] mb-6">
                        {course.title}
                      </h3>
                      {/* Instructor & Enroll */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={course.instructorImage}
                            alt={course.instructor}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <span className="text-[#192335] font-medium">
                            By {course.instructor}
                          </span>
                        </div>
                        <button className="flex items-center text-[18px] text-[#2F57EF] font-bold hover:underline">
                          Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Decoration */}
          <div className="absolute right-20 -translate-y-[400px] animate-float z-20">
            <img src="/line.svg" alt="Line Decoration" className="h-[145px]" />
          </div>
        </section>
      </Container>
      <Subscribe />
      <From />
    </>
  );
};

export default ServicePage;
