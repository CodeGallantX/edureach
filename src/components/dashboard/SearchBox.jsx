import { PiMagnifyingGlass } from "react-icons/pi"

const SearchBox = () => {
    return (
        <fieldset className="flex flex-row items-center justify-start relative w-full ml-14 lg:ml-0 w-[200px] sm:max-x-xs md:max-w-2xl">
            <PiMagnifyingGlass className="text-gray-500 text-lg sm:text-xl translate-x-3 sm:translate-x-5 absolute " />
            <input type="text" placeholder="Search..." className="text-sm sm:text-base py-1 sm:py-3 px-8 sm:px-14 rounded-md w-full outline-none border-2 border-gray-400"/>
        </fieldset>
    )
}

export default SearchBox