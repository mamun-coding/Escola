"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import LiveMap from "../Components/liveMap/Live_map";
import Container from "../Components/Container/Container";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Number",
    primary: "88 01234 5345 32",
    secondary: "012 345 678 8901",
  },
  {
    icon: Mail,
    title: "Your Email",
    primary: "Getmail@mail.com",
    secondary: "info@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    primary: "99 united America",
    secondary: "22 New York City",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
   <Container className="">
     <div className="relative">
    
     

      {/* Content */}
      <div className=" relative   mx-auto px-4 py-16">
        {/* Contact Info */}
        <div className=" transfrom translate-y-[120px] z-50 flex flex-wrap justify-center gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center min-w-[280px] max-w-[320px]"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-4">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {info.title}
              </h3>
              <p className="text-gray-700 font-medium mb-1">{info.primary}</p>
              <p className="text-gray-600 text-sm">{info.secondary}</p>
            </div>
          ))}
        </div>
        <div className=" inset-0 bg-cover bg-center bg-no-repeat">
        
         
        <iframe
      className="w-full h-[480px]"
      src="https://www.openstreetmap.org/export/embed.html?bbox=..."
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
      </div>

        {/* Contact Form */}
        <div className="mx-auto bg-white rounded-2xl shadow-xl p-8 ]">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase">
                Contact us
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Do You Have Any Question?
              </h2>
              <p className="text-gray-600 mb-8">
                We provide car selling, buying and exchange services...
              </p>
              <div className="flex space-x-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded hover:bg-gray-700"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side Form */}
            <form onSubmit={handleSubmit} className=" pt-[120px]">
              <div className="  grid grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="border p-3 rounded-lg w-full"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="border p-3 rounded-lg w-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="border p-3 rounded-lg w-full"
                />
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="border p-3 rounded-lg w-full"
                />
              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="border p-3 rounded-lg w-full"
              >
                <option value="">SERVICE</option>
                <option value="car-selling">Car Selling</option>
                <option value="car-buying">Car Buying</option>
                <option value="car-exchange">Car Exchange</option>
                <option value="maintenance">Maintenance</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="6"
                className="border p-3 rounded-lg w-full resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
   </Container>
  );
}
