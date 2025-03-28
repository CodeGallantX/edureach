import Sidebar from "../../../components/dashboard/Sidebar"
import Header from "../../../components/dashboard/Header"
import Banner from "../../../components/dashboard/Banner"
import EditProfile from "../../../components/dashboard/profile/EditProfile"


const page = {
    title: "Edit Profile",
    description: "Manage your time, track your learning progress"
}

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
                <Banner page={page}/>
                <EditProfile />
            </div>
        </div>
    )
}

export default App