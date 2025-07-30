import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { MdDone } from "react-icons/md";
import Container from '../Container/Container';

const Footer = () => {
  return (

    
      <footer className="h-[550px] bg-[url('/footer.jpg')] bg-cover bg-center  text-white relative mt-[200px] ">
      <Container>
      <div className="absolute -top-20 left-0 w-full flex justify-center">
        <div className="bg-[#2952FF]  rounded-md px-[76px] py-[70px]  flex flex-col md:flex-row items-center justify-between shadow-lg gap-[150px]">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-[42px] leading-13 pb-[17px] font-bold">Newsletters</h2>
            <p className="text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="flex flex-col md:flex-row border items-center ">
            <input
              type="email"
              placeholder="Enter Email Adress"
              className="px-5 py-3  border-none w-full md:w-72 text-black"
            />
            <button className="flex items-center gap-2 bg-transparent border border-white px-6 py-3 rounded text-white hover:bg-white hover:text-[#2952FF] transition">
              <Send size={16} />
              Browse More
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="pt-[186px] pb-10 px-6 md:px-20 grid md:grid-cols-[500px_190px_300px] gap-[150px]">
        {/* Escola Info */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-xl font-bold">
            <img src="/book.svg" alt="" />
            <h2 className='font-bold text-[30px] leading-13'>Escola</h2>
          </div>
          <p className="text-[17px] leading-6 mb-[39px]">
            Many desktop publishing packages web page editors no Lorem Ipsum a default model text, and a search for
          </p>
          <div className="flex gap-3">
            <div className="bg-[#192335] p-3 rounded-full text-[#0C1D36]"><Facebook color='white'  size={18} /></div>
            <div className="bg-[#192335] p-3 rounded-full text-[#0C1D36]"><Linkedin color='white'  size={18} /></div>
            <div className="bg-[#192335] p-3 rounded-full text-[#0C1D36]"><Instagram color='white'   size={18} /></div>
            <div className="bg-[#192335] p-3 rounded-full text-[#0C1D36]"><Twitter color='white'   size={18} /></div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li className='flex items-center gap-1 text-[17px] leading-6'><MdDone /> Software Corner</li>
            <li className='flex items-center gap-1 text-[17px] leading-6'><MdDone /> Application Center</li>
            <li className='flex items-center gap-1 text-[17px] leading-6'><MdDone /> Research Section</li>
            <li className='flex items-center gap-1 text-[17px] leading-6'><MdDone /> Developing Corner</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-[17px] leading-6"><Phone size={16} /> +880 123 45 67 89</li>
            <li className="flex items-center gap-2 text-[17px] leading-6"><Mail size={16} /> yourmail@gmail.com</li>
            <li className="flex items-center gap-2 text-[17px] leading-6" ><MapPin size={16} /> 1212, Lav Vegas, The Veg Street, USA</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-[90px] py-5 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© Yoursitename 2023 | All Rights Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span>Privacy</span>
          <span>|</span>
          <span>Terms</span>
          <span>|</span>
          <span>Sitemap</span>
          <span>|</span>
          <span>Help</span>
        </div>
      </div>
      </Container>
    
    </footer>
   
 
  );
};

export default Footer;
