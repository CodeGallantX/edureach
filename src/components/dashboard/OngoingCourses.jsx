import { PiPlayCircle } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const ongoingCourses = [
  {
    title: "Introduction to React Development",
    img: "",
    progress: 85,
    link: "/courses/single-course",
  },
  {
    title: "Become a Salsa Dancer in 3 weeks",
    img: "",
    progress: 60,
    link: "/courses/single-course",
  },
  {
    title: "Introduction to React Development",
    img: "",
    progress: 70,
    link: "/courses/single-course",
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
            {/* Replace this with your actual image */}
            <div className="w-full h-20 bg-gray-200 rounded-md"></div>
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
              className="text-sm py-2 px-6 rounded-full bg-blue text-white"
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