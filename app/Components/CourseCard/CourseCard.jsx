import React from "react";
import { Users, Star, ArrowRight } from "lucide-react";

 

const courses = [
  {
    id: 1,
    category: "Development",
    categoryColor: "bg-blue-500",
    image: "/iamge1.png ",
    students: 50,
    rating: 5,
    reviews: 15,
    title: "The Power of Personal Branding",
    instructor: "Angela",
    instructorImage: "/image4.png ",
  },
  {
    id: 2,
    category: "Design",
    categoryColor: "bg-blue-500",
    image: "/image2.png ",
    students: 30,
    rating: 5,
    reviews: 11,
    title: "Design of Personal Shape Our Your Path",
    instructor: "Angela",
    instructorImage: "/image4.png ",
  },

  {
    id: 3,
    category: "Python",
    categoryColor: "bg-blue-500",
    image: "/image3.png ",
    students: 30,
    rating: 5,
    reviews: 11,
    title: "Python for Data Science & Machine",
    instructor: "Angela",
    instructorImage: "/image4.png ",
  },
];
const CourseCard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-[30px]  mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`${course.categoryColor} text-white px-4 py-2 rounded-lg text-sm font-medium`}
                  >
                    {course.category}
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6">
                {/* Stats Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">
                      {course.students} Students
                    </span>
                  </div>

                  <div className="flex items-center">
                    <div className="flex text-[#FF9747] mr-2">
                      {[...Array(course.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-[#192335] font-medium">
                      ({course.reviews})
                    </span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-[25px] font-bold text-[#192335] mb-6 leading-8">
                  {course.title}
                </h3>

                {/* Instructor & Enroll */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <span className="text-[#192335] font-medium">
                      By {course.instructor}
                    </span>
                  </div>

                  <button className="flex items-center text-[18px] text-[#2F57EF] font-bold hover:text-[#2F57EF]transition-colors">
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute right-80 z-20   transform -translate-y-[-450px]  animate-float">
            <img
              src="/line.svg"
              alt="Line Decoration"
              className="w-auto h-[145px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
