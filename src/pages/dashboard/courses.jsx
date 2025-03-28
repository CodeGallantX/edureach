import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"
import OngoingCourses from "../../components/dashboard/OngoingCourses"
import RecommendedCourses from "../../components/dashboard/RecommendedCourses"

const page = {
    title: "All Courses",
    description: "Explore a variety of courses designed to enhance your skills and knowledge"
}

const section = {
    title: "All Courses",
    tagline: "Explore a variety of courses designed to enhance your skills and knowledge"
}

const App = () => {
    return (
        <div className="flex">
            {/* Fixed Sidebar */}
            <div className="static lg:fixed h-full">
                <Sidebar />
            </div>

            {/* Main content with padding to account for the fixed sidebar */}
            <div className="w-full flex flex-col items-start justify-start space-y-2 bg-ash ml-0 lg:ml-[250px]">
                <Header />
                <Banner page={page} />
                <OngoingCourses />
                <RecommendedCourses section={section} />
            </div>
        </div>
    )
}

export default App