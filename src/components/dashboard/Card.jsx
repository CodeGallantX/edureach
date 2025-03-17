import { PiVideoDuotone } from "react-icons/pi"

const Card = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-4">
                <div className="rounded-lg flex flex-col items-start justify-center border border-gray-400 w-full">
                    <div className="border-b border-b-gray-400 w-full p-3 flex flex-row items-center justify-start space-x-2 bg-gray-100 rounded-t-lg">
                        <PiVideoDuotone className="text-3xl bg-green-100 border-2 border-green-500 rounded p-1" />
                        <span className="text-sm">Total Courses Enrolled</span>
                    </div>
                    <h2 className="p-3 text-3xl font-bold text-start">69</h2>
                </div>


                <div className="rounded-lg flex flex-col items-start justify-center border border-gray-400 w-full">
                    <div className="border-b border-b-gray-400 w-full p-3 flex flex-row items-center justify-start space-x-2 bg-gray-100 rounded-t-lg">
                        <PiVideoDuotone className="text-3xl bg-green-100 border-2 border-green-500 rounded p-1" />
                        <span className="text-sm">Ongoing Courses</span>
                    </div>
                    <h2 className="p-3 text-3xl font-bold text-start">47</h2>
                </div>


                <div className="rounded-lg flex flex-col items-start justify-center border border-gray-400 w-full">
                    <div className="border-b border-b-gray-400 w-full p-3 flex flex-row items-center justify-start space-x-2 bg-gray-100 rounded-t-lg">
                        <PiVideoDuotone className="text-3xl bg-green-100 border-2 border-green-500 rounded p-1" />
                        <span className="text-sm">Total Courses Enrolled</span>
                    </div>
                    <h2 className="p-3 text-3xl font-bold text-start">47</h2>
                </div>


                <div className="rounded-lg flex flex-col items-start justify-center border border-gray-400 w-full">
                    <div className="border-b border-b-gray-400 w-full p-3 flex flex-row items-center justify-start space-x-2 bg-gray-100 rounded-t-lg">
                        <PiVideoDuotone className="text-3xl bg-green-100 border-2 border-green-500 rounded p-1" />
                        <span className="text-sm">Total Courses Enrolled</span>
                    </div>
                    <h2 className="p-3 text-3xl font-bold text-start">47</h2>
                </div>
        </div>
    )
}

export default Card
