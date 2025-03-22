import React, { useState } from 'react';
import { PiUserCircleFill, PiPhoneFill, PiEnvelopeFill, PiBriefcaseFill, PiCalendarFill } from "react-icons/pi";

const EditProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [firstName, setFirstName] = useState('James');
  const [lastName, setLastName] = useState('Majekodunmi');
  const [phoneNumber, setPhoneNumber] = useState('09025226796');
  const [email, setEmail] = useState('jamesmajekodunmi@gmail.com');
  const [professionalSummary, setProfessionalSummary] = useState('');
  const [professionalTagline, setProfessionalTagline] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [biography, setBiography] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="p-4 w-full">
        {/* Header */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`border-b-2 ${activeTab === 'personal' ? 'border-blue-500 text-blue-500' : 'text-gray-600'} px-4 py-2`}
            onClick={() => handleTabClick('personal')}
          >
            Personal Information
          </button>
          <button
            className={`border-b-2 ${activeTab === 'social' ? 'border-blue-500 text-blue-500' : 'text-gray-600'} px-4 py-2`}
            onClick={() => handleTabClick('social')}
          >
            Social Media
          </button>
          <button
            className={`border-b-2 ${activeTab === 'security' ? 'border-blue-500 text-blue-500' : 'text-gray-600'} px-4 py-2`}
            onClick={() => handleTabClick('security')}
          >
            Password & Security
          </button>
        </div>

        {/* Personal Information */}
        {activeTab === 'personal' && (
          <div>
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gray-300 mb-2">
                {/* You can add an image here */}
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Upload Picture (Max 2mb)</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <div className="flex items-center border rounded p-2">
                  <PiUserCircleFill className="mr-2" />
                  <input
                    type="text"
                    className="flex-1 outline-none"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <div className="flex items-center border rounded p-2">
                  <PiUserCircleFill className="mr-2" />
                  <input
                    type="text"
                    className="flex-1 outline-none"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="flex items-center border rounded p-2">
                  <PiPhoneFill className="mr-2" />
                  <input
                    type="text"
                    className="flex-1 outline-none"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="flex items-center border rounded p-2">
                  <PiEnvelopeFill className="mr-2" />
                  <input
                    type="email"
                    className="flex-1 outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-6">Save changes</button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Professional Information</h2>
                <div className="flex items-start border rounded p-2 mb-4">
                  <PiBriefcaseFill className="mr-2 mt-1" />
                  <textarea
                    className="flex-1 outline-none h-32"
                    value={professionalSummary}
                    onChange={(e) => setProfessionalSummary(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Professional Tagline</label>
                    <div className="flex items-center border rounded p-2">
                      <PiBriefcaseFill className="mr-2" />
                      <input
                        type="text"
                        className="flex-1 outline-none"
                        value={professionalTagline}
                        onChange={(e) => setProfessionalTagline(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                    <div className="flex items-center border rounded p-2">
                      <PiCalendarFill className="mr-2" />
                      <input
                        type="text"
                        className="flex-1 outline-none"
                        value={yearsOfExperience}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Biography</h2>
                <div className="flex items-start border rounded p-2">
                  <PiUserCircleFill className="mr-2 mt-1" />
                  <textarea
                    className="flex-1 outline-none h-32"
                    value={biography}
                    onChange={(e) => setBiography(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Media */}
        {activeTab === 'social' && (
          <div>
            {/* Add social media fields here */}
            <p>Social Media Settings</p>
          </div>
        )}

        {/* Password & Security */}
        {activeTab === 'security' && (
          <div>
            {/* Add password and security fields here */}
            <p>Password and Security Settings</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;