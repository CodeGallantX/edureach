import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiGridFourFill , PiListBullets, PiPlayCircle, PiMagnifyingGlassBold } from 'react-icons/pi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CourseDashboard = () => {
  const [isGrid, setIsGrid] = useState(true);
  const courses = [
    {
      title: 'Introduction to React Development',
      progress: 70,
      image: 'https://via.placeholder.com/150', // Replace with your image
      link: '/courses/course-details', // Placeholder link
    },
    {
      title: 'Become a Salsa Dancer in 3 weeks',
      progress: 70,
      image: 'https://via.placeholder.com/150',
      link: '/courses/course-details',
    },
    {
      title: 'Become a Salsa Dancer in 3 weeks',
      progress: 70,
      image: 'https://via.placeholder.com/150',
      link: '/courses/course-details',
    },
    {
      title: 'Become a Salsa Dancer in 3 weeks',
      progress: 70,
      image: 'https://via.placeholder.com/150',
      link: '/courses/course-details',
    },
    {
      title: 'Become a Salsa Dancer in 3 weeks',
      progress: 70,
      image: 'https://via.placeholder.com/150',
      link: '/courses/course-details',
    },
    {
      title: 'Become a Salsa Dancer in 3 weeks',
      progress: 70,
      image: 'https://via.placeholder.com/150',
      link: '/courses/course-details',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  // Initialize navigate from react-router-dom
  const navigation = useNavigate();

  const navigate = (link) => {
    navigation(link); // Use the navigate function from react-router-dom
  };

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4 w-full">
        <fieldset
            className="relative flex flex-row items-center justify-start w-3/5 md:w-2/3"
            >
                <PiMagnifyingGlassBold className="absolute text-xl text-gray-500 translate-x-4"/>
        <input
          type="text"
          placeholder="Search"
          className="py-2 px-12 border rounded w-full"
          />
          </fieldset>
        <div className="flex">
          <button
            onClick={toggleView}
            className={`py-2 px-3 md:px-4 rounded-l ${isGrid ? 'bg-deepBlue text-white' : 'text-deepBlue bg-white'}`}
          >
            <PiGridFourFill  size={20} className="inline-block mr-1"/>
          </button>
          <button
            onClick={toggleView}
            className={`py-2 px-3 md:px-4 rounded-r ${!isGrid ? 'bg-deepBlue text-white' : 'text-deepBlue bg-white'}`}
            >
            <PiListBullets size={20} className="inline-block mr-1" />
          </button>
        </div>
      </div>

      {isGrid ? (
        // Grid View
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center bg-white p-4 rounded-xl space-y-3"
            >
              <div className="w-full h-20 bg-gray-200 rounded-md">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold text-deepBlue">{course.title}</h3>
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
      ) : (
        // List View
        <div className="flex flex-col gap-4 mt-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-4 rounded-xl space-x-4"
            >
              <div className="w-24 h-20">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-deepBlue">{course.title}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1">{course.progress}% Complete</p>
              </div>
              <button
                onClick={() => navigation(course.link)}
                className="text-sm py-2 px-6 rounded-full bg-deepBlue text-white"
              >
                Resume <PiPlayCircle className="text-2xl inline-block ml-1" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseDashboard;