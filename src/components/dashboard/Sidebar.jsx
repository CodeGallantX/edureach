import { FaHouse, FaUser, FaBook, FaChartBar } from "react-icons/fa6";
import { useLocation } from "react-router-dom"; // Import useLocation

const navLinks = [
  {
    name: "Home",
    icon: <FaHouse />,
    path: "/dashboard",
  },
  {
    name: "All Courses",
    icon: <FaUser />,
    path: "/courses",
  },
  {
    name: "My Library",
    icon: <FaBook />,
    path: "/library",
  },
  {
    name: "My Learning",
    icon: <FaChartBar />,
    path: "/my-learning",
  },
  {
    name: "Notifications",
    icon: <FaChartBar />,
    path: "/notifications",
  },
  {
    name: "Profile",
    icon: <FaUser />,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: <FaChartBar />,
    path: "/settings",
  },
  {
    name: "Logout",
    icon: <FaChartBar />,
    path: "/auth/login",
  },
];

const Sidebar = () => {
  const location = useLocation(); // Get the current location

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
    </aside>
  );
};

export default Sidebar;