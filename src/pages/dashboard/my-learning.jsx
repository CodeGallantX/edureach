import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"
import OngoingCourses from "../../components/dashboard/OngoingCourses"
import AllCourses from "../../components/dashboard/RecommendedCourses"

const page = {
    title: "My Learning",
    description: "Manage your time, track your learning progress"
}

const section = {
    title: "My Learning",
    tagline: "Manage your time, track your learning progress"
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
                <AllCourses section={section}/>
            </div>
        </div>
    )
}

export default App