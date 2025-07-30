import React from "react";
import Container from "../Container/Container";

const Passion = () => {
  return (
    <>
      <Container className="pt-[120px] pb-[120px]">
        <div className="grid grid-cols-[1fr_480px] items-center bg-[#3D64FF] text-white">
          <div className="py-[56px] pl-[71px]">
            <h3 className="font-bold text-[42px] leading-13 pb-[48px] text-white">
              We made passion our raw material
            </h3>

            <div className="flex items-center gap-3">
              <div>
                <img src="playbtn.svg" alt="" />
              </div>
              <div>
              <p className="pb-1">Call Us Now</p>
              <p className="font-bold text-[21px]">+44 7700 900217</p>
              </div>
            </div>
           
          </div>
          <div className="animate-rote">
            <img src="aboutst.png" alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Passion;
