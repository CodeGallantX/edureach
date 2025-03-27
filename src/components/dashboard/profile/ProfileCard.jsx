import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PiFacebookLogoBold,
  PiInstagramLogoBold,
  PiLinkedinLogoBold,
  PiPlayCircleFill,
  PiPenNibBold,
  PiShareNetworkBold,
} from 'react-icons/pi';
import { FaTiktok } from 'react-icons/fa6'; // Added TikTok
import { motion } from 'framer-motion';
import axios from 'axios';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('biography');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Simulate fetching user data from an API.  Replace this URL with your actual API endpoint.
        const response = await axios.get('https://e-sdg.onrender.com/create/singleUser/_id'); // Or a specific endpoint

        if (response.status !== 200) {
          throw new Error(`Failed to fetch user data: ${response.status}`);
        }

        //  Adapt this based on the actual structure of your API response.
        //  The example assumes the API returns an array of users.  You might need to
        //  select a specific user from that array, or the API might return a single
        //  user object directly.
        //  For this example, I'll assume the first user in the array is the one we want.
        if (response.data && response.data.length > 0) {
          setUserData(response.data[0]); //  Get the first user
        } else if (response.data) {
          setUserData(response.data);
        } else {
          setError('No user data received from the API.');
          setLoading(false);
          return;
        }

        setLoading(false);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="p-8 w-full flex items-center justify-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="p-8 w-full flex items-center justify-center text-red-500">
          <p>Error: {error}</p>
        </div>
      );
    }

    if (!userData) {
      return (
        <div className="p-8 w-full flex items-center justify-center text-gray-500">
          <p>No data to display.</p>
        </div>
      );
    }

    switch (activeTab) {
      case 'biography':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 w-full"
          >
            <p className="text-gray-700 leading-relaxed">
              {userData?.biography || 'No biography available.'}
            </p>
            <button
              className="mt-4 text-blue-500 hover:text-blue-700 transition-colors"
            >
              Show more
            </button>
          </motion.div>
        );
      case 'downloaded':
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group overflow-hidden transition-shadow hover:shadow-lg rounded-lg"
                >
                  <div className="overflow-hidden">
                    <img
                      src={`https://picsum.photos/300/200?random=${item}`}
                      alt={`Course ${item}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-t-lg">
                      <PiPlayCircleFill className="text-white text-5xl cursor-pointer" />
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-b-lg">
                    <h3 className="text-lg font-semibold">Course Title {item}</h3>
                    <p className="text-sm text-gray-600">
                      Course Description {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'watched':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
              {[7, 8, 9, 10, 11, 12].map((item) => (
                <div
                  key={item}
                  className="group overflow-hidden transition-shadow hover:shadow-lg rounded-lg"
                >
                  <div className="overflow-hidden">
                    <img
                      src={`https://picsum.photos/300/200?random=${item}`}
                      alt={`Course ${item}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-t-lg">
                      <PiPlayCircleFill className="text-white text-5xl cursor-pointer" />
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-b-lg">
                    <h3 className="text-lg font-semibold">Course Title {item}</h3>
                    <p className="text-sm text-gray-600">
                      Course Description {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white w-full rounded-t-lg shadow-md">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={userData?.profileImage || '/ariana-grande.png'}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">
              {userData?.fullName || 'Loading...'}
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              {userData?.professionalTagline || 'Professional Tagline'}
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 mt-4 md:mt-0">
            <button
              className="px-6 py-2 border border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-full"
            >
              <PiShareNetworkBold className="inline-block mr-2" size={20} />
              Share Profile
            </button>
            <button
              onClick={() => navigate('/profile/edit')}
              className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-full"
            >
              <PiPenNibBold className="inline-block mr-2" size={20} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 p-6 bg-gray-50 w-full">
          <div className="text-center">
            <h2 className="text-base md:text-lg font-semibold text-gray-700">
              Videos
            </h2>
            <p className="text-xl md:text-3xl font-bold text-blue-600">
              {userData?.videosCount || 0}
            </p>
          </div>
          <div className="text-center">
            <h2 className="md:text-lg font-semibold text-gray-700">
              Total Students
            </h2>
            <p className="text-xl md:text-3xl font-bold text-blue-600">
              {userData?.totalStudents || 0}
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-base md:text-lg font-semibold text-gray-700">
              Watched Videos
            </h2>
            <p className="text-xl md:text-3xl font-bold text-blue-600">
              {userData?.watchedVideos || 0}
            </p>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="w-full">
          <div className="flex space-x-4 p-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('biography')}
              className={`px-4 py-2 font-semibold ${
                activeTab === 'biography'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600 hover:text-blue-500'
              } transition-colors`}
            >
              Biography
            </button>
            <button
              onClick={() => setActiveTab('downloaded')}
              className={`px-4 py-2 font-semibold ${
                activeTab === 'downloaded'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600 hover:text-blue-500'
              } transition-colors`}
            >
              Downloaded Videos
            </button>
            <button
              onClick={() => setActiveTab('watched')}
              className={`px-4 py-2 font-semibold ${
                activeTab === 'watched'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600 hover:text-blue-500'
              } transition-colors`}
            >
              Watched Videos
            </button>
          </div>
          <div className="w-full">{renderContent()}</div>
        </div>

        {/* Social Links */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Social Links
          </h2>
          <div className="space-y-3">
            {userData?.socialLinks?.facebook && (
              <a
                href={userData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <PiFacebookLogoBold className="mr-3" size={24} />
                <span className="text-sm">{userData.socialLinks.facebook}</span>
              </a>
            )}
            {userData?.socialLinks?.instagram && (
              <a
                href={userData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-pink-600 hover:text-pink-700 transition-colors"
              >
                <PiInstagramLogoBold className="mr-3" size={24} />
                <span className="text-sm">{userData.socialLinks.instagram}</span>
              </a>
            )}
            {userData?.socialLinks?.linkedin && (
              <a
                href={userData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-800 hover:text-blue-900 transition-colors"
              >
                <PiLinkedinLogoBold className="mr-3" size={24} />
                <span className="text-sm">{userData.socialLinks.linkedin}</span>
              </a>
            )}
            {userData?.socialLinks?.tiktok && ( // Added TikTok
              <a
                href={userData.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black hover:text-gray-800 transition-colors"
              >
                <FaTiktok className="mr-3" size={24} />
                <span className="text-sm">{userData.socialLinks.tiktok}</span>
              </a>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Certifications
          </h2>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <p className="font-semibold text-gray-700 text-sm">
              {userData?.certifications || 'No certifications available.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
