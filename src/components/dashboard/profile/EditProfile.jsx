import React, { useState, useEffect } from "react";
import { PiUserCircleFill, PiPhoneFill, PiEnvelopeFill, PiBriefcaseFill, PiCalendarFill } from "react-icons/pi";

const EditProfile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [professionalSummary, setProfessionalSummary] = useState("");
  const [professionalTagline, setProfessionalTagline] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [biography, setBiography] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setFullName(userData.fullName || "");
      setEmail(userData.email || "");
      setUsername(userData.username || "");
      // Set other fields as needed
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      // 2MB limit
      setProfileImage(URL.createObjectURL(file));
    } else {
      alert("Please upload an image less than 2MB.");
    }
  };

  const handleSaveChanges = () => {
    // Simulate saving changes
    setMessage("Profile updated successfully!");
    setTimeout(() => setMessage(""), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex space-x-4 mb-6 border-b">
          <button
            className={`border-b-2 ${activeTab === "personal" ? "border-blue-500 text-blue-500" : "text-gray-600"} px-4 py-2`}
            onClick={() => handleTabClick("personal")}
          >
            Personal Information
          </button>
          <button
            className={`border-b-2 ${activeTab === "social" ? "border-blue-500 text-blue-500" : "text-gray-600"} px-4 py-2`}
            onClick={() => handleTabClick("social")}
          >
            Social Media
          </button>
          <button
            className={`border-b-2 ${activeTab === "security" ? "border-blue-500 text-blue-500" : "text-gray-600"} px-4 py-2`}
            onClick={() => handleTabClick("security")}
          >
            Password & Security
          </button>
        </div>

        {/* Personal Information */}
        {activeTab === "personal" && (
          <div>
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gray-300 mb-2 overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <PiUserCircleFill className="w-full h-full text-gray-400" />
                )}
              </div>
              <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                Upload Picture (Max 2mb)
                <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="flex items-center border rounded p-2">
                  <PiUserCircleFill className="mr-2" />
                  <input
                    type="text"
                    className="flex-1 outline-none"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
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
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <div className="flex items-center border rounded p-2">
                  <PiUserCircleFill className="mr-2" />
                  <input
                    type="text"
                    className="flex-1 outline-none"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-6" onClick={handleSaveChanges}>
              Save changes
            </button>

            {message && <p className="text-green-500 mb-4">{message}</p>}

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
        {activeTab === "social" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Social Media Settings</h2>
            <p>Add your social media links here.</p>
          </div>
        )}

        {/* Password & Security */}
        {activeTab === "security" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Password & Security Settings</h2>
            <p>Update your password and security settings here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;