import React, { useState } from 'react';
import { PiFolder, PiPlayCircle, PiCaretDown, PiCaretUp } from 'react-icons/pi';

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
    <div className="p-6 w-full">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Course Contents</h2>

      {modules.map((module) => (
        <div key={module.id} className="mb-6">
          <div
            className="flex items-center justify-between p-4 bg-gray-200 rounded-t-lg cursor-pointer transition-shadow duration-300 hover:shadow-md"
            onClick={() => toggleModule(module.id)}
          >
            <div className="flex items-center space-x-3">
              <PiFolder className="text-blue-500 text-xl" />
              <span className="font-semibold text-lg text-gray-800">{module.title}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <span>{module.videos.length} videos</span>
              {module.expanded ? (
                <PiCaretUp className="text-gray-600 transition-transform duration-300 text-xl" />
              ) : (
                <PiCaretDown className="text-gray-600 transition-transform duration-300 text-xl" />
              )}
            </div>
          </div>

          {module.expanded && (
            <div className="mt-3 transition-opacity duration-300">
              {module.videos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center justify-between p-4 bg-blue-50 rounded-lg mt-2 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center space-x-3 text-gray-800">
                    <PiPlayCircle className="text-blue-500 text-xl" />
                    <span>{video.title}</span>
                  </div>
                  <span className="text-gray-700">{video.duration}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseContents;