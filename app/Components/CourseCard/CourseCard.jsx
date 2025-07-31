import React from "react";
import { Users, Star, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    category: "Development",
    categoryColor: "bg-blue-500",
    image: "/iamge1.png",
    students: 50,
    rating: 5,
    reviews: 15,
    title: "The Power of Personal Branding",
    instructor: "Angela",
    instructorImage: "/image4.png",
  },
  {
    id: 2,
    category: "Design",
    categoryColor: "bg-blue-500",
    image: "/image2.png",
    students: 30,
    rating: 5,
    reviews: 11,
    title: "Design of Personal Shape Our Your Path",
    instructor: "Angela",
    instructorImage: "/image4.png",
  },
  {
    id: 3,
    category: "Python",
    categoryColor: "bg-blue-500",
    image: "/image3.png",
    students: 30,
    rating: 5,
    reviews: 11,
    title: "Python for Data Science & Machine",
    instructor: "Angela",
    instructorImage: "/image4.png",
  },
];

const CourseCard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[30px] max-w-7xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full"
            >
              {/* Course Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span
                    className={`${course.categoryColor} text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium`}
                  >
                    {course.category}
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-4 sm:p-5 lg:p-6">
                {/* Stats Row */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-medium">
                      {course.students} Students
                    </span>
                  </div>

                  <div className="flex items-center">
                    <div className="flex text-[#FF9747] mr-1 sm:mr-2">
                      {[...Array(course.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-[#192335] font-medium">
                      ({course.reviews})
                    </span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-lg sm:text-xl lg:text-[25px] font-bold text-[#192335] mb-4 sm:mb-5 lg:mb-6 leading-6 sm:leading-7 lg:leading-8 line-clamp-2">
                  {course.title}
                </h3>

                {/* Instructor & Enroll */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center min-w-0 flex-1">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover mr-2 sm:mr-3 flex-shrink-0"
                    />
                    <span className="text-sm sm:text-base text-[#192335] font-medium truncate">
                      By {course.instructor}
                    </span>
                  </div>

                  <button className="flex items-center text-sm sm:text-base lg:text-[18px] text-[#2F57EF] font-bold hover:text-[#1E40AF] transition-colors flex-shrink-0">
                    <span className="hidden sm:inline">Enroll Now</span>
                    <span className="sm:hidden">Enroll</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Line - Only visible on larger screens */}
        <div className="hidden lg:block absolute right-4 xl:right-80 top-1/2 transform -translate-y-1/2 z-20">
          <div className="animate-bounce">
            <img
              src="/line.svg"
              alt="Line Decoration"
              className="w-auto h-[100px] xl:h-[145px] opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;