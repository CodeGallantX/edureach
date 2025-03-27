import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"

const page = {
    title: "Settings",
    description: "Personalise your dashboard"
}

const App = () => {
    return (
        <div className="flex">
            {/* Fixed Sidebar */}
            <div className="fixed h-full">
                <Sidebar />
            </div>

            {/* Main content with padding to account for the fixed sidebar */}
            <div className="w-full flex flex-col items-start justify-start space-y-2 bg-ash ml-0 md:ml-[250px]">
                <Header />
                <Banner page={page} />
            </div>
        </div>
    )
}

export default App