import { PiVideoDuotone } from "react-icons/pi"

const cards = [
    {
        title: "Total Courses Enrolled",
        value: 69,
    },
    {
        title: "Ongoing Courses",
        value: 47,
    },
    {
        title: "Total Courses Enrolled",
        value: 47,
    },
    {
        title: "Total Courses Enrolled",
        value: 47,
    },

]

const Card = () => {
    return (
        <div className="p-4 w-full">
        <h3 className="text-2xl font-bold text-left">Overview</h3>
        <p className="text-sm text-left">See your overall information regarding your courses and your activities</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-6 mt-4">
            {cards.map((card, index) => (
                <div key={index} className="rounded-xl flex flex-col items-start justify-center border border-gray-400 w-full">
                    <div className="border-b border-b-gray-400 w-full p-4 flex flex-row items-center justify-start space-x-2 bg-gray-200 rounded-t-xl">
                        <PiVideoDuotone className="text-3xl bg-green-100 border-2 border-green-500 rounded p-1" />
                        <span className="text-sm">{card.title}</span>
                    </div>
                    <div className="bg-offWhite rounded-xl w-full">
                        <h2 className="p-3 text-3xl font-bold text-start">{card.value}</h2>
                    </div>
                </div>
            ))}

        </div>
        </div>
    )
}

export default Card
