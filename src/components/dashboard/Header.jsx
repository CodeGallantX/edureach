import SearchBox from "./SearchBox";
import { PiBell } from "react-icons/pi"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-row items-center justify-between w-full">
            <SearchBox />
            <div className="flex flex-row items-center justify-start space-x-2 sm:space-x-3 md:space-x-4">
                <PiBell className="text-3xl cursor-pointer text-blue" onClick={() => navigate("/notifications")}/>
                <img onClick={() => navigate("/profile")} src="/ariana-grande.png" alt="profile" className="w-8 md:w-10 h-auto rounded-full object-cover cursor-pointer" />
            </div>
        </div>
    )
}

export default Header