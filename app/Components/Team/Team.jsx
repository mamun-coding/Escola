import React from "react";

import Container from "../Container/Container";

import { Facebook, Twitter, Instagram } from "lucide-react";
 

const teamMembers = [
  {
    name: "Bessie Cooper",
    department: "Software Department",
    image: "/mentor1.png",
  },
  {
    name: "Devon Lane",
    department: "Marketing Department",
    image: "/mentor2.png",
  },
  {
    name: "Darrell Steward",
    department: "IT Department",
    image: "/mentor3.png",
  },
  {
    name: "Bessie Cooper",
    department: "Software Department",
    image: "/mentor1.png",
  },
];

const Team = () => {
  return (
    <>
      <Container className="pt-[120px] ">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-6 bg-white">
          {/* Left Text */}
          <div className="md:col-span-1">
            <p className="text-[18px] font-bold text-[#246BFD] ">
              Top Popular Course
            </p>
            <h2 className="text-[39px] font-bold  pt-[30px]">
              Your <span className="text-[#246BFD]">partner</span> in <br />
              digital success
            </h2>
          </div>

          {/* Right Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-md border-white overflow-hidden shadow-sm"
              >
                {/* Image + hover effect */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full  object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
            
                  <div className="absolute inset-0 bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <div className="bg-white px-6 py-2 rounded-full flex gap-3 transition duration-300">
                      <Facebook
                        size={16}
                        className="text-[#192335] hover:text-[#246BFD] cursor-pointer"
                      />
                      <Twitter
                        size={16}
                        className="text-[#192335] hover:text-[#246BFD] cursor-pointer"
                      />
                      <Instagram
                        size={16}
                        className="text-[#192335] hover:text-pink-500 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="pt-4 pb-4 px-4 text-center">
                  <h3 className="text-[21px] font-bold text-[#192335]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#192335]">{member.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </Container>
    </>
  );
};

export default Team;
