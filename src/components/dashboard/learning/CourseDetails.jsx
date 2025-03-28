import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

  const courseFeatures = [
    {
      icon: <PiGlobe className="text-xl text-blue-500" />,
      label: "Language",
      value: "English"
    },
    {
      icon: <PiFilmReel className="text-xl text-blue-500" />,
      label: "Lesson Count",
      value: "14"
    },
    {
      icon: <PiGauge className="text-xl text-blue-500" />,
      label: "Difficulty",
      value: "Advanced"
    },
    {
      icon: <PiTimer className="text-xl text-blue-500" />,
      label: "Duration",
      value: "7hrs 47m"
    },
    {
      icon: <PiCertificate className="text-xl text-blue-500" />,
      label: "Certificate",
      value: "Upon Completion"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-6">Course Details</h3>
      
      <div className="space-y-5">
        {courseFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center space-x-4"
          >
            <div className="p-2 bg-blue-50 rounded-lg">
              {feature.icon}
            </div>
            <div className="flex-1 border-b border-gray-100 pb-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{feature.label}</span>
                <span className="font-semibold text-gray-800">{feature.value}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate("/student/courses/single-course")}
        className="flex items-center justify-center bg-deepBlue text-white rounded-xl py-3 px-6 mt-8 w-full shadow-md transition-all duration-200"
      >
        <PiPlayCircle className="mr-2 text-xl" />
        Enroll Now
      </motion.button>
    </motion.div>
  );
};

export default CourseDetails;