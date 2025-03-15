import { FaMagnifyingGlass } from "react-icons/fa6"

const SearchBox = () => {
    return (
        <fieldset className="flex flex-row items-center justify-start relative w-full max-w-2xl">
                <FaMagnifyingGlass className="text-gray-500 text-xl translate-x-5 absolute " />
                <input type="text" placeholder="Search..." className="py-3 px-14 rounded-md w-full outline-none border-2 border-gray-400"/>
            
        </fieldset>
    )
}

export default SearchBox