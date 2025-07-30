import React from "react";
import Heding from "../Heding/Heding";
import Container from "../Container/Container";
// import Icon1 from "../../icon/icon1.svg"
// import Icon2 from "../../icon/icon2.svg"
// import Icon3 from "../../icon/icon3.svg"
// import Icon4 from "../../icon/icon4.svg"

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
      <Container className="pt-[120px]">
        <Heding
          subHeading="Top Popular Course"
          heading="Preserving the earth for future generations"
        />

        <div className=" ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-[62px]">
            {features.map((item, i) => (
              <div key={i} className={`p-6 rounded-xl ${item.bg}`}>
                <div className=" ">
                  <div className=" flex justify-center w-[80px] p-[18px] rounded-md  shadow-sm ">
                    {item.icon}
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <h3 className="text-lg pb-[16px] font-bold">
                        {item.title}
                      </h3>
                      <p className="text-[17px] text-[#192335] mb-[20px]">
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
                    <div className="max-w-[296px] ">
                      {item.imgSrc}
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
