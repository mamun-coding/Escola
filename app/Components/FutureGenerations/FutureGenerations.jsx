import React from "react";

// Mock components
const Heding = ({ subHeading, heading }) => (
  <div className="text-center mb-8">
    <p className="text-blue-600 text-sm font-medium mb-2">{subHeading}</p>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{heading}</h2>
  </div>
);

const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const features = [
  {
    icon: <img src="/icon1.svg" alt="icon1" className="w-7 h-7" />,
    bg: "bg-red-100",
    title: "Enim Esse Nihil",
    desc: "Ecology is crucial for our understanding of the natural world",
    imgSrc: <img src="/student1.png" alt="" />,
  },
  {
    icon: <img src="/icon2.svg" alt="icon2" className="w-7 h-7" />,
    bg: "bg-cyan-100",
    title: "Adipisci Magni Ab",
    desc: "Ecology is crucial for our understanding of the natural world",
    imgSrc: <img src="/student2.png" alt="" />,
  },
  {
    icon: <img src="/icon3.svg" alt="icon3" className="w-7 h-7" />,
    bg: "bg-yellow-100",
    title: "Praesentium Amet Rerum",
    desc: "Ecology is crucial for our understanding of the natural world",
    imgSrc: <img src="/student3.png" alt="" />,
  },
  {
    icon: <img src="/icon4.svg" alt="icon4" className="w-7 h-7" />,
    bg: "bg-purple-100",
    title: "Tempore Laborum Animi",
    desc: "Ecology is crucial for our understanding of the natural world",
    imgSrc: <img src="/student4.png" alt="" />,
  },
];

const FutureGenerations = () => {
  return (
    <>
      <Container className="pt-16 sm:pt-20 md:pt-24 lg:pt-[120px]">
        <Heding
          subHeading="Top Popular Course"
          heading="Preserving the earth for future generations"
        />

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-8 sm:pt-12 md:pt-[62px]">
            {features.map((item, i) => (
              <div key={i} className={`p-4 sm:p-6 rounded-xl ${item.bg}`}>
                <div className="">
                  <div className="flex justify-center w-16 sm:w-[80px] p-3 sm:p-[18px] rounded-md shadow-sm mb-4 sm:mb-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg pb-3 sm:pb-[16px] font-bold">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-[17px] text-[#192335] mb-4 sm:mb-[20px] leading-relaxed">
                        {item.desc}
                      </p>
                      <a
                        href="#"
                        className="text-sm text-black font-medium mt-2 inline-flex items-center group"
                      >
                        Read More
                        <span className="ml-1 group-hover:translate-x-1 transition-transform">
                          &rarr;
                        </span>
                      </a>
                    </div>
                    <div className="w-full sm:max-w-[200px] md:max-w-[240px] lg:max-w-[296px] flex-shrink-0">
                      <div className="w-full h-auto">
                        {React.cloneElement(item.imgSrc, {
                          className: "w-full h-auto object-cover rounded-lg"
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default FutureGenerations;