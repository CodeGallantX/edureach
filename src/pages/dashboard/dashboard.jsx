import Sidebar from "../../components/dashboard/Sidebar"
import Banner from "../../components/dashboard/Banner"
import SearchBox from "../../components/dashboard/SearchBox"

const page = {
    title: "Dashboard",
    description: "Manage your time, track your learning progress"
}

const App = () => {
    return (
        <div className="">
            <Sidebar />
            <div>
                <SearchBox />
                <Banner page={page} />
            </div>
        </div>
    )
}

export default App