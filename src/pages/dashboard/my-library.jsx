import Sidebar from "../../components/dashboard/Sidebar"
import Header from "../../components/dashboard/Header"
import Banner from "../../components/dashboard/Banner"

const page = {
    title: "My Library",
    description: "Access books and study resources already saved for you"
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