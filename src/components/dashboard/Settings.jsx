import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PiUser,
  PiPalette,
  PiBell,
  PiLock,
  PiTrash,
  PiCheck,
  PiX,
  PiImage,
  PiUpload,
  PiInfo,
  PiSun,
  PiMoon,
  PiCaretRight
} from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';

// Mock user data and settings for demonstration
const initialUserData = {
  fullName: 'John Doe',
  username: 'johndoe',
  email: 'john.doe@example.com',
  bio: 'Software enthusiast',
  profilePicture: '/default-profile.png',
  coverPicture: '/default-cover.png',
  location: 'New York, NY',
  website: 'https://example.com',
};

const initialUserSettings = {
  theme: 'light', // 'light' or 'dark'
  notifications: {
    email: true,
    push: false,
    sms: false,
  },
  privacy: {
    profileVisibility: 'public', // 'public', 'followers', 'private'
    postVisibility: 'public',
    messageVisibility: 'everyone'
  },
  language: 'en', // 'en', 'es', 'fr', etc.
  fontSize: 'medium', // 'small', 'medium', 'large'
};

const themeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
];

const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
];

const fontSizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
];

const profileVisibilityOptions = [
  { value: 'public', label: 'Public' },
  { value: 'followers', label: 'Followers' },
  { value: 'private', label: 'Private' },
];

const postVisibilityOptions = [
    { value: 'public', label: 'Public' },
    { value: 'friends', label: 'Friends' },
    { value: 'onlyMe', label: 'Only Me' },
];

