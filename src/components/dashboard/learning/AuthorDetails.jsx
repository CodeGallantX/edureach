import React from 'react';
import { motion } from 'framer-motion';
import { 
  PiFacebookLogo, 
  PiInstagramLogo, 
  PiLinkedinLogo,
  PiTwitterLogo,
  PiGithubLogo,
  PiEnvelopeSimple,
  PiGlobe
} from 'react-icons/pi';

const AuthorDetails = () => {
  const socialLinks = [
    { icon: <PiFacebookLogo className="text-xl" />, url: "#", color: "bg-blue-600" },
    { icon: <PiInstagramLogo className="text-xl" />, url: "#", color: "bg-gradient-to-tr from-pink-500 to-yellow-400" },
    { icon: <PiLinkedinLogo className="text-xl" />, url: "#", color: "bg-blue-700" },
    { icon: <PiTwitterLogo className="text-xl" />, url: "#", color: "bg-sky-500" },
    { icon: <PiGithubLogo className="text-xl" />, url: "http://www.youtube.com/@Real_bobbymichael", color: "bg-red-800" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">About the Author</h2>
      <div>
      <div className="flex flex-row items-center justify-center gap-6 mb-6"> 
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="relative flex-shrink-0"
        >
          <img
            src="/bobby-michael.jpg" 
            alt="Bobby Michael"
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
            <PiGlobe className="text-lg" />
          </div>
        </motion.div>
        <div className="flex-1 min-w-0"> 
          <h3 className="text-xl font-bold text-gray-800 mb-2">Bobby Michael</h3> 
          <p className="text-gray-600 mb-3 text-sm truncate">Product Designer</p>
          <div className="flex items-center space-x-2 text-sm text-gray-700 mb-4"> 
            <PiEnvelopeSimple className="text-gray-500 flex-shrink-0" />
            <a href="#" className="hover:text-blue-600 transition-colors truncate">
              kiasmith@yahoo.com
            </a>
          </div>
      </div>
      </div>
          
          <p className="text-gray-700">
          Bobby Michael is a passionate and highly creative Product Designer that seeks to empower and enlighten fellow youths about the power and value in the digital world. 
          </p>
          </div>

      <div className="border-t border-gray-100 pt-5">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect</h4>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white rounded-full p-3 shadow-sm hover:shadow-md transition-all`}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AuthorDetails;