import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"
import Settings from "../../components/dashboard/Settings"

const page = {
    title: "Settings",
    description: "Personalise your dashboard"
}

const App = () => {
    return (
        <div className="flex">
            {/* Fixed Sidebar */}
            <div className="static lg:fixed h-full">
                <Sidebar />
            </div>

            {/* Main content with padding to account for the fixed sidebar */}
            <div className="w-full flex flex-col items-start justify-start space-y-2 bg-ash ml-0 lg:ml-[250px]">
                <Header />
                <Banner page={page} />
                <Settings />
            </div>
        </div>
    )
}

export default App