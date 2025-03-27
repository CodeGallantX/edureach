import { useNavigate } from "react-router-dom";
import { PiStarFill, PiPlayCircle, PiCaretRightBold } from "react-icons/pi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const courses = [
  {
    title: "Introduction to React Development",
    author: "Akinyemi James",
    rating: 5,
    raters: 189,
    image: "/introduction_to_react.png", // Replace with your image URL
  },
  {
    title: "Become a Salsa Dancer in just 3 weeks",
    author: "Luca Bernando",
    rating: 4,
    raters: 86,
    image: "/salsa-dancing.jpg", // Replace with your image URL
  },
  {
    title: "Become a Professional Data Analyst",
    author: "Dr. Arowolo",
    rating: 4,
    raters: 111,
    image: "/data_analysis.jpeg", // Replace with your image URL
  },
  {
    title: "Fundamentals of Sales and Marketing",
    author: "Enoobong George",
    rating: 4.1,
    raters: 320,
    image: "/sales-and-marketing.png", // Replace with your image URL
  },
  {
    title: "Principle of Quantum Computing",
    author: "David J. Milan",
    rating: 5,
    raters: 53,
    image: "/principles-of-quantum-computing.jpeg", // Replace with your image URL
  },
  {
    title: "Genetics and Evolutionary Biology",
    author: "Dr. Victoria Sanyaolu",
    rating: 3.9,
    raters: 115,
    image: "/genetics.jpeg", 
  },
  {
    title: "Django for Beginners",
    author: "Matthew Dorcas",
    rating: 5,
    image: "/django-framework.jpeg",
  },
  {
    title: "Introduction to Rocket Science",
    author: "Kim Bernard",
    rating: 5,
    image: "/introduction-to-rocket-science.jpeg",
  },
    {
      title: "Mastering React: From Basics to Advanced",
      author: "Sarah Johnson",
      rating: 4.8,
      students: 1245,
      image: "https://placehold.co/200x120/4F46E5/FFFFFF?text=React",
      category: "Web Development",
      duration: "28 hours",
    },
    {
      title: "Salsa Dancing Pro: Zero to Performance in 3 Weeks",
      author: "Carlos Mendez",
      rating: 4.9,
      students: 892,
      image: "https://placehold.co/200x120/DC2626/FFFFFF?text=Salsa",
      category: "Dance",
      duration: "21 hours",
    },
    {
      title: "Data Analysis with Python: Complete Bootcamp",
      author: "Dr. Priya Patel",
      rating: 4.7,
      students: 3560,
      image: "https://placehold.co/200x120/059669/FFFFFF?text=Data+Science",
      category: "Data Science",
      duration: "42 hours",
    },
    {
      title: "Modern Digital Marketing Strategies 2023",
      author: "Jamal Williams",
      rating: 4.6,
      students: 2103,
      image: "https://placehold.co/200x120/9333EA/FFFFFF?text=Marketing",
      category: "Business",
      duration: "35 hours",
    },
    {
      title: "UI/UX Design Fundamentals with Figma",
      author: "Emma Zhang",
      rating: 4.9,
      students: 1876,
      image: "https://placehold.co/200x120/EA580C/FFFFFF?text=UX+Design",
      category: "Design",
      duration: "24 hours",
    },
    {
      title: "Blockchain & Cryptocurrency Fundamentals",
      author: "David Chen",
      rating: 4.5,
      students: 3150,
      image: "https://placehold.co/200x120/2563EB/FFFFFF?text=Blockchain",
      category: "Finance",
      duration: "18 hours",
    },
    {
      title: "Mobile App Development with Flutter",
      author: "Maria Rodriguez",
      rating: 4.7,
      students: 1432,
      image: "https://placehold.co/200x120/DB2777/FFFFFF?text=Flutter",
      category: "Mobile Development",
      duration: "32 hours",
    },
    {
      title: "Artificial Intelligence for Beginners",
      author: "Dr. Alan Turing",
      rating: 4.8,
      students: 4987,
      image: "https://placehold.co/200x120/0D9488/FFFFFF?text=AI",
      category: "Computer Science",
      duration: "40 hours",
    }
];


const RecommendedCourses = ({section}) => {
  const navigate = useNavigate();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <PiStarFill
          key={i}
          className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-3">
        <div>
          <h3 className="text-2xl font-bold text-left">{section.title}</h3>
          <p className="text-sm text-left text-gray-600 mt-1">{section.tagline}</p>
        </div>
        <button
          onClick={() => navigate("/my-learning")}
          className="bg-deepBlue py-2 px-6 rounded-full text-white"
        >
          View All
          <PiCaretRightBold className="text-white inline-block ml-1" />
        </button>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden pt-2 pb-6">
        <Carousel 
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          autoplay={true} 
          interval={3000} 
          stopOnHover={true}
          emulateTouch={true}>
          {courses.slice(0,6).map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow overflow-hidden mx-4 group" // Added mx-4 for spacing
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
              />
              <div className="p-4 text-left">
                <h4 className="font-semibold text-xl">{course.title}</h4>
                <p className="text-sm text-gray-600">{course.author}</p>
                <div className="flex items-center mt-2 space-x-1">
                  {renderStars(course.rating)}
                  <span className="text-xs text-gray-500">{course.raters}</span>
                </div>
                <button onClick={() => navigate("/courses/course-details")} className="flex items-center justify-center bg-deepBlue text-white py-2 px-4 rounded-full mt-4 w-full">
                  Enroll <PiPlayCircle className="ml-2 text-xl group-hover:scale-110 duration-200 ease-in-out" />
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {courses.slice(0, 6).map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold">{course.title}</h4>
              <p className="text-sm text-gray-600">{course.author}</p>
              <div className="flex items-center mt-2 space-x-1">
                {renderStars(course.rating)}
                <span className="text-xs text-gray-500">{course.raters}</span>
              </div>
              <button onClick={() => navigate('/courses/course-details')} className="flex items-center justify-center bg-deepBlue text-white py-2 px-4 rounded-full mt-4 w-full">
                Enroll <PiPlayCircle className="ml-2 text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedCourses;