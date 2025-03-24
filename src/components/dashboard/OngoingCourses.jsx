import { PiPlayCircle } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

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
      <h3 className="font-bold text-lg">Video I'm watching</h3>
      <p className="text-sm">
        See your overall information regarding your courses and your activities
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {ongoingCourses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center bg-white p-4 rounded-xl space-y-3"
          >
            <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg"
              />
            <h3 className="text-xl font-bold text-blue">{course.title}</h3>

            {/* ReactProgress */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            <button
              onClick={() => navigate(course.link)}
              className="text-sm py-2 px-6 rounded-full bg-deepBlue text-white"
            >
              Resume <PiPlayCircle className="text-2xl inline-block ml-1" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OngoingCourses;