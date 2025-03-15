import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"

const page = {
    title: "Dashboard",
    description: "Manage your time, track your learning progress"
}

const App = () => {
    return (
        <div className="grid md:grid-cols-12">
            <div className="col-span-2">
                <Sidebar />
            </div>
            <div className="col-span-10 flex flex-col items-start p-4 pt-8 justify-start space-y-6 md:space-y-12">
                <Header />
                <Banner page={page} />
            </div>
        </div>
    )
}

export default App