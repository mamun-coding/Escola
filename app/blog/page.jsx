 "use client";
import React from "react";
import Link from "next/link";
import { Search, Clock } from 'lucide-react';
import Container from "../Components/Container/Container";
const posts = [
  {
    id: 1,
    category: "Education",
    date: "October 25, 2025",
    title: "Unleashing Your Inner Genius: A Guide to Achieving Your Ambitions",
    excerpt:
      "Aliquam erat volutpat, posuere lorem ipsum, accumsan laoreet malesuada.",
    image: "/blog1.png",
  },
  {
    id: 2,
    category: "Education",
    date: "October 26, 2025",
    title: "Educating for Success: A Guide to Achieving Your Goals",
    excerpt:
      "Aliquam erat volutpat, posuere lorem ipsum, accumsan laoreet malesuada.",
    image: "/blog2.png",
  },
  {
    id: 3,
    category: "Education",
    date: "October 28, 2025",
    title: "Unlocking Your Potential: A Guide to Achieving Your Dreams",
    excerpt:
      "Aliquam erat volutpat, posuere lorem ipsum, accumsan laoreet malesuada.",
    image: "/blog3.png",
  },
];



  const recentNews = [
    {
      id: 1,
      title: "Empowering future with solar",
      date: "2 minutes ago",
      image: "/blog4.png"
    },
    {
      id: 2,
      title: "Marketing For Real market watch",
      date: "5 minutes ago",
      image: "/blog4.png"
    },
    {
      id: 3,
      title: "Cordanis Integer urna at hendrerit",
      date: "8 minutes ago",
     image: "/blog4.png"
    }
  ];

  const categories = [
    { name: "Business", count: 5 },
    { name: "Finance", count: 7 },
    { name: "Web Design", count: 2 },
    { name: "Travel", count: 3 },
    { name: "IT Service", count: 1 }
  ];

  const popularTags = [
    "Information", "Learn", "ICT", "Business", "Portfolio", "Project", 
    "Template", "Server"
  ];
const BlogPage = () => {
  return (
    
   <>
       <section className="bg-[url('/Hero.jpg')] bg-cover bg-center] h-[300px] text-black ">
        <div className=" flex items-center justify-center mx-auto pt-[80px]">
          <h2 className="font-bold text-[36px]">Blog Page</h2>
        </div>
        <div className=" flex items-center justify-center mx-auto pt-1">
          <Link href="/service">Blopg</Link>
        </div>
      </section>
   <Container className="pt-[120px]">
     <div className="  grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
      {/* Left Section - Blog Posts */}
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md mb-8 overflow-hidden"
          >
            <div className="">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500">
                By Admin | <span className="text-blue-600">{post.category}</span> | {post.date}
              </p>
              <h2 className="text-2xl font-bold mt-2 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-6">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 border rounded ${
                page === 1 
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section - Sidebar */}
      <aside>
        {/* Search */}
        <div className="w-80 bg-white p-6 space-y-8">
      {/* Search Section */}
      <div>
        <h3 className="text-blue-600 font-semibold text-lg mb-4">Search Here</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Key word"
            className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Recent News Section */}
      <div>
        <h3 className="text-blue-600 font-semibold text-lg mb-4">Recent News</h3>
        <div className="space-y-4">
          {recentNews.map((news) => (
            <div key={news.id} className="flex space-x-3">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-800 font-medium text-sm leading-tight mb-1 line-clamp-2">
                  {news.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {news.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Section */}
      <div>
        <h3 className="text-blue-600 font-semibold text-lg mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                {category.name}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags Section */}
      <div>
        <h3 className="text-blue-600 font-semibold text-lg mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
      </aside>
    </div>
   </Container>
   
   </>
  );
};

export default BlogPage;
