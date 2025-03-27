import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import Banner from "../../components/dashboard/Banner";
import Card from "../../components/dashboard/Card";
import CoursesOverview from "../../components/dashboard/CoursesOverview";
import RecommendedCourses from "../../components/dashboard/RecommendedCourses";

const page = {
  title: "Dashboard",
  description: "Manage your time, track your learning progress",
};

const section = {
  title: "Recommended Courses",
  tagline: "Manage your time, track your learning progress",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/auth/login"); // Redirect to login if no authToken is found
    } else {
      // Fetch user data from localStorage
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    }
  }, [navigate]);

  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="static lg:fixed h-full">
        <Sidebar />
      </div>
      
      {/* Main content with padding to account for the fixed sidebar */}
      <div className="w-full flex flex-col items-start justify-start space-y-2 bg-ash ml-0 lg:ml-[250px]">
        <Header userData={userData} />
        <Banner class="hidden md:block mt-40" page={page} />
        <Card />
        <CoursesOverview />
        <RecommendedCourses section={section} />
      </div>
    </div>
  );
};

export default Dashboard;