import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"
import Card from "../../components/dashboard/Card"
import CoursesOverview from "../../components/dashboard/CoursesOverview"
import RecommendedCourses from "../../components/dashboard/RecommendedCourses"

const page = {
    title: "Dashboard",
    description: "Manage your time, track your learning progress"
}

const App = () => {
    return (
        <div className="flex flex-row">
            <div className="">
                <Sidebar />
            </div>
            <div className="w-full flex flex-col items-start justify-start space-y-2 bg-ash">
                <Header />
                <Banner page={page} />
                <Card />
                <CoursesOverview />
                <RecommendedCourses />
            </div>
        </div>
    )
}

export default App