import { useNavigate } from "react-router-dom"
import Header from "../Header";

import {
  PiGlobe,
  PiFilmReel,
  PiGauge,
  PiTimer,
  PiCertificate,
  PiPlayCircle,
} from 'react-icons/pi';

const CourseDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <PiGlobe className="text-xl text-blue-500" />
          <span className="font-medium">Language:</span>
          <span className="font-bold">English</span>
        </div>
        <div className="flex items-center space-x-3">
          <PiFilmReel className="text-xl text-blue-500" />
          <span className="font-medium">Lesson Count:</span>
          <span className="font-bold">14</span>
        </div>
        <div className="flex items-center space-x-3">
          <PiGauge className="text-xl text-blue-500" />
          <span className="font-medium">Difficulty:</span>
          <span className="font-bold">Advanced</span>
        </div>
        <div className="flex items-center space-x-3">
          <PiTimer className="text-xl text-blue-500" />
          <span className="font-medium">Duration:</span>
          <span className="font-bold">7hrs 47 seconds</span>
        </div>
        <div className="flex items-start space-x-3 w-full">
          <PiCertificate className="text-xl text-blue-500" />
          <span className="font-medium">Certificate:</span>
          <span className="font-bold">When the Course is Completed</span>
        </div>
      </div>
      <button onClick={() => navigate("/courses/single-course")} className="flex items-center justify-center bg-deepBlue text-white rounded-full py-3 px-6 mt-6 w-full">
        Enroll <PiPlayCircle className="ml-2 text-xl" />
      </button>
    </div>
  );
};

export default CourseDetails;