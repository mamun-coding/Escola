 'use client';
import React, { useState } from 'react';

// Mock Container component
const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const From = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = () => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
    };

  return (
    <>
    <section className="bg-[url('/frombg.jpg')] bg-cover bg-center mt-[120px] sm:mt-20 md:mt-24">
    <Container>
        <div className="">
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="mb-4 sm:mb-6 md:mb-8">
            <span className="text-[#2F57EF] text-sm font-medium">Clients Review</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-4 sm:px-0">
            Bringing your <span className="text-[#2F57EF]">vision</span> to life
          </h1>
          <p className="text-white text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            For your car we will do everything, advice design in us repairs and<br className="hidden sm:block" />
            maintenance. We are the some preferred.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">

          <div className="order-2 lg:order-1">
            
             <div>
                <img src="/fromimg.png" alt="" className="w-full h-auto" />
             </div>
          </div>

          {/* Right side - Form */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/60 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/60 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/60 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/60 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/60 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="px-8 sm:px-[43px] py-4 sm:py-[21px] bg-[#2F57EF] text-white font-medium rounded-[5px]"
            >
              submit now
            </button>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </section>
    </>
  );
}
 export  default From;