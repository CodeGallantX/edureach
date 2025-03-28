import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiGridFourFill, PiListBullets, PiPlayCircle, PiMagnifyingGlassBold } from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';

const LearningCourses = () => {
  const [courses, setCourses] = useState([
    {
      title: 'SSS 3 Physics',
      progress: 60,
      image: '/physics.jpeg',
      link: '/courses/waec-physics',
      // lecturer: 'Professor Okonjo Iweala',
    },
    {
      title: 'Organic Chemistry',
      progress: 75,
      image: 'jamb-chemistry.jpeg',
      link: '/courses/jamb-chemistry',
      // lecturer: 'Professor Miriam Omalu',
    },
    {
      title: 'SSS 3 Mathematics',
      progress: 25,
      image: '/mathematics.jpeg',
      link: '/courses/basic-mathematics',
      // lecturer: 'Chike Obi',
    },
    {
        title: 'Complex Numbers',
        progress: 90,
        image: '/complex-numbers.jpeg',
        link: '/courses/waec-biology',
        // lecturer: 'Professor Grace Oladapo',
      },
    {
      title: 'Agricultural Science',
      progress: 40,
      image: '/agricultural-science.jpeg',
      link: '/courses/agricultural-science',
      // lecturer: 'Professor Akin Mabogunje',
    },
    {
      title: 'Technical Drawing',
      progress: 10,
      image: '/technical-drawing.jpeg',
      link: '/courses/technical-drawing',
      // lecturer: 'Engineer Philip Emeagwali',
    },
    {
      title: 'Further Mathematics',
      progress: 50,
      image: '/further-mathematics.jpeg',
      link: '/courses/further-mathematics',
      // lecturer: 'Professor James Ezeilo',
    },
    {
      title: 'Use of English',
      progress: 30,
      image: '/use-of-english.jpeg',
      link: '/courses/use-of-english',
      // lecturer: 'Wole Soyinka',
    },
    {
      title: 'Computer Science',
      progress: 80,
      image: '/computer-science.jpeg',
      link: '/courses/computer-science',
      // lecturer: 'Professor Jelani Aliyu',
    },
  ]);
  const [isGrid, setIsGrid] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const viewChangeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Function to toggle between grid and list view
  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  // Function to handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtered courses based on search term
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    // ||
      // course.lecturer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4 w-full">
        <fieldset className="relative flex flex-row items-center justify-start w-3/5 md:w-2/3">
          <PiMagnifyingGlassBold className="absolute text-xl text-gray-500 translate-x-4" />
          <input
            type="text"
            placeholder="Search courses or lecturers..."
            className="py-2 px-12 border-2 rounded w-full focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
            onChange={handleSearch}
            value={searchTerm}
          />
        </fieldset>
        <div className="flex hidden md:block">
          <button
            onClick={toggleView}
            className={`py-2 px-3 md:px-4 rounded-l transition-colors duration-300 ${
              isGrid ? 'bg-deepBlue text-white' : 'text-deepBlue bg-white'
            }`}
          >
            <PiGridFourFill size={20} className="inline-block mr-1" />
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
              {filteredCourses.map((course, index) => (
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
              {filteredCourses.map((course, index) => (
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
