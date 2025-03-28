import { useNavigate } from "react-router-dom";
import { PiStarFill, PiPlayCircle, PiCaretRightBold } from "react-icons/pi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const courses = [
  {
    title: "Environmental Science",
    author: "Akinyemi James",
    rating: 5,
    raters: 189,
    image: "/environmental-science.jpeg", // Replace with your image URL
  },
  {
    title: "Mathematics",
    author: "Mr Taylor",
    rating: 5,
    raters: 806,
    image: "/mathematics.jpeg", // Replace with your image URL
  },
  {
    title: "English Language (JAMB prep)",
    author: "Mr. Arowolo",
    rating: 4,
    raters: 111,
    image: "/use-of-english.jpeg", // Replace with your image URL
  },
  {
    title: "Literature-in-English",
    author: "Enoobong George",
    rating: 3.1,
    raters: 320,
    image: "/literature.jpeg",
  },
  {
    title: "Computer Science",
    author: "David J. Milan",
    rating: 5,
    raters: 53,
    image: "/principles-of-quantum-computing.jpeg", 
  },
  {
    title: "History",
    author: "Mr. Oyeleke",
    rating: 3.9,
    raters: 115,
    image: "/history.jpeg", 
  },
  {
    title: "Business Studies",
    author: "Matthew Dorcas",
    rating: 5,
    raters: 215,
    image: "/business-studies.jpeg",
  },
  {
    title: "Organic Chemistry",
    author: "Mrs. Sarah Aribike",
    rating: 4.8,
    raters: 515,
      image: "organic-chemistry.jpeg",
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
                <button onClick={() => navigate("/student/courses/course-details")} className="flex items-center justify-center bg-deepBlue text-white py-2 px-4 rounded-full mt-4 w-full">
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
              <button onClick={() => navigate('/student/courses/course-details')} className="flex items-center justify-center bg-deepBlue text-white py-2 px-4 rounded-full mt-4 w-full">
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