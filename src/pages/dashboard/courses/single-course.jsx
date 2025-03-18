import Sidebar from "../../../components/dashboard/Sidebar"
import Header from "../../../components/dashboard/Header"
import VideoPlayer from "../../../components/dashboard/courses/VideoPlayer"
import CourseContent from "../../../components/dashboard/courses/CourseContent"

const App = () => {
    return (
        <section className="flex flex-row">
            <div className="bg-ash">
                <Sidebar />
            </div>
            <div className="w-full flex flex-col items-start justify-start space-y-4 bg-ash">
                <Header />
                <VideoPlayer />
                <CourseContent />
            </div>
        </section>
    )
}

export default App