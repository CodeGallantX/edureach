import React from 'react';

const CourseDetails = () => {
  return (
    <div className="w-full p-4">
      {/* Image Section */}
      <div className="relative mb-6">
        <img
          src="https://placehold.co/800x400" // Replace with your image URL
          alt="Course Preview"
          className="w-full rounded-lg"
        />
        {/* You can add an overlay or play button here if needed */}
      </div>

      {/* Title and Author */}
      <h2 className="text-2xl font-semibold mb-1">
        Learn UI/UX Design (International Standard)
      </h2>
      <p className="text-sm text-gray-600 mb-4">Enoobong George</p>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-gray-700">
          Unlock the building blocks of the web with our "Learn the Fundamentals of HTML and CSS" course.
          Whether you're a complete beginner or looking to solidify your foundational skills, this course will guide
          you through the essentials of creating and styling web pages. You'll start by understanding the structure
          of HTML, learning how to create elements like headings, paragraphs, images, and links. From there, you'll
          dive into CSS to bring your pages to life with colors, layouts, and responsive designs that look great on any
          device.
        </p>
      </div>

      {/* Add more sections as needed (e.g., course content, instructor bio) */}
    </div>
  );
};

export default CourseDetails;