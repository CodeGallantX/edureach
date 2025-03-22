import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import Banner from "../../components/dashboard/Banner";
import Card from "../../components/dashboard/Card";

const page = {
  title: "Dashboard",
  description: "Manage your time, track your learning progress",
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
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full flex flex-col items-start justify-start space-y-2 bg-ash">
        <Header userData={userData} />
        <Banner page={page} />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;