import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"
import Card from "../../components/dashboard/Card"

const page = {
    title: "Dashboard",
    description: "Manage your time, track your learning progress"
}

const App = () => {
    return (
        <div className="flex flex-row">
            <div className="">
                <Sidebar />
            </div>
            <div className="w-full flex flex-col items-start p-4 pt-8 justify-start space-y-6 md:space-y-12">
                <Header />
                <Banner page={page} />
                <Card />
            </div>
        </div>
    )
}

export default App