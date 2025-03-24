import { PiPlayCircle } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ongoingCourses = [
  {
    title: "Introduction to React Development",
    image: "/introduction_to_react.png",
    progress: 85,
    link: "/courses/course-details",
  },
  {
    title: "Become a Salsa Dancer in 3 weeks",
    image: "/salsa-dancing.jpg",
    progress: 60,
    link: "/courses/course-details",
  },
  {
    title: "Atomic Models",
    image: "/atomic-models.jpeg",
    progress: 70,
    link: "/courses/course-details",
  },
];

const OngoingCourses = () => {
  const navigate = useNavigate();
  
  return (
    <section className="p-4">
      <h3 className="font-bold text-lg">Videos I'm watching</h3>
      <p className="text-sm text-gray-600 mb-4">
        See your overall information regarding your courses and your activities
      </p>

      {/* Desktop Grid View */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ongoingCourses.map((course, index) => (
          <CourseCard key={index} course={course} navigate={navigate} />
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="sm:hidden">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={false}
          centerMode={true}
          centerSlidePercentage={85}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          className="custom-carousel"
        >
          {ongoingCourses.map((course, index) => (
            <div key={index} className="px-2 pb-8"> {/* Added padding for carousel items */}
              <CourseCard course={course} navigate={navigate} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

// Extracted Course Card Component for reusability
const CourseCard = ({ course, navigate }) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-xl shadow-sm h-full">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <button 
            onClick={() => navigate(course.link)}
            className="bg-white bg-opacity-90 rounded-full p-2 text-deepBlue"
          >
            <PiPlayCircle className="text-3xl" />
          </button>
        </div>
      </div>
      
      <h3 className="text-lg text-left font-semibold mt-3 line-clamp-2">{course.title}</h3>
      
      <div className="w-full mt-2">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
      
      <button
        onClick={() => navigate(course.link)}
        className="mt-4 text-sm md:text-base py-2 md:py-3 px-4 rounded-full bg-deepBlue text-white flex items-center justify-center group transition-all duration-300 ease-in-out"
      >
        Resume <PiPlayCircle className="group-hover:scale-110 text-xl inline-block ml-1 transition-all duration-300 ease-in-out" />
      </button>
    </div>
  );
};

export default OngoingCourses;