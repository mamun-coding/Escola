import React from 'react'
import { MailIcon } from 'lucide-react';
import Container from '../Container/Container';
const Subscribe = () => {
  return (
    <>
   <Container className='pt-[120px]'>
   <div className="bg-emerald-500 rounded-md px-[55px] py-[76px] flex flex-col md:flex-row items-center justify-between gap-6 w-full">
      {/* Left Side */}
      <div className="flex items-center gap-8">
        <MailIcon className="w-[56px] h-[63px] text-white" />
        <div className="text-white">
          <h2 className="text-[42px] font-bold leading-13">Subscribe your email for Newsletter</h2>
           
        </div>
      </div>

      {/* Right Side - Input + Button inside same white box */}
      <form className="w-full max-w-xl">
        <div className="flex bg-white rounded-full overflow-hidden shadow-md">
          <input
            type="email"
            placeholder="Your e-mail address"
            className="flex-grow px-5 py-3 rounded-l-full focus:outline-none text-gray-700"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-r-full font-semibold hover:bg-blue-700 transition"
          >
            Submit now
          </button>
        </div>
      </form>
    </div>
   </Container>
    </>
  )
}

export default Subscribe
