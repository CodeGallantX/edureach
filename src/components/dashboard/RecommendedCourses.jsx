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
    title: "Introduction to React Development",
    author: "Enoobong George",
    rating: 5,
    image: "https://placehold.co/200x120", // Replace with your image URL
  },
  {
    title: "Become a Salsa Dancer in just 3 weeks",
    author: "Enoobong George",
    rating: 5,
    image: "https://placehold.co/200x120", // Replace with your image URL
  },
  {
    title: "Become a Professional Data Analyst",
    author: "Enoobong George",
    rating: 5,
    image: "https://placehold.co/200x120", // Replace with your image URL
  },
  {
    title: "Fundamentals of Sales and Marketing",
    author: "Enoobong George",
    rating: 5,
    image: "https://placehold.co/200x120", // Replace with your image URL
  },
  {
    title: "Introduction to React Development",
    author: "Enoobong George",
    rating: 5,
    image: "https://placehold.co/200x120", // Replace with your image URL
  },
  {
    title: "Become a Salsa Dancer in just 3 weeks",
    author: "Enoobong George",
    rating: 5,
    image: "https://placehold.co/200x120", // Replace with your image URL
  },
  {
    title: "Become a Professional Data Analyst",
    author: "Enoobong George",
    rating: 5,
    image: "https://placehold.co/200x120", // Replace with your image URL
  },
  {
    title: "Fundamentals of Sales and Marketing",
    author: "Enoobong George",
    rating: 5,
    image: "https://placehold.co/200x120", // Replace with your image URL
  },
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
      <div className="md:hidden">
        <Carousel showThumbs={false} showStatus={false}>
          {courses.slice(0,6).map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow overflow-hidden mx-4" // Added mx-4 for spacing
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">{course.title}</h4>
                <p className="text-sm text-gray-600">{course.author}</p>
                <div className="flex items-center mt-2 space-x-1">
                  {renderStars(course.rating)}
                  <span className="text-xs text-gray-500">{course.raters}</span>
                </div>
                <button onClick={() => navigate("/courses/course-details")} className="flex items-center justify-center bg-deepBlue text-white py-2 px-4 rounded-full mt-4 w-full">
                  Enroll <PiPlayCircle className="ml-2 text-xl" />
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
              <button className="flex items-center justify-center bg-deepBlue text-white py-2 px-4 rounded-full mt-4 w-full">
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