import { PiList, PiX, PiHouseDuotone, PiSignOut, PiBooksDuotone, PiUserCircle, PiGearDuotone, PiFolderSimpleDuotone, PiVideoDuotone } from "react-icons/pi";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { name: "Dashboard", icon: <PiHouseDuotone />, path: "/dashboard" },
  { name: "All Courses", icon: <PiVideoDuotone />, path: "/courses" },
  { name: "My Library", icon: <PiBooksDuotone />, path: "/my-library" },
  { name: "My Learning", icon: <PiFolderSimpleDuotone />, path: "/my-learning" },
  { name: "Profile", icon: <PiUserCircle />, path: "/profile" },
  { name: "Settings", icon: <PiGearDuotone />, path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove auth token
    navigate("/auth/login"); // Redirect to login page
};

  return (
    <aside className="bg-offWhite">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-5 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-700 bg-gray-200 rounded-md"
        >
          {isMobileMenuOpen ? <PiX size={24} /> : <PiList size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gray-50 h-screen px-4 py-8 flex flex-col items-start gap-2 fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out w-64 lg:relative lg:translate-x-0 lg:w-64
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <img src="/logo-white.png" alt="logo" className="mt-12 lg:mt-0 mb-12" />

        {/* Navigation Links */}
        {navLinks.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <a
              key={index}
              href={link.path}
              className={`flex items-center gap-3 text-xl py-2 px-4 rounded-md transition-colors duration-200 w-full ${
                isActive
                  ? "bg-deepBlue text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {link.icon}
              <span className="text-base">{link.name}</span>
            </a>
          );
        })}

        {/* Logout Button */}
        <button
          className="gap-3 py-2 px-4 text-left rounded-md transition-colors duration-200 w-full text-gray-700 hover:bg-gray-200"
          onClick={handleLogout}
        >
          <PiSignOut className="inline-block mr-2 text-xl" />
          Log out
        </button>
      </aside>

      {/* Overlay when sidebar is open on mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </aside>
  );
};

export default Sidebar;