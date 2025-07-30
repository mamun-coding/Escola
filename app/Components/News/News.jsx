import React from 'react';
import Container from '../Container/Container';

const blogPosts = [
  {
    id: 1,
    image: "/newsimg1.png",
    category: "Category",
    comments: "Comments (05)",
    title: "Empowering Your Business For Growth"
  },
  {
    id: 2,
    image: "/newsimg2.png",
    category: "Category",
    comments: "Comments (01)",
    title: "Hard Work Always Brings You Success"
  },
  
  {
    id: 3,
    image: "/newsimg3.png",
    category: "Category",
    comments: "Comments (02)",
    title: "Results-Driven Consulting At Its Finest"
  }
];

const News = () => {
  return (
   <Container>
     <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <p className="text-blue-600 font-medium text-lg mb-4">Blog & Article</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
              Business Strategy Is The Plan And Actions
            </h2>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200 mt-4 lg:mt-0">
            All Blogs
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {blogPosts.map((post) => (
            <div key={post.id} className="">
              {/* Image */}
              <div className="relative w-full  object-cover object-center">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="   absolute bottom-[-40px] translate-x-[2%] transform -translate-y-[-20%]  px-[30px] py-[20px] w-[350px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                {/* Meta Info */}
               <div>
               <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z" clipRule="evenodd" />
                    </svg>
                    {post.category}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    {post.comments}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </Container>
  );
};

export default News;
