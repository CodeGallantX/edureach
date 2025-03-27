import Sidebar from "../../../components/dashboard/Sidebar"
import Header from "../../../components/dashboard/Header"
import Banner from "../../../components/dashboard/Banner"
import CourseContent from "../../../components/dashboard/learning/CourseContent"
import CourseSummary from "../../../components/dashboard/learning/CourseSummary"
import CourseDetails from "../../../components/dashboard/learning/CourseDetails"
import AuthorDetails from "../../../components/dashboard/learning/AuthorDetails"


const App = () => {
    return (
        <div className="flex flex-row">
            {/* Fixed Sidebar */}
      <div className="fixed h-full">
        <Sidebar />
      </div>
      
      {/* Main content with padding to account for the fixed sidebar */}
      <div className="w-full flex flex-col items-start justify-start space-y-2 bg-ash ml-0 md:ml-[250px]">
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