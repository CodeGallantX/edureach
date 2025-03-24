import React, { useState } from 'react';
import { PiFolder, PiPlayCircle, PiCaretDown, PiCaretUp, PiList, PiClock, PiBookmarkSimple } from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';

const CourseContents = () => {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: 'Module 1 - Introduction to Frontend Development',
      videos: [
        { id: 1, title: 'Beginning & Basics of Design', duration: '10:31', completed: true },
        { id: 2, title: 'Shapes, Texts and Colors', duration: '14:22', completed: false },
        { id: 3, title: 'Photoshop v Figma v Illustrator', duration: '18:45', completed: false },
      ],
      expanded: true,
    },
    {
      id: 2,
      title: 'Module 2 - Choosing a Software for Design',
      videos: [
        { id: 4, title: 'Understanding Design Tools', duration: '12:10', completed: false },
        { id: 5, title: 'Tool Comparison', duration: '15:30', completed: false },
      ],
      expanded: false,
    },
    {
      id: 3,
      title: 'Module 3 - Using the Brush Tool',
      videos: [
        { id: 6, title: 'Brush Tool Fundamentals', duration: '08:45', completed: false },
        { id: 7, title: 'Advanced Techniques', duration: '22:15', completed: false },
      ],
      expanded: false,
    },
    {
      id: 4,
      title: 'Module 4 - Auto-Layout & Forms',
      videos: [
        { id: 8, title: 'Auto-Layout Basics', duration: '16:20', completed: false },
        { id: 9, title: 'Creating Complex Forms', duration: '24:50', completed: false },
      ],
      expanded: false,
    },
  ]);

  const [activeVideo, setActiveVideo] = useState(1);
  const [showBookmarks, setShowBookmarks] = useState(false);

  const toggleModule = (moduleId) => {
    setModules(
      modules.map((module) =>
        module.id === moduleId ? { ...module, expanded: !module.expanded } : module
      )
    );
  };

  const toggleBookmarks = () => {
    setShowBookmarks(!showBookmarks);
  };

  return (
    <div className="p-4 w-full max-w-3xl mx-auto">
      {/* Enhanced Toolbar */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center mb-6 p-4 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-gray-800">Course Contents</h2>
        <div className="flex space-x-2">
          <button 
            onClick={toggleBookmarks}
            className={`p-2 rounded-lg transition-all ${showBookmarks ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <PiBookmarkSimple className="text-xl" />
          </button>
          <button className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-all">
            <PiList className="text-xl" />
          </button>
        </div>
      </motion.div>

      {/* Bookmarks Panel */}
      <AnimatePresence>
        {showBookmarks && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-6 bg-blue-50 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Your Bookmarks</h3>
              <p className="text-gray-600">You haven't bookmarked any lessons yet.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modules List */}
      <div className="space-y-3">
        {modules.map((module) => (
          <motion.div 
            key={module.id}
            layout
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleModule(module.id)}
            >
              <div className="flex items-center space-x-3">
                <PiFolder className={`text-xl ${module.expanded ? 'text-blue-500' : 'text-gray-500'}`} />
                <span className="font-semibold text-gray-800">{module.title}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-gray-500 text-sm">
                  <PiClock className="text-base" />
                  <span>{module.videos.reduce((acc, video) => acc + parseInt(video.duration), 0)} min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {module.videos.filter(v => v.completed).length}/{module.videos.length}
                  </span>
                  {module.expanded ? (
                    <PiCaretUp className="text-gray-500 transition-transform duration-200" />
                  ) : (
                    <PiCaretDown className="text-gray-500 transition-transform duration-200" />
                  )}
                </div>
              </div>
            </motion.div>

            <AnimatePresence>
              {module.expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-100">
                    {module.videos.length > 0 ? (
                      module.videos.map((video) => (
                        <motion.div
                          key={video.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`flex items-center justify-between p-4 transition-colors ${activeVideo === video.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                          onClick={() => setActiveVideo(video.id)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${video.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                              {video.completed ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <PiPlayCircle className="text-sm" />
                              )}
                            </div>
                            <div>
                              <p className={`text-sm ${activeVideo === video.id ? 'font-medium text-blue-600' : 'text-gray-700'}`}>
                                {video.title}
                              </p>
                              <p className="text-xs text-gray-500">{video.duration}</p>
                            </div>
                          </div>
                          <button className="p-1 text-gray-400 hover:text-blue-500">
                            <PiBookmarkSimple className="text-lg" />
                          </button>
                        </motion.div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500 italic">No videos available</div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseContents;