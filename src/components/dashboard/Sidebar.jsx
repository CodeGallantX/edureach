import { FaHouse, FaUser, FaBook, FaChartBar, FaBell, FaGear, FaFolder } from "react-icons/fa6";
import { FaSignOutAlt  } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Dashboard",
    icon: <FaHouse />,
    path: "/dashboard",
  },
  {
    name: "All Courses",
    icon: <FaChartBar />,
    path: "/courses",
  },
  {
    name: "My Library",
    icon: <FaBook />,
    path: "/my-library",
  },
  {
    name: "My Learning",
    icon: <FaFolder  />,
    path: "/my-learning",
  },
  {
    name: "Notifications",
    icon: <FaBell />,
    path: "/notifications",
  },
  {
    name: "Profile",
    icon: <FaUser />,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: <FaGear />,
    path: "/settings",
  }
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="bg-gray-50 w-64 h-screen px-4 py-8 flex flex-col items-start gap-2 ">
        <img src="/logo-white.png" alt="logo" className="mb-16"/>
      {navLinks.map((link, index) => {
        const isActive = location.pathname === link.path; // Check if the link is active
        return (
          <a
            key={index}
            href={link.path}
            className={`flex items-center gap-3 py-2 px-4 rounded-md transition-colors duration-200 w-full ${
              isActive
              ? "bg-blue text-white" // Active styles
                : "text-gray-700 hover:bg-gray-200" // Inactive styles
                }`}
                >
            {link.icon}
            <span>{link.name}</span>
          </a>
        );
      })}
          <button
            className="gap-3 py-2 px-4 text-left rounded-md transition-colors duration-200 w-full text-gray-700"
            onClick={() => navigate("/auth/login")}
          >
            <FaSignOutAlt className="inline-block mr-2 text-xl" />
            Log out
          </button>
    </aside>
  );
};

export default Sidebar;