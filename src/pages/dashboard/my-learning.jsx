import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"
import TawkToChat from "../../components/TawkToChat"
import LearningCourses from "../../components/dashboard/learning/LearningCourse"

const page = {
    title: "My Learning",
    description: "Manage your time, track your learning progress"
}

const App = () => {
    return (
        <div className="flex">
            <TawkToChat />
            {/* Fixed Sidebar */}
                  <div className="static lg:fixed h-full">
                    <Sidebar />
                  </div>
                  
                  {/* Main content with padding to account for the fixed sidebar */}
                  <div className="w-full flex flex-col items-start justify-start space-y-2 bg-ash ml-0 lg:ml-[250px]">
                <Header />
                <div className="pt-20 w-full">
                <Banner page={page} />
                <LearningCourses />
                </div>
            </div>
        </div>
    )
}

export default App