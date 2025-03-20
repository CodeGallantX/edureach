import Sidebar from "../../../components/dashboard/Sidebar"
import Header from "../../../components/dashboard/Header"
import Banner from "../../../components/dashboard/Banner"
import CourseContent from "../../../components/dashboard/learning/CourseContent"
import CourseSummary from "../../../components/dashboard/learning/CourseSummary"
import CourseDetails from "../../../components/dashboard/learning/CourseDetails"
import AuthorDetails from "../../../components/dashboard/learning/AuthorDetails"

const page = {
    title: "My Learning",
    description: "Manage your time, track your learning progress"
}

const App = () => {
    return (
        <div className="flex flex-row">
            <div className="">
                <Sidebar />
            </div>
            <div className="w-full flex flex-col items-start justify-start space-y-4 bg-ash">
                <Header />
                <div className="flex flex-col md:flex-row items-start justify-between w-full">
                    <section>
                        <CourseSummary />
                        <CourseContent />
                    </section>
                    <aside className="p-4">
                        <CourseDetails />
                        <AuthorDetails />
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default App