import Link from "next/link";
import React from "react";

import Courses from "../Components/Popular_curse/Curose";
import Passion from "../Components/Passion/Passion";
import Knowloge from "../Components/Knowloge/Knowloge";
import Expart from "../Components/Expart/Expart";
import From from "../Components/From/From";

const AboutPage = () => {
  return (
    <>
      <section className="bg-[url('/Hero.jpg')] bg-cover bg-center] h-[300px] text-black ">
        <div className=" flex items-center justify-center mx-auto pt-[80px]">
          <h2 className="font-bold text-[36px]">About Page</h2>
        </div>
        <div className=" flex items-center justify-center mx-auto pt-1">
          <Link href="/" className="font-bold text-[21px]">
            Home
          </Link>
        </div>
        <Courses></Courses>
        <Passion/>
        <Knowloge/>
        <Expart/>
        <From/>
      </section>
    </>
  );
};

export default AboutPage;
