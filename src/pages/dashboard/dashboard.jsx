import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import Banner from "../../components/dashboard/Banner";
import Card from "../../components/dashboard/Card";
import CoursesOverview from "../../components/dashboard/CoursesOverview";
import RecommendedCourses from "../../components/dashboard/RecommendedCourses";

const page = {
    title: "Dashboard",
    description: "Manage your time, track your learning progress"
};

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
            navigate("/auth/login"); // Redirect to login if no authToken is found
        }
    }, [navigate]);

    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="w-full flex flex-col items-start justify-start space-y-2 bg-ash">
                <Header />
                <Banner page={page} />
                <Card />
                <CoursesOverview />
                <RecommendedCourses />
            </div>
        </div>
    );
};

export default Dashboard;
