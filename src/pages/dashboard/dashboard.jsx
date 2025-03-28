import React, { useState, useEffect } from "react";
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
      navigate("/auth/login");
    } else {
      try {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        } else {
          //  if there is no user data.
          setUserData(null);
        }
      } catch (error) {
        console.error("Error parsing userData from localStorage:", error);
        // Handle the error, e.g., clear the invalid data and redirect to login
        localStorage.removeItem("userData");
        navigate("/auth/login");
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
        <div className="pt-20 w-full">
          <Banner class="hidden md:block" page={page} />
          <Card />
          <CoursesOverview />
          <RecommendedCourses section={section} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
