import Sidebar from "../../../components/dashboard/Sidebar"
import Header from "../../../components/dashboard/Header"
import VideoPlayer from "../../../components/dashboard/courses/VideoPlayer"
import CourseContent from "../../../components/dashboard/courses/CourseContent"

const App = () => {
    return (
        <section className="flex">
            {/* Fixed Sidebar */}
            <div className="fixed h-full">
                <Sidebar />
            </div>

            {/* Main content with padding to account for the fixed sidebar */}
            <div className="w-full flex flex-col items-start justify-start space-y-2 bg-ash ml-0 md:ml-[250px]">
                <Header />
                <VideoPlayer />
                <CourseContent />
            </div>
        </section>
    )
}

export default App