import React, { useState } from 'react';
import { PiFolder, PiPlayCircle, PiCaretDown, PiCaretUp, PiList } from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';

const CourseContents = () => {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: 'Module 1 - Introduction to Frontend Development',
      videos: [
        { id: 1, title: 'Lesson 1 - Beginning & Basics of Design', duration: '10:31' },
        { id: 2, title: 'Lesson 2 - Shapes, Texts and Colors', duration: '10:31' },
        { id: 3, title: 'Lesson 3 - Photoshop v Figma v Illustrator', duration: '10:31' },
      ],
      expanded: true,
    },
    {
      id: 2,
      title: 'Module 2 - Choosing a Software for Design',
      videos: [],
      expanded: false,
    },
    {
      id: 3,
      title: 'Module 3 - Using the Brush Tool',
      videos: [],
      expanded: false,
    },
    {
      id: 4,
      title: 'Module 4 - Auto-Layout & Forms',
      videos: [],
      expanded: false,
    },
  ]);

  const toggleModule = (moduleId) => {
    setModules(
      modules.map((module) =>
        module.id === moduleId ? { ...module, expanded: !module.expanded } : module
      )
    );
  };

  return (
    <div className="p-6 w-full max-w-2xl mx-auto">
      {/* Toolbar */}
      <div className="flex justify-between items-center mb-6 p-4 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800">Course Contents</h2>
        <button className="p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
          <PiList className="text-xl" />
        </button>
      </div>

      {modules.map((module) => (
        <div key={module.id} className="mb-4">
          <div
            className="flex items-center justify-between p-4 bg-gray-200 rounded-lg cursor-pointer transition-shadow duration-300 hover:shadow-md"
            onClick={() => toggleModule(module.id)}
          >
            <div className="flex items-center space-x-3">
              <PiFolder className="text-blue-500 text-xl" />
              <span className="font-semibold text-lg text-gray-800">{module.title}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 text-sm md:text-base">
              <span>{module.videos.length} videos</span>
              {module.expanded ? (
                <PiCaretUp className="text-gray-600 transition-transform duration-300 text-xl" />
              ) : (
                <PiCaretDown className="text-gray-600 transition-transform duration-300 text-xl" />
              )}
            </div>
          </div>

          <AnimatePresence>
            {module.expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 overflow-hidden"
              >
                {module.videos.length > 0 ? (
                  module.videos.map((video) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg mt-2 transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-center space-x-3 text-gray-800">
                        <PiPlayCircle className="text-blue-500 text-xl" />
                        <span className="text-base">{video.title}</span>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">{video.duration}</span>
                    </motion.div>
                  ))
                ) : (
                  <div className="p-4 text-gray-600 italic">No videos available</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default CourseContents;