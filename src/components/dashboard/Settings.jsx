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
  PiChevronRight
} from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button'; // Assuming these exist
import { Input } from '@/components/ui/input'; // Assuming these exist
import { Label } from '@/components/ui/label'; // Assuming these exist
import { Textarea } from '@/components/ui/textarea'; // Assuming these exist
import { Switch } from '@/components/ui/switch'; // Assuming these exist
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select" //Assuming these exist

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
  const [tempUserData, setTempUserData] = useState(initialUserData); // For edit mode
  const [tempSettings, setTempSettings] = useState(initialUserSettings);

  const navigate = useNavigate();

  // Load from localStorage (or use initial values)
  useEffect(() => {
    const storedUserData = localStorage.getItem('userProfileData');
    const storedSettings = localStorage.getItem('userSettings');

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setTempUserData(JSON.parse(storedUserData)); // Initialize temp data
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
    applyTheme(settings.theme); // Apply theme whenever settings change
    applyFontSize(settings.fontSize);
  }, [userData, settings]);

    // Function to apply the selected theme
    const applyTheme = (theme: string) => {
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

    const applyFontSize = (size: string) => {
        document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg');
        if (size === 'small') {
            document.documentElement.classList.add('text-sm');
        } else if (size === 'large') {
            document.documentElement.classList.add('text-lg');
        } else {
            document.documentElement.classList.add('text-base'); // Medium is the default
        }
    };

  // --- Profile Handlers ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTempUserData({
      ...tempUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'profilePicture' | 'coverPicture') => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setTempUserData({
            ...tempUserData,
            [field]: event.target.result as string,
          });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

    const handleSelectChange = (value: string, field: keyof typeof tempSettings) => {
        setTempSettings(prev => ({
            ...prev,
            [field]: value,
        }));
    };

  // --- Settings Handlers ---
  const handleSettingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const [category, settingName] = name.split('.');
    setTempSettings({
      ...tempSettings,
      [category]: {
        ...tempSettings[category as keyof typeof tempSettings],
        [settingName]: checked,
      },
    });
  };

  const handleThemeChange = (selectedTheme: string) => {
    setTempSettings(prevSettings => ({
        ...prevSettings,
        theme: selectedTheme,
    }));
  };

    const handleFontSizeChange = (selectedSize: string) => {
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
    setTempUserData(userData); // Reset to original values
    setTempSettings(settings);
    setIsEditMode(false);
  };

  const handleDeleteAccount = () => {
    // In a real app, you'd send a request to your server to delete the account.
    // For this example, we'll just clear the user data from localStorage and redirect to the home page.
    localStorage.removeItem('userProfileData');
    localStorage.removeItem('userSettings');
    navigate('/'); // Redirect to home page
    setShowDeleteModal(false); // Close the modal
  };

  // --- UI ---
  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Label htmlFor="profilePicture" className="text-gray-700 font-medium min-w-[120px]">
          Profile Picture
        </Label>
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
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
          <Input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 'profilePicture')}
            className="hidden"
          />
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Label htmlFor="coverPicture" className="text-gray-700 font-medium min-w-[120px]">
          Cover Picture
        </Label>
        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-300">
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
          <Input
            type="file"
            id="coverPicture"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 'coverPicture')}
            className="hidden"
          />
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Label htmlFor="fullName" className="text-gray-700 font-medium min-w-[120px]">
          Full Name
        </Label>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          value={isEditMode ? tempUserData.fullName : userData.fullName}
          onChange={handleInputChange}
          disabled={!isEditMode}
          className="w-full sm:w-[300px]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Label htmlFor="username" className="text-gray-700 font-medium min-w-[120px]">
          Username
        </Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={isEditMode ? tempUserData.username : userData.username}
          onChange={handleInputChange}
          disabled={!isEditMode}
          className="w-full sm:w-[300px]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Label htmlFor="email" className="text-gray-700 font-medium min-w-[120px]">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={isEditMode ? tempUserData.email : userData.email}
          onChange={handleInputChange}
          disabled={!isEditMode}
          className="w-full sm:w-[300px]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-start gap-4">
        <Label htmlFor="bio" className="text-gray-700 font-medium min-w-[120px] mt-2">
          Bio
        </Label>
        <Textarea
          id="bio"
          name="bio"
          value={isEditMode ? tempUserData.bio : userData.bio}
          onChange={handleInputChange}
          disabled={!isEditMode}
          className="w-full sm:w-[300px]"
          rows={3}
        />
      </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Label htmlFor="location" className="text-gray-700 font-medium min-w-[120px]">
                    Location
                </Label>
                <Input
                    type="text"
                    id="location"
                    name="location"
                    value={isEditMode ? tempUserData.location : userData.location}
                    onChange={handleInputChange}
                    disabled={!isEditMode}
                    className="w-full sm:w-[300px]"
                />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Label htmlFor="website" className="text-gray-700 font-medium min-w-[120px]">
                    Website
                </Label>
                <Input
                    type="text"
                    id="website"
                    name="website"
                    value={isEditMode ? tempUserData.website : userData.website}
                    onChange={handleInputChange}
                    disabled={!isEditMode}
                    className="w-full sm:w-[300px]"
                />
            </div>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Label htmlFor="currentPassword" className="text-gray-700 font-medium">
          Current Password
        </Label>
        <Input
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="Enter your current password"
          className="w-full sm:w-[300px]"
          disabled={!isEditMode}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Label htmlFor="newPassword" className="text-gray-700 font-medium">
          New Password
        </Label>
        <Input
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="Enter your new password"
          className="w-full sm:w-[300px]"
          disabled={!isEditMode}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
          Confirm New Password
        </Label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your new password"
          className="w-full sm:w-[300px]"
          disabled={!isEditMode}
        />
      </div>
    </div>
  );

  const renderThemeSettings = () => (
    <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Label htmlFor="theme" className="text-gray-700 font-medium">Theme</Label>
            <Select
                value={isEditMode ? tempSettings.theme : settings.theme}
                onValueChange={handleThemeChange}
                disabled={!isEditMode}
            >
                <SelectTrigger className="w-full sm:w-[300px]">
                    <SelectValue placeholder="Select Theme" />
                </SelectTrigger>
                <SelectContent>
                    {themeOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Label htmlFor="fontSize" className="text-gray-700 font-medium">Font Size</Label>
          <Select
            value={isEditMode ? tempSettings.fontSize : settings.fontSize}
            onValueChange={handleFontSizeChange}
            disabled={!isEditMode}
          >
            <SelectTrigger className="w-full sm:w-[300px]">
              <SelectValue placeholder="Select Font Size" />
            </SelectTrigger>
            <SelectContent>
              {fontSizeOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Label htmlFor="emailNotifications" className="text-gray-700 font-medium">
          Email Notifications
        </Label>
        <Switch
          id="emailNotifications"
          name="notifications.email"
          checked={isEditMode ? tempSettings.notifications.email : settings.notifications.email}
          onCheckedChange={(checked) => handleSettingChange({
            target: {
              name: 'notifications.email',
              checked: checked,
            }
          })}
          disabled={!isEditMode}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="pushNotifications" className="text-gray-700 font-medium">
          Push Notifications
        </Label>
        <Switch
          id="pushNotifications"
          name="notifications.push"
          checked={isEditMode ? tempSettings.notifications.push : settings.notifications.push}
          onCheckedChange={(checked) => handleSettingChange({
            target: {
              name: 'notifications.push',
              checked: checked,
            }
          })}
          disabled={!isEditMode}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="smsNotifications" className="text-gray-700 font-medium">
          SMS Notifications
        </Label>
        <Switch
          id="smsNotifications"
          name="notifications.sms"
          checked={isEditMode ? tempSettings.notifications.sms : settings.notifications.sms}
          onCheckedChange={(checked) => handleSettingChange({
            target: {
              name: 'notifications.sms',
              checked: checked,
            }
          })}
          disabled={!isEditMode}
        />
      </div>
    </div>
  );

    const renderPrivacySettings = () => (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Label htmlFor="profileVisibility" className="text-gray-700 font-medium">Profile Visibility</Label>
                <Select
                    value={isEditMode ? tempSettings.privacy.profileVisibility : settings.privacy.profileVisibility}
                    onValueChange={(value) => handleSelectChange(value, 'profileVisibility')}
                    disabled={!isEditMode}
                >
                    <SelectTrigger className="w-full sm:w-[300px]">
                        <SelectValue placeholder="Select Visibility" />
                    </SelectTrigger>
                    <SelectContent>
                        {profileVisibilityOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Label htmlFor="postVisibility" className="text-gray-700 font-medium">Post Visibility</Label>
                <Select
                    value={isEditMode ? tempSettings.privacy.postVisibility : settings.privacy.postVisibility}
                    onValueChange={(value) => handleSelectChange(value, 'postVisibility')}
                    disabled={!isEditMode}
                >
                    <SelectTrigger className="w-full sm:w-[300px]">
                        <SelectValue placeholder="Select Visibility" />
                    </SelectTrigger>
                    <SelectContent>
                        {postVisibilityOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Label htmlFor="messageVisibility" className="text-gray-700 font-medium">Message Visibility</Label>
                <Select
                    value={isEditMode ? tempSettings.privacy.messageVisibility : settings.privacy.messageVisibility}
                    onValueChange={(value) => handleSelectChange(value, 'messageVisibility')}
                    disabled={!isEditMode}
                >
                    <SelectTrigger className="w-full sm:w-[300px]">
                        <SelectValue placeholder="Select Visibility" />
                    </SelectTrigger>
                    <SelectContent>
                        {messageVisibilityOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );

  const renderLanguageSettings = () => (
    <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Label htmlFor="language" className="text-gray-700 font-medium">Language</Label>
            <Select
                value={isEditMode ? tempSettings.language : settings.language}
                onValueChange={(value) => handleSelectChange(value, 'language')}
                disabled={!isEditMode}
            >
                <SelectTrigger className="w-full sm:w-[300px]">
                    <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                    {languageOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    </div>
  );

  const renderDeleteAccount = () => (
    <div className="space-y-4">
      <p className="text-gray-700">
        Deleting your account will permanently remove your profile and all your data. This action cannot be undone.
      </p>
      <Button
        variant="destructive"
        className="bg-red-500 hover:bg-red-600 text-white"
        onClick={() => setShowDeleteModal(true)}
      >
        <PiTrash className="mr-2" />
        Delete Account
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="space-y-4">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'profile'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <PiUser className="w-5 h-5" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'account'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <PiLock className="w-5 h-5" />
                Account
              </button>
              <button
                onClick={() => setActiveTab('theme')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'theme'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <PiPalette className="w-5 h-5" />
                Theme & Appearance
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'notifications'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <PiBell className="w-5 h-5" />
                Notifications
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'privacy'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <PiLock className="w-5 h-5" />
                Privacy
              </button>
              <button
                onClick={() => setActiveTab('language')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'language'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <PiInfo className="w-5 h-5" />
                Language
              </button>
              <button
                onClick={() => setActiveTab('delete')}
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${activeTab === 'delete'
                  ? 'bg-red-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <PiTrash className="w-5 h-5" />
                Delete Account
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-8">
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
                    <Button
                      variant="outline"
                      onClick={handleCancel}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      <PiX className="mr-2" />
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSave}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      <PiCheck className="mr-2" />
                      Save
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => setIsEditMode(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Edit
                  </Button>
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
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: -20 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 w-full max-w-md space-y-6"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Delete Your Account</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Are you sure you want to delete your account? This action cannot be undone.
                </p>
                <div className="flex justify-end gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowDeleteModal(false)}
                    className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleDeleteAccount}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Delete
                  </Button>
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
