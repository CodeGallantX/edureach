import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiGridFourFill, PiListBullets, PiPlayCircle, PiMagnifyingGlassBold } from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';

const LearningCourses = () => {
  const [isGrid, setIsGrid] = useState(true);
  const courses = [
    {
      title: 'Django Framework',
      progress: 70,
      image: '/django-framework.jpeg',
      link: '/courses/course-details', 
    },
    {
      title: 'Introduction to Rocket Science',
      progress: 70,
      image: 'introduction-to-rocket-science.jpeg',
      link: '/courses/course-details',
    },
    {
      title: 'Sales and Marketing',
      progress: 70,
      image: '/sales-and-marketing.png',
      link: '/courses/course-details',
    },
    {
      title: 'Become a Salsa Dancer in 3 weeks',
      progress: 70,
      image: '/salsa-dancing.jpg',
      link: '/courses/course-details',
    },
    {
      title: 'Advanced JavaScript Concepts',
      progress: 70,
      image: 'https://via.placeholder.com/150',
      link: '/courses/course-details',
    },
    {
      title: 'UX Design Fundamentals',
      progress: 70,
      image: '/UI_UX_Course.jpeg',
      link: '/courses/course-details',
    },
  ];

  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const viewChangeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4 w-full">
        <fieldset className="relative flex flex-row items-center justify-start w-3/5 md:w-2/3">
          <PiMagnifyingGlassBold className="absolute text-xl text-gray-500 translate-x-4"/>
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-12 border-2 rounded w-full focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
          />
        </fieldset>
        <div className="flex hidden md:block">
          <button
            onClick={toggleView}
            className={`py-2 px-3 md:px-4 rounded-l transition-colors duration-300 ${
              isGrid ? 'bg-deepBlue text-white' : 'text-deepBlue bg-white'
            }`}
          >
            <PiGridFourFill size={20} className="inline-block mr-1"/>
          </button>
          <button
            onClick={toggleView}
            className={`py-2 px-3 md:px-4 rounded-r transition-colors duration-300 ${
              !isGrid ? 'bg-deepBlue text-white' : 'text-deepBlue bg-white'
            }`}
          >
            <PiListBullets size={20} className="inline-block mr-1" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={isGrid ? 'grid' : 'list'}
          variants={viewChangeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {isGrid ? (
            // Grid View
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                  className="flex flex-col items-start justify-center bg-white p-4 rounded-xl space-y-3 shadow-md"
                >
                  <motion.div 
                    className="w-full h-40 bg-gray-200 rounded-md overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-deepBlue">{course.title}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      className="bg-green-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                  <motion.button
                    onClick={() => navigate(course.link)}
                    className="text-sm py-2 px-6 rounded-full bg-deepBlue text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Resume <PiPlayCircle className="text-2xl inline-block ml-1" />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // List View
            <motion.div
              className="flex flex-col gap-4 mt-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center bg-white p-4 rounded-xl space-x-4 shadow-md"
                >
                  <motion.div className="w-24 h-20 overflow-hidden rounded-md">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-deepBlue">{course.title}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <motion.div
                        className="bg-green-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                    <p className="text-sm mt-1">{course.progress}% Complete</p>
                  </div>
                  <motion.button
                    onClick={() => navigate(course.link)}
                    className="text-sm py-2 px-6 rounded-full bg-deepBlue text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Resume <PiPlayCircle className="text-2xl inline-block ml-1" />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LearningCourses;