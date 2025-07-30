import React from 'react'
import AboutUs from "../Components/AboutUs/AboutzUs";
import Banner from "../Components/Banner/Banner";
import Course from "../Components/Course/Course";
import Expart from "../Components/Expart/Expart";

import From from "../Components/From/From";
import FutureGenerations from "../Components/FutureGenerations/FutureGenerations";
import Knowloge from "../Components/Knowloge/Knowloge";
import News from "../Components/News/News";
import Subscribe from "../Components/Subsribe/Subscribe";
import Team from "../Components/Team/Team";
 
const Homes = () => {
  return (
    <>
    
   <Banner/>
   <Course/>
   <Knowloge/>
   <AboutUs/>
   <FutureGenerations/>
   <Subscribe/>
   <Team/>
   <Expart/>
   <From/>
   <News/>
   
    </>
  )
}

export default Homes
