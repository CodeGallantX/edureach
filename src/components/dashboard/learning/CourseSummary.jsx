import { useState, useRef } from 'react';
import BtnComp from "../BtnComp";
import { PiPlayFill, PiX } from "react-icons/pi";
import ReactPlayer from 'react-player';

const CourseDetails = () => {
  const [showVideo, setShowVideo] = useState(false);
  const playerRef = useRef(null);

  const introVideoUrl = "/videos/Introduction to UI UX design.mp4"; // Replace with your actual video URL

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  };

  return (
    <div className="w-full p-4">
      {/* Image Section with Overlay */}
      <BtnComp />
      <div className="relative mb-6 group">
        <img
          src="/UI_UX_Course.jpeg" 
          alt="Course Preview"
          className="w-full rounded-lg transition-opacity group-hover:opacity-90"
        />
        
        {/* Overlay with Play Button */}
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg cursor-pointer"
          onClick={handlePlayClick}
        >
          <button className="bg-white/90 p-4 rounded-full hover:bg-white transition-all transform hover:scale-105">
            <PiPlayFill className="text-2xl text-blue-600" />
          </button>
        </div>
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

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button 
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <PiX className="text-3xl" />
            </button>
            
            <ReactPlayer
              ref={playerRef}
              url={introVideoUrl}
              width="100%"
              height="100%"
              controls={true}
              playing={true}
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload'
                  }
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;