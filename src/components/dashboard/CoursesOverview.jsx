import { useNavigate } from "react-router-dom";
import { PiTrash, PiDotsThreeVertical } from "react-icons/pi"; // Import Phosphor icons
import { useState } from "react";

const CoursesOverview = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Commerce for SSS3",
      img: "/biology.jpeg",
      author: "Miss. Adams Joy",
      progress: 85,
      completed: 10,
      total: 13,
    },
    {
      id: 2,
      title: "Business Studies",
      img: "/business-studies.jpg",
      author: "Ajayi Majekodunmi",
      progress: 45,
      completed: 6,
      total: 9,
    },
    {
      id: 3,
      title: "Marketing",
      img: "/data_analysis.jpeg",
      author: "Dr. Raphael Ekpo",
      progress: 85,
      completed: 12,
      total: 14,
    },
  ]);

  const handleDelete = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 space-y-2 md:space-y-0">
        <div>
          <h3 className="text-2xl font-bold text-left">My Ongoing Courses</h3>
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
      <section className="w-full overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">
                Course Title / Author
              </th>
              <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">
                Progress
              </th>
              <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-4 px-6">
                  <div className="w-full flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden"> {/* added overflow hidden to clip any overflowing image portions */}
                      <img
                        src={course.img}
                        alt={`${course.title} Edureach`}
                        className="w-full h-full object-cover object-center" // added object-cover and object-center
                      />
                    </div>
                    <div className="w-full">
                      <h4 className="font-semibold">{course.title}</h4>
                      <p className="text-sm text-gray-600">{course.author}</p>
                    </div>
                  </div>
                </td>
                <td className="w-1/3 py-4 px-6">
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-700">
                      {course.completed}/{course.total}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm mt-1 text-gray-700">{course.progress}%</p>
                  </div>
                </td>
                <td className="px-4 px-6">
                  <button className="bg-blue-100 text-blue-800 border border-blue-500 py-1 px-4 rounded-full text-sm w-full">
                    In Progress
                  </button>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button onClick={() => handleDelete(course.id)}>
                      <PiTrash className="text-lg text-gray-600" />
                    </button>
                    <button>
                      <PiDotsThreeVertical className="text-lg text-gray-600"/>
                    </button>
                  </div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default CoursesOverview;