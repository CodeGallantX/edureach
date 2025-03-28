import { useState, useEffect, useRef } from "react";
import SearchBox from "./SearchBox";
import { PiBell, PiCaretDown } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Notifications from "../../components/dashboard/Notifications";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const navigate = useNavigate();
    const [showNotifications, setShowNotifications] = useState(false);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState({
        code: "en",
        name: "English",
        flag: "https://flagcdn.com/w20/gb.png"
    });

    const languageDropdownRef = useRef(null);
    const languageButtonRef = useRef(null);
    const notificationButtonRef = useRef(null);
    const notificationsRef = useRef(null);

    const languages = [
        { code: "en-uk", name: "English (UK)", flagCode: "gb" },
        { code: "yo", name: "Yoruba", flagCode: "ng" },
        { code: "en", name: "English", flagCode: "us" },
        { code: "ha", name: "Hausa", flagCode: "ng" },
        { code: "pcm", name: "Pidgin", flagCode: "ng" }
    ];

    const unreadCount = hasUnreadNotifications ? 1 : 0;

    // Handle click outside for both dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showLanguageDropdown && 
                languageDropdownRef.current && 
                !languageDropdownRef.current.contains(event.target) &&
                !languageButtonRef.current.contains(event.target)) {
                setShowLanguageDropdown(false);
            }

            if (showNotifications && 
                notificationsRef.current && 
                !notificationsRef.current.contains(event.target) &&
                !notificationButtonRef.current.contains(event.target)) {
                setShowNotifications(false);
                if (hasUnreadNotifications) {
                    setHasUnreadNotifications(false);
                }
            }
        };

        // Handle Escape key press
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setShowLanguageDropdown(false);
                setShowNotifications(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [showLanguageDropdown, showNotifications, hasUnreadNotifications]);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        if (hasUnreadNotifications && !showNotifications) {
            setHasUnreadNotifications(false);
        }
    };

    const toggleLanguageDropdown = () => {
        setShowLanguageDropdown(!showLanguageDropdown);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage({
            ...language,
            flag: `https://flagcdn.com/w20/${language.flagCode}.png`
        });
        setShowLanguageDropdown(false);
        // Here you would typically implement language change logic
        console.log("Language changed to:", language.name);
    };

    return (
        <div className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between w-full bg-offWhite p-4 z-50">
            <SearchBox />
            <div className="flex flex-row items-center justify-end gap-4 md:gap-6 px-2">
                {/* Language Dropdown */}
                <div className="relative">
                    <button 
                        ref={languageButtonRef}
                        onClick={toggleLanguageDropdown}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors border border-gray-300"
                        aria-label="Language selector"
                        aria-expanded={showLanguageDropdown}
                    >
                        <img 
                            src={selectedLanguage.flag} 
                            alt={selectedLanguage.name} 
                            className="w-5 h-3.5 object-cover"
                        />
                        <span className="text-sm font-medium hidden sm:inline">
                            {selectedLanguage.name}
                        </span>
                        <PiCaretDown className={`transition-transform text-gray-600 ${showLanguageDropdown ? "rotate-180" : ""}`} />
                    </button>
                    
                    <AnimatePresence>
                        {showLanguageDropdown && (
                            <motion.div
                                ref={languageDropdownRef}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-300 z-50"
                                role="menu"
                            >
                                <div className="py-1">
                                    {languages.map((language) => (
                                        <button
                                            key={language.code}
                                            onClick={() => selectLanguage(language)}
                                            className={`flex items-center px-4 py-2 text-sm w-full text-left hover:bg-blue-50 ${
                                                selectedLanguage.code === language.code ? "bg-blue-100" : ""
                                            }`}
                                            role="menuitem"
                                        >
                                            <img 
                                                src={`https://flagcdn.com/w20/${language.flagCode}.png`} 
                                                alt={language.name} 
                                                className="w-5 h-3.5 object-cover mr-3"
                                            />
                                            <span>{language.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Notification Bell */}
                <div className="relative">
                    <button 
                        ref={notificationButtonRef}
                        onClick={toggleNotifications}
                        className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Notifications"
                        aria-expanded={showNotifications}
                    >
                        <PiBell className="text-2xl md:text-3xl text-blue" />
                        {unreadCount > 0 && (
                            <span className="absolute top-0 right-0 w-3 h-3 bg-orange rounded-full animate-pulse"></span>
                        )}
                    </button>
                </div>
                
                {/* Profile Image */}
                <button 
                    onClick={() => navigate("/profile")}
                    className="p-0.5 rounded-full hover:ring-2 ring-orange transition-all"
                    aria-label="User profile"
                >
                    <img 
                        src="/ariana-grande.png" 
                        alt="Profile" 
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" 
                    />
                </button>
                
                {/* Notifications dropdown */}
                <AnimatePresence>
                    {showNotifications && (
                        <motion.div
                            ref={notificationsRef}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute right-4 top-16 md:top-20 z-50"
                            role="menu"
                        >
                            <Notifications 
                                onClose={() => setShowNotifications(false)}
                                onMarkAsRead={() => setHasUnreadNotifications(false)}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Header;