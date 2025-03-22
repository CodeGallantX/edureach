import React, { useState } from 'react';
import { PiFacebookLogoBold, PiInstagramLogoBold, PiLinkedinLogoBold, PiPlayCircleFill, PiPenNibBold, PiShareNetworkBold  } from 'react-icons/pi';
import { useNavigate } from "react-router-dom"


const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('biography');
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case 'biography':
        return (
          <div className="p-8 w-full">
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, fugiat tempora molestias quibusdam autem reprehenderit nihil ducimus magni ratione blanditiis quod, debitis odio culpa quasi libero perspiciatis suscipit eos cumque.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, fugiat tempora molestias quibusdam autem reprehenderit nihil ducimus magni ratione blanditiis quod, debitis odio culpa quasi libero perspiciatis suscipit eos cumque.
            </p>
            <button className="text-blue-500 mt-4 hover:text-blue-600 transition-all duration-300">Show more</button>
          </div>
        );
      case 'downloaded':
        return (
          <div className="p-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative group">
                  <div>
                  <img
                    src={`https://picsum.photos/300/200?random=${item}`}
                    alt={`Course ${item}`}
                    className="w-full h-48 object-cover rounded-lg"
                    />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <PiPlayCircleFill className="text-white text-5xl cursor-pointer" />
                  </div>
                    </div>
                  <div className="mt-2">
                    <h3 className="text-lg font-semibold">Course Title {item}</h3>
                    <p className="text-sm text-gray-600">Course Description {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'watched':
        return (
          <div className="p-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
              {[7, 8, 9, 10, 11, 12].map((item) => (
                <div key={item} className="relative group">
                  <img
                    src={`https://picsum.photos/300/200?random=${item}`}
                    alt={`Course ${item}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <PiPlayCircleFill className="text-white text-5xl cursor-pointer" />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg font-semibold">Course Title {item}</h3>
                    <p className="text-sm text-gray-600">Course Description {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center p-8 bg-white">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white">
            <img src="/ariana-grande.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-3xl font-bold">Emily Lawson</h1>
            <p className="text-sm text-gray-500 mt-2">Professional UI/UX Designer </p>
          </div>
          <div className="hidden md:block flex flex-col lg:flex-row space-x-4 mt-6 md:mt-0">
            <button className="border border-deepBlue text-deepBlue hover:bg-deepBlue hover:text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out">
              <PiShareNetworkBold className="inline-block mr-2" />
              Share Profile
            </button>
            <button 
              onClick={() => navigate("/profile/edit")} 
            className="bg-deepBlue text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out">
              <PiPenNibBold 
              className="inline-block mr-2" />
              Edit Profile
            </button>
          </div>
          <div className="block md:hidden flex space-x-4 mt-6 md:mt-0">
            <button className="border border-deepBlue text-deepBlue hover:bg-deepBlue hover:text-white p-1 rounded-full transition-all duration-300 ease-in-out">
              <PiShareNetworkBold />
            </button>
            <button className="bg-deepBlue text-white p-1 rounded-full transition-all duration-300 ease-in-out">
              <PiPenNibBold onClick={() => navigate("/profile/edit")} className="inline-block mr-2" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 p-8 bg-gray-50 w-full">
          <div className="text-center">
            <h2 className="text-base md:text-lg font-semibold text-gray-700">Videos</h2>
            <p className="text-xl md:text-4xl font-bold text-blue-600">8</p>
          </div>
          <div className="text-center">
            <h2 className="md:text-lg font-semibold text-gray-700">Total Students</h2>
            <p className="text-xl md:text-4xl font-bold text-blue-600">120</p>
          </div>
          <div className="text-center">
            <h2 className="text-base md:text-lg font-semibold text-gray-700">Watched Videos</h2>
            <p className="text-xl md:text-4xl font-bold text-blue-600">14</p>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex space-x-4 p-8 border-b border-gray-200 w-full">
          <button
            onClick={() => setActiveTab('biography')}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'biography'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-600 hover:text-blue-500'
            } transition-all duration-300`}
          >
            Biography
          </button>
          <button
            onClick={() => setActiveTab('downloaded')}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'downloaded'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-600 hover:text-blue-500'
            } transition-all duration-300`}
          >
            Downloaded Videos
          </button>
          <button
            onClick={() => setActiveTab('watched')}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'watched'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-600 hover:text-blue-500'
            } transition-all duration-300`}
          >
            Watched Videos
          </button>
        </div>

        {/* Content */}
        {renderContent()}

        {/* Social Links */}
        <div className="p-8 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Social Links</h2>
          <div className="space-y-3">
            <a
              href="https://www.facebook.com/emily.lawson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-all duration-300"
            >
              <PiFacebookLogoBold className="mr-3" />
              https://www.facebook.com/emily.lawson
            </a>
            <a
              href="https://www.instagram.com/emily.lawson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-pink-600 hover:text-pink-700 transition-all duration-300"
            >
              <PiInstagramLogoBold className="mr-3" />
              https://www.instagram.com/emily.lawson
            </a>
            <a
              href="https://www.linkedin.com/in/emily-lawson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-800 hover:text-blue-900 transition-all duration-300"
            >
              <PiLinkedinLogoBold className="mr-3" />
              https://www.linkedin.com/in/emily-lawson
            </a>
          </div>
        </div>

        {/* Certifications */}
        <div className="p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Certifications</h2>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <p className="font-semibold text-gray-700">Google Fundamentals of Digital Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;