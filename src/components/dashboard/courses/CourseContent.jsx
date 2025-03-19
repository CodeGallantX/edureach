import React, { useState } from "react";

const CourseContent = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="p-4 w-full">
    <section className="w-full bg-white">
      <div className="">
        <div className="flex flex-row items-center justify-start space-x-8 px-6 py-4 font-semibold text-gray-500 border-b border-b-gray-300">
          <button
            onClick={() => handleTabClick("Description")}
            className={`transition-colors duration-300 px-2 py-1 ${
              activeTab === "Description" ? "text-blue-400 border-b-4 border-blue-400" : ""
            }`}
          >
            Description
          </button>
          <button
            onClick={() => handleTabClick("Course Content")}
            className={`transition-colors duration-300 px-2 py-1 ${
              activeTab === "Course Content" ? "text-blue-400 border-b-4 border-blue-400" : ""
            }`}  
          >
            Course Content
          </button>
        </div>
      </div>
      <div className="p-6">
        {activeTab === "Description" && (
          <div>
            <p>This is the description of the course. You will learn all about the fundamentals and advanced topics.</p>
            <p className="mt-4">We'll cover everything from the basics to expert-level techniques.</p>
          </div>
        )}
        {activeTab === "Course Content" && (
          <div>
            <p>Here's the course content:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Introduction to the topic</li>
              <li>Advanced concepts</li>
              <li>Practical exercises</li>
              <li>Final project</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  </div>
  );
};

export default CourseContent;