 'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Logos from '../Logos/Logos';
import Container from '../Container/Container';

const Expart = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Architecto id sint aut est molestiae reiciendis. Minima quis illo. Accusamus repudiandae neque veniam. Quasi rerum sit consequuntur aut tenetur.",
      author: "Courtney Henry",
      position: "Marketing specialist",
      avatar: <img src="/josh.png" alt="Courtney Henry" className="w-full h-full object-cover rounded-full" />
    },
    {
      id: 2,
      rating: 5,
      text: "Blanditiis etus neque sed voluptatibus qui velit voluptatibus dolor reiciendis. Pariatur ex ipsam mollitia at. Iste temporibus labore nihil velit",
      author: "Ralph Edwards",
      position: "CEO specialist",
      avatar: <img src="/josh.png" alt="Ralph Edwards" className="w-full h-full object-cover rounded-full" />
    },
    {
      id: 3,
      rating: 5,
      text: "Et recusandae consequatur voluptatibus quia occaecati sed velit. Recusandae ducimus voluptas illo sunt occaecati. Fugiat nihil sed reprehenderit",
      author: "Ralph Edwards",
      position: "CEO specialist",
      avatar: <img src="/josh.png" alt="Ralph Edwards" className="w-full h-full object-cover rounded-full" />
    },
    {
      id: 4,
      rating: 5,
      text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      author: "Jane Cooper",
      position: "Product Manager",
      avatar: <img src="/josh.png" alt="Jane Cooper" className="w-full h-full object-cover rounded-full" />
    },
    {
      id: 5,
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
      author: "Wade Warren",
      position: "Design Lead",
      avatar: <img src="/josh.png" alt="Wade Warren" className="w-full h-full object-cover rounded-full" />
    },
    {
      id: 6,
      rating: 5,
      text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
      author: "Brooklyn Simmons",
      position: "Marketing Director",
      avatar: <img src="/josh.png" alt="Brooklyn Simmons" className="w-full h-full object-cover rounded-full" />
    }
  ];

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Tablet: 2 items
      } else {
        setItemsPerSlide(3); // Desktop: 3 items
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Reset to first slide when screen size changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [itemsPerSlide]);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-3 sm:mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      <Container className="min-h-[600px] sm:min-h-[700px] lg:h-[950px] bg-[url('/framew.jpg')] bg-cover bg-center mt-8 sm:mt-16 lg:mt-[160px] z-50 relative">
        <Logos/>
        
        <div className="pt-8 sm:pt-16 lg:pt-[110px] px-4 sm:px-6 lg:px-8">
          {/* Blue corner decorations - only on desktop */}
          <div className="hidden lg:block">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-blue-400"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-blue-400"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-blue-400"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
              <div className="text-center sm:text-left w-full sm:w-auto">
                <div className="text-[#2F57EF] leading-6 sm:leading-8 text-base sm:text-lg lg:text-[18px] font-bold">
                  Clients Review
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#192335] leading-tight lg:leading-[52px] mt-2">
                    Expert Guidance for<br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>Your Journey
                  </h2>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="flex gap-2 mx-auto sm:mx-0">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-gray-100 focus:outline-none rounded-full transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 focus:bg-blue-600 focus:outline-none text-white rounded-full transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              {/* Reviews Carousel */}
              <div className="relative">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className={`grid gap-4 sm:gap-6 lg:gap-8 px-2 ${
                        itemsPerSlide === 1 ? 'grid-cols-1' :
                        itemsPerSlide === 2 ? 'grid-cols-1 md:grid-cols-2' :
                        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                      }`}>
                        {reviews
                          .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                          .map((review) => (
                            <div key={review.id} className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                              {/* Star Rating */}
                              <StarRating rating={review.rating} />
                              
                              {/* Quote Icon */}
                              <div className="mb-3 sm:mb-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                  <Quote className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                                </div>
                              </div>
                              
                              {/* Review Text */}
                              <p className="text-[#192335] mb-6 sm:mb-8 lg:mb-[41px] mt-4 sm:mt-8 lg:mt-[59px] leading-6 sm:leading-7 lg:leading-8 text-sm sm:text-base lg:text-[17px]">
                                {review.text}
                              </p>
                              
                              {/* Author Info */}
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                                  {review.avatar}
                                </div>
                                <div className="min-w-0">
                                  <h4 className="text-[#192335] font-bold text-sm sm:text-base lg:text-[18px] leading-5 sm:leading-6 truncate">
                                    {review.author}
                                  </h4>
                                  <p className="text-[#192335] leading-5 sm:leading-6 text-xs sm:text-sm lg:text-[17px] text-gray-600 truncate">
                                    {review.position}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center mt-6 sm:mt-8 gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 focus:outline-none ${
                      index === currentSlide 
                        ? 'bg-blue-600 focus:bg-blue-600' 
                        : 'bg-gray-300 hover:bg-gray-400 focus:bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="flex justify-center mt-3 sm:mt-4">
                <span className="text-gray-500 text-xs sm:text-sm">
                  {currentSlide + 1} / {totalSlides}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Expart;