const messageVisibilityOptions = [
    { value: 'everyone', label: 'Everyone' },
    { value: 'friends', label: 'Friends' },
    { value: 'nobody', label: 'Nobody' },
];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState(initialUserData);
  const [settings, setSettings] = useState(initialUserSettings);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tempUserData, setTempUserData] = useState(initialUserData);
  const [tempSettings, setTempSettings] = useState(initialUserSettings);

  const navigate = useNavigate();

  // Load from localStorage (or use initial values)
  useEffect(() => {
    const storedUserData = localStorage.getItem('userProfileData');
    const storedSettings = localStorage.getItem('userSettings');

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setTempUserData(JSON.parse(storedUserData));
    }
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
      setTempSettings(JSON.parse(storedSettings));
    }

    // Apply theme on initial load
    applyTheme(storedSettings ? JSON.parse(storedSettings).theme : initialUserSettings.theme);
    applyFontSize(storedSettings ? JSON.parse(storedSettings).fontSize : initialUserSettings.fontSize);
  }, []);

  // Save to localStorage whenever userData or settings change
  useEffect(() => {
    localStorage.setItem('userProfileData', JSON.stringify(userData));
    localStorage.setItem('userSettings', JSON.stringify(settings));
    applyTheme(settings.theme);
    applyFontSize(settings.fontSize);
  }, [userData, settings]);

  // Function to apply the selected theme
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      // Apply system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    }
  };

  const applyFontSize = (size) => {
    document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg');
    if (size === 'small') {
      document.documentElement.classList.add('text-sm');
    } else if (size === 'large') {
      document.documentElement.classList.add('text-lg');
    } else {
      document.documentElement.classList.add('text-base');
    }
  };

  // --- Profile Handlers ---
  const handleInputChange = (e) => {
    setTempUserData({
      ...tempUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e, field) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setTempUserData({
            ...tempUserData,
            [field]: event.target.result,
          });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSelectChange = (value, field) => {
    setTempSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // --- Settings Handlers ---
  const handleSettingChange = (e) => {
    const { name, checked } = e.target;
    const [category, settingName] = name.split('.');
    setTempSettings({
      ...tempSettings,
      [category]: {
        ...tempSettings[category],
        [settingName]: checked,
      },
    });
  };

  const handleThemeChange = (selectedTheme) => {
    setTempSettings(prevSettings => ({
      ...prevSettings,
      theme: selectedTheme,
    }));
  };

  const handleFontSizeChange = (selectedSize) => {
    setTempSettings(prevSettings => ({
      ...prevSettings,
      fontSize: selectedSize,
    }));
  };

  // --- Save/Cancel ---
  const handleSave = () => {
    setUserData(tempUserData);
    setSettings(tempSettings);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setTempUserData(userData);
    setTempSettings(settings);
    setIsEditMode(false);
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem('userProfileData');
    localStorage.removeItem('userSettings');
    navigate('/');
    setShowDeleteModal(false);
  };

  // Custom Select Component
  const CustomSelect = ({ value, onChange, options, disabled, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const selectedOption = options.find(opt => opt.value === value) || options[0];
    
    return (
      <div className={`relative ${className}`}>
        <button
          type="button"
          className={`w-full flex items-center justify-between px-4 py-2 border rounded-md ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white cursor-pointer'}`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <span>{selectedOption.label}</span>
          <PiCaretRight className={`transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        </button>
        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg"
          >
            {options.map(option => (
              <button
                key={option.value}
                type="button"
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    );
  };

  // Custom Switch Component
  const CustomSwitch = ({ checked, onChange, disabled, name }) => {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${checked ? 'bg-blue-500' : 'bg-gray-200'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={() => !disabled && onChange({ target: { name, checked: !checked } })}
        disabled={disabled}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
    );
  };

  // --- Render Functions ---
  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label htmlFor="profilePicture" className="text-gray-700  font-medium min-w-[120px]">
          Profile Picture
        </label>
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 ">
          <img
            src={isEditMode ? tempUserData.profilePicture : userData.profilePicture}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {isEditMode && (
            <label htmlFor="profilePicture" className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer hover:bg-opacity-70 transition-all duration-300">
              <PiUpload className="text-white text-2xl" />
            </label>
          )}
        </div>
        {isEditMode && (
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 'profilePicture')}
            className="hidden"
          />
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label htmlFor="coverPicture" className="text-gray-700  font-medium min-w-[120px]">
          Cover Picture
        </label>
        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-300 ">
          <img
            src={isEditMode ? tempUserData.coverPicture : userData.coverPicture}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          {isEditMode && (
            <label htmlFor="coverPicture" className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition-all duration-300">
              <PiUpload className="text-white text-2xl" />
            </label>
          )}
        </div>
        {isEditMode && (
          <input
            type="file"
            id="coverPicture"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 'coverPicture')}
            className="hidden"
          />
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label htmlFor="fullName" className="text-gray-700  font-medium min-w-[120px]">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={isEditMode ? tempUserData.fullName : userData.fullName}
          onChange={handleInputChange}
          disabled={!isEditMode}
          className="w-full sm:w-[300px] rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 "
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label htmlFor="username" className="text-gray-700  font-medium min-w-[120px]">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={isEditMode ? tempUserData.username : userData.username}
          onChange={handleInputChange}
          disabled={!isEditMode}
          className="w-full sm:w-[300px] rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 "
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label htmlFor="email" className="text-gray-700  font-medium min-w-[120px]">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={isEditMode ? tempUserData.email : userData.email}
          onChange={handleInputChange}
          disabled={!isEditMode}
          className="w-full sm:w-[300px] rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 "
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-start gap-4">
        <label htmlFor="bio" className="text-gray-700  font-medium min-w-[120px] mt-2">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          value={isEditMode ? tempUserData.bio : userData.bio}
          onChange={handleInputChange}
          disabled={!isEditMode}
          className="w-full sm:w-[300px] rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 "
          rows={3}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label htmlFor="location" className="text-gray-700  font-medium min-w-[120px]">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={isEditMode ? tempUserData.location : userData.location}
          onChange={handleInputChange}
          disabled={!isEditMode}
          className="w-full sm:w-[300px] rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 "
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label htmlFor="website" className="text-gray-700  font-medium min-w-[120px]">
          Website
        </label>
        <input
          type="text"
          id="website"
          name="website"
          value={isEditMode ? tempUserData.website : userData.website}
          onChange={handleInputChange}
          disabled={!isEditMode}
          className="w-full sm:w-[300px] rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 "
        />
      </div>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <label htmlFor="currentPassword" className="text-gray-700  font-medium">
          Current Password
        </label>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="Enter your current password"
          className="w-full sm:w-[300px] rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 "
          disabled={!isEditMode}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <label htmlFor="newPassword" className="text-gray-700  font-medium">
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="Enter your new password"
          className="w-full sm:w-[300px] rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 "
          disabled={!isEditMode}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <label htmlFor="confirmPassword" className="text-gray-700  font-medium">
          Confirm New Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your new password"
          className="w-full sm:w-[300px] rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 "
          disabled={!isEditMode}
        />
      </div>
    </div>
  );

  const renderThemeSettings = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <label htmlFor="theme" className="text-gray-700  font-medium">Theme</label>
        <CustomSelect
          value={isEditMode ? tempSettings.theme : settings.theme}
          onChange={handleThemeChange}
          disabled={!isEditMode}
          options={themeOptions}
          className="w-full sm:w-[300px]"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <label htmlFor="fontSize" className="text-gray-700  font-medium">Font Size</label>
        <CustomSelect
          value={isEditMode ? tempSettings.fontSize : settings.fontSize}
          onChange={handleFontSizeChange}
          disabled={!isEditMode}
          options={fontSizeOptions}
          className="w-full sm:w-[300px]"
        />
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <label htmlFor="emailNotifications" className="text-gray-700  font-medium">
          Email Notifications
        </label>
        <CustomSwitch
          checked={isEditMode ? tempSettings.notifications.email : settings.notifications.email}
          onChange={handleSettingChange}
          disabled={!isEditMode}
          name="notifications.email"
        />
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor="pushNotifications" className="text-gray-700  font-medium">
          Push Notifications
        </label>
        <CustomSwitch
          checked={isEditMode ? tempSettings.notifications.push : settings.notifications.push}
          onChange={handleSettingChange}
          disabled={!isEditMode}
          name="notifications.push"
        />
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor="smsNotifications" className="text-gray-700  font-medium">
          SMS Notifications
        </label>
        <CustomSwitch
          checked={isEditMode ? tempSettings.notifications.sms : settings.notifications.sms}
          onChange={handleSettingChange}
          disabled={!isEditMode}
          name="notifications.sms"
        />
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <label htmlFor="profileVisibility" className="text-gray-700  font-medium">Profile Visibility</label>
        <CustomSelect
          value={isEditMode ? tempSettings.privacy.profileVisibility : settings.privacy.profileVisibility}
          onChange={(value) => handleSelectChange(value, 'privacy.profileVisibility')}
          disabled={!isEditMode}
          options={profileVisibilityOptions}
          className="w-full sm:w-[300px]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <label htmlFor="postVisibility" className="text-gray-700  font-medium">Post Visibility</label>
        <CustomSelect
          value={isEditMode ? tempSettings.privacy.postVisibility : settings.privacy.postVisibility}
          onChange={(value) => handleSelectChange(value, 'privacy.postVisibility')}
          disabled={!isEditMode}
          options={postVisibilityOptions}
          className="w-full sm:w-[300px]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <label htmlFor="messageVisibility" className="text-gray-700  font-medium">Message Visibility</label>
        <CustomSelect
          value={isEditMode ? tempSettings.privacy.messageVisibility : settings.privacy.messageVisibility}
          onChange={(value) => handleSelectChange(value, 'privacy.messageVisibility')}
          disabled={!isEditMode}
          options={messageVisibilityOptions}
          className="w-full sm:w-[300px]"
        />
      </div>
    </div>
  );

  const renderLanguageSettings = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <label htmlFor="language" className="text-gray-700  font-medium">Language</label>
        <CustomSelect
          value={isEditMode ? tempSettings.language : settings.language}
          onChange={(value) => handleSelectChange(value, 'language')}
          disabled={!isEditMode}
          options={languageOptions}
          className="w-full sm:w-[300px]"
        />
      </div>
    </div>
  );

  const renderDeleteAccount = () => (
    <div className="space-y-4">
      <p className="text-gray-700 ">
        Deleting your account will permanently remove your profile and all your data. This action cannot be undone.
      </p>
      <button
        className="flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
        onClick={() => setShowDeleteModal(true)}
      >
        <PiTrash className="mr-2" />
        Delete Account
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="space-y-4">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'profile'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700  hover:bg-gray-100'
                  }`}
              >
                <PiUser className="w-5 h-5" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'account'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700  hover:bg-gray-100'
                  }`}
              >
                <PiLock className="w-5 h-5" />
                Account
              </button>
              <button
                onClick={() => setActiveTab('theme')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'theme'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700  hover:bg-gray-100'
                  }`}
              >
                <PiPalette className="w-5 h-5" />
                Theme & Appearance
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'notifications'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700  hover:bg-gray-100'
                  }`}
              >
                <PiBell className="w-5 h-5" />
                Notifications
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'privacy'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700  hover:bg-gray-100'
                  }`}
              >
                <PiLock className="w-5 h-5" />
                Privacy
              </button>
              <button
                onClick={() => setActiveTab('language')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'language'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700  hover:bg-gray-100'
                  }`}
              >
                <PiInfo className="w-5 h-5" />
                Language
              </button>
              <button
                onClick={() => setActiveTab('delete')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'delete'
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-700  hover:bg-gray-100'
                  }`}
              >
                <PiTrash className="w-5 h-5" />
                Delete Account
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
            <div className="bg-gray-50 shadow-md rounded-lg p-6 space-y-8">
              <AnimatePresence mode='wait'>
                {activeTab === 'profile' && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderProfileSettings()}
                  </motion.div>
                )}
                {activeTab === 'account' && (
                  <motion.div
                    key="account"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderAccountSettings()}
                  </motion.div>
                )}
                {activeTab === 'theme' && (
                  <motion.div
                    key="theme"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderThemeSettings()}
                  </motion.div>
                )}
                {activeTab === 'notifications' && (
                  <motion.div
                    key="notifications"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderNotificationSettings()}
                  </motion.div>
                )}
                {activeTab === 'privacy' && (
                  <motion.div
                    key="privacy"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderPrivacySettings()}
                  </motion.div>
                )}
                {activeTab === 'language' && (
                  <motion.div
                    key="language"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderLanguageSettings()}
                  </motion.div>
                )}
                {activeTab === 'delete' && (
                  <motion.div
                    key="delete"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderDeleteAccount()}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 mt-8">
                {isEditMode ? (
                  <>
                    <button
                      onClick={handleCancel}
                      className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md transition-colors"
                    >
                      <PiX className="mr-2" />
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                    >
                      <PiCheck className="mr-2" />
                      Save
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditMode(true)}
                    className="flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Delete Account Modal */}
        <AnimatePresence>
          {showDeleteModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: -20 }}
                className="bg-white rounded-lg p-6 w-full max-w-md space-y-6"
              >
                <h2 className="text-xl font-bold text-gray-900">Delete Your Account</h2>
                <p className="text-gray-700 ">
                  Are you sure you want to delete your account? This action cannot be undone.
                </p>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700  hover:bg-gray-300 rounded-md transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SettingsPage;