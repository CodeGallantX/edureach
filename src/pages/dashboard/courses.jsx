import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"
import OngoingCourses from "../../components/dashboard/OngoingCourses"

const page = {
    title: "All Courses",
    description: "Explore a variety of courses designed to enhance your skills and knowledge"
}

const App = () => {
    return (
        <div className="flex flex-row">
            <div className="">
                <Sidebar />
            </div>
            <div className="w-full flex flex-col items-start justify-start space-y-4 bg-ash">
                <Header />
                <Banner page={page} />
                <OngoingCourses />
            </div>
        </div>
    )
}

export default App