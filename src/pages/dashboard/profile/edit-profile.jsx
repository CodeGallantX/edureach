import Sidebar from "../../../components/dashboard/Sidebar"
import Header from "../../../components/dashboard/Header"
import Banner from "../../../components/dashboard/Banner"
import EditProfile from "../../../components/dashboard/profile/EditProfile"

const page = {
    title: "Edit Profile",
    description: "Edit your profile"
}
const App = () => {
    return (
        <div className="flex flex-row">
            <div className="">
                <Sidebar />
            </div>
            <div className="w-full flex flex-col items-start justify-start space-y-4 bg-ash">
                <Header />
                <Banner page={page}/>
                <EditProfile />
            </div>
        </div>
    )
}

export default App