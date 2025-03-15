import SearchBox from "./SearchBox";
import { FaBell } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-row items-center justify-between w-full">
            <SearchBox />
            <div className="flex flex-row items-center justify-center space-x-4">
                <FaBell className="text-2xl cursor-pointer" onClick={() => navigate("/notifications")}/>
                <img onClick={() => navigate("/profile")} src="/ariana-grande.png" alt="profile" className="w-10 h-auto rounded-full object-cover cursor-pointer" />
            </div>
        </div>
    )
}

export default Header