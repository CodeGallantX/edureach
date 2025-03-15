import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"

const page = {
    title: "Courses",
    description: "Browse courses, follow your career path and excel"
}

const App = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <Sidebar />
            </div>
            <div className="col-span-10 flex flex-col items-start p-4 pt-9 justify-start space-y-12">
                <Header />
                <Banner page={page} />
            </div>
        </div>
    )
}

export default App