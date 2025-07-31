import React from "react";

// Mock Container component
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const logos = [
  { name: "Mailgun", src: "/logos1.svg" },
  { name: "Kabbage", src: "/logos2.svg" },
  { name: "illumos", src: "/logos3.svg" },
  { name: "Jasmine", src: "/logos5.svg" },
  { name: "Jasmine", src: "/logos2.svg" },
];

const Logos = () => {
  return (
    <>
      <Container className="p-6 sm:p-8 md:p-12 lg:p-[60px] bg-white shadow">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-[129px]">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-6 sm:h-7 md:h-8 w-auto object-contain"
              />
              <span className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2">{logo.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Logos;