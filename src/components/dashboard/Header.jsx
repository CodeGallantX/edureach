import { useState } from "react";
import SearchBox from "./SearchBox";
import { PiBell } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Notifications from "../../components/dashboard/Notifications";

const Header = () => {
    const navigate = useNavigate();
    const [showNotifications, setShowNotifications] = useState(false);
    const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);

    const unreadCount = hasUnreadNotifications ? 1 : 0;

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        if (hasUnreadNotifications && !showNotifications) {
            // Mark as read when opening notifications
            setHasUnreadNotifications(false);
        }
    };

    return (
        <div className="relative flex flex-row items-center justify-between w-full bg-offWhite p-4">
            <SearchBox />
            <div className="flex flex-row items-center justify-start space-x-2 sm:space-x-3 md:space-x-4 px-2">
                <div className="relative">
                    <PiBell 
                        className="text-3xl cursor-pointer text-blue" 
                        onClick={toggleNotifications}
                    />
                    {unreadCount > 0 && (
                        <span className="w-3 h-3 bg-orange rounded-full absolute top-0 right-0.5 animate-pulse"></span>
                    )}
                </div>
                <img 
                    onClick={() => navigate("/profile")} 
                    src="/ariana-grande.png" 
                    alt="profile" 
                    className="w-8 md:w-10 h-auto rounded-full object-cover cursor-pointer hover:ring-2 ring-orange transition-all" 
                />
                
                {/* Notifications dropdown */}
                {showNotifications && (
                    <div className="absolute right-4 top-16 z-50">
                        <Notifications 
                            onClose={() => setShowNotifications(false)}
                            onMarkAsRead={() => setHasUnreadNotifications(false)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;