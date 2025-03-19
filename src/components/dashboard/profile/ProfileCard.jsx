// src/components/ProfileCard.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileCard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!profile) return <p>No profile data available.</p>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
      {/* Image */}
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500">
        <img src={profile.imageUrl} alt={`${profile.name}'s profile`} className="object-cover w-full h-full" />
      </div>

      {/* Profile Info */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
        <div className="flex space-x-4 mb-4">
          <div>
            <p className="text-sm text-gray-600">Videos</p>
            <p className="text-lg font-medium">{profile.videos}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Students</p>
            <p className="text-lg font-medium">{profile.students}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="bg-white text-blue-500 border border-blue-500 rounded-full px-4 py-2 text-sm hover:bg-blue-50 transition duration-300">
            Share Profile
          </button>
          <button className="bg-blue-500 text-white rounded-full px-4 py-2 text-sm hover:bg-blue-600 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;