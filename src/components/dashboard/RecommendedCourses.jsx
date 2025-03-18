import { useNavigate } from "react-router-dom";
import { PiStarFill, PiPlayCircle } from "react-icons/pi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const RecommendedCourses = () => {
  const navigate = useNavigate();

  const courses = [
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
      <div className="flex flex-row items-center justify-between p-6">
        <div>
          <h3 className="text-2xl font-bold text-left">Recommended Courses</h3>
          <p className="text-sm text-left text-gray-600 mt-1">
            See your overall information regarding your courses and your activities
          </p>
        </div>
        <button
          onClick={() => navigate("/courses")}
          className="bg-deepBlue py-2 px-6 rounded-full text-white"
        >
          View All
        </button>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Carousel showThumbs={false} showStatus={false}>
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow overflow-hidden mx-4" // Added mx-4 for spacing
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-30 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">{course.title}</h4>
                <p className="text-sm text-gray-600">{course.author}</p>
                <div className="flex items-center mt-2 space-x-1">
                  {renderStars(course.rating)}
                  <span className="text-xs text-gray-500">(91)</span>
                </div>
                <button className="flex items-center justify-center bg-deepBlue text-white py-2 px-4 rounded-full mt-4 w-full">
                  Enroll <PiPlayCircle className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-30 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold">{course.title}</h4>
              <p className="text-sm text-gray-600">{course.author}</p>
              <div className="flex items-center mt-2 space-x-1">
                {renderStars(course.rating)}
                <span className="text-xs text-gray-500">(91)</span>
              </div>
              <button className="flex items-center justify-center bg-deepBlue text-white py-2 px-4 rounded-full mt-4 w-full">
                Enroll <PiPlayCircle className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedCourses;