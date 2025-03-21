import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"
import ProfileCard from "../../components/dashboard/profile/ProfileCard"

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
            <div className="w-full flex flex-col items-start justify-start space-y-4 bg-ash">
                {/* <Header /> */}
                {/* <Banner page={page} /> */}
                <ProfileCard />
            </div>
        </div>
    )
}

export default App