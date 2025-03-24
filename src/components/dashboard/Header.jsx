import SearchBox from "./SearchBox";
import { PiBell } from "react-icons/pi"
import { useNavigate } from "react-router-dom"
import Notifications from "../../components/dashboard/Notifications"

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="relative flex flex-row items-center justify-between w-full bg-offWhite p-4">
            <SearchBox />
            <div className="flex flex-row items-center justify-start space-x-2 sm:space-x-3 md:space-x-4 px-2">
                <div className="relative">
                    <PiBell className="text-3xl cursor-pointer text-blue" onClick={() => navigate("/notifications")}/>
                    <span className="w-3 h-3 bg-blue rounded-full absolute top-0 right-0.5"></span>
                </div>
                <img onClick={() => navigate("/profile")} src="/ariana-grande.png" alt="profile" className="w-8 md:w-10 h-auto rounded-full object-cover cursor-pointer" />
            </div>
        </div>
    )
}

export default Header