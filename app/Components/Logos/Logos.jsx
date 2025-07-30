import React from "react";
import Container from "../Container/Container";

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
      <Container className="p-[60px] bg-white shadow ">
        <div className="flex flex-wrap justify-center items-center gap-[129px]">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain"
              />
              <span className="text-sm text-gray-700 mt-2">{logo.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Logos;
