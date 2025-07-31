import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { MdDone } from "react-icons/md";
import Container from '../Container/Container';

const Footer = () => {
  return (
    <footer className="min-h-[400px] sm:min-h-[500px] lg:h-[550px] bg-[url('/footer.jpg')] bg-cover bg-center text-white relative mt-16 sm:mt-24 lg:mt-[200px]">
      <Container>
        {/* Newsletter Section */}
        <div className="absolute -top-10 sm:-top-16 lg:-top-20 left-4 right-4 sm:left-6 sm:right-6 lg:left-0 lg:right-0 flex justify-center">
          <div className="bg-[#2952FF] rounded-md px-4 sm:px-8 lg:px-[76px] py-6 sm:py-10 lg:py-[70px] w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between shadow-lg gap-6 sm:gap-8 lg:gap-[150px]">
            <div className="text-center lg:text-left w-full lg:w-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-tight lg:leading-[52px] pb-2 sm:pb-3 lg:pb-[17px] font-bold">
                Newsletters
              </h2>
              <p className="text-sm sm:text-base lg:text-base">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center w-full lg:w-auto gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="px-4 sm:px-5 py-2 sm:py-3 border-none w-full sm:w-64 lg:w-72 text-black rounded sm:rounded-none sm:rounded-l text-sm sm:text-base"
              />
              <button className="flex items-center justify-center gap-2 bg-transparent border border-white px-4 sm:px-6 py-2 sm:py-3 rounded sm:rounded-none sm:rounded-r text-white hover:bg-white hover:text-[#2952FF] transition w-full sm:w-auto text-sm sm:text-base">
                <Send size={14} className="sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">Browse More</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="pt-24 sm:pt-32 lg:pt-[186px] pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[500px_190px_300px] gap-8 sm:gap-12 lg:gap-[150px] max-w-7xl mx-auto">
            
            {/* Escola Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3 sm:mb-4">
                <img src="/book.svg" alt="Escola Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
                <h2 className="font-bold text-xl sm:text-2xl lg:text-[30px] leading-tight lg:leading-[38px]">
                  Escola
                </h2>
              </div>
              <p className="text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-6 mb-6 sm:mb-8 lg:mb-[39px]">
                Many desktop publishing packages web page editors no Lorem Ipsum a default model text, and a search for
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                <div className="bg-[#192335] p-2 sm:p-3 rounded-full hover:bg-[#2a3a4a] transition-colors cursor-pointer">
                  <Facebook color="white" size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
                <div className="bg-[#192335] p-2 sm:p-3 rounded-full hover:bg-[#2a3a4a] transition-colors cursor-pointer">
                  <Linkedin color="white" size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
                <div className="bg-[#192335] p-2 sm:p-3 rounded-full hover:bg-[#2a3a4a] transition-colors cursor-pointer">
                  <Instagram color="white" size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
                <div className="bg-[#192335] p-2 sm:p-3 rounded-full hover:bg-[#2a3a4a] transition-colors cursor-pointer">
                  <Twitter color="white" size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Useful Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center justify-center md:justify-start gap-1 sm:gap-2 text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-6 hover:text-gray-300 transition-colors cursor-pointer">
                  <MdDone className="flex-shrink-0" size={16} />
                  <span>Software Corner</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-1 sm:gap-2 text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-6 hover:text-gray-300 transition-colors cursor-pointer">
                  <MdDone className="flex-shrink-0" size={16} />
                  <span>Application Center</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-1 sm:gap-2 text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-6 hover:text-gray-300 transition-colors cursor-pointer">
                  <MdDone className="flex-shrink-0" size={16} />
                  <span>Research Section</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-1 sm:gap-2 text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-6 hover:text-gray-300 transition-colors cursor-pointer">
                  <MdDone className="flex-shrink-0" size={16} />
                  <span>Developing Corner</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left md:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-6">
                  <Phone size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                  <a href="tel:+88012345678" className="hover:text-gray-300 transition-colors">
                    +880 123 45 67 89
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-6">
                  <Mail size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                  <a href="mailto:yourmail@gmail.com" className="hover:text-gray-300 transition-colors">
                    yourmail@gmail.com
                  </a>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-2 sm:gap-3 text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-6">
                  <MapPin size={14} className="sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-center md:text-left">
                    1212, Las Vegas, The Veg Street, USA
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-12 lg:pt-[90px] py-4 sm:py-5 px-4 sm:px-6 lg:px-20 border-t border-gray-600">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-3 sm:gap-0 max-w-7xl mx-auto">
            <p className="text-center sm:text-left">
              © Yoursitename 2023 | All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy</span>
              <span className="text-gray-400">|</span>
              <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms</span>
              <span className="text-gray-400">|</span>
              <span className="hover:text-gray-300 transition-colors cursor-pointer">Sitemap</span>
              <span className="text-gray-400">|</span>
              <span className="hover:text-gray-300 transition-colors cursor-pointer">Help</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;