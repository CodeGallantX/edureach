import { PiVideoDuotone, PiClockCountdown, PiCertificate, PiGraduationCap } from "react-icons/pi";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const cards = [
    {
        title: "Total Courses Enrolled",
        value: 69,
        icon: <PiVideoDuotone className="text-3xl bg-green-100 border-2 border-green-500 rounded p-1" />
    },
    {
        title: "Ongoing Courses",
        value: 47,
        icon: <PiClockCountdown className="text-3xl bg-blue-100 border-2 border-blue-500 rounded p-1" />
    },
    {
        title: "Certificates Earned",
        value: 22,
        icon: <PiCertificate className="text-3xl bg-purple-100 border-2 border-purple-500 rounded p-1" />
    },
    {
        title: "Courses Completed",
        value: 18,
        icon: <PiGraduationCap className="text-3xl bg-yellow-100 border-2 border-yellow-500 rounded p-1" />
    },
];

const Card = () => {
    return (
        <div className="p-4 w-full">
            <h3 className="text-2xl font-bold text-left">Overview</h3>
            <p className="text-sm text-left text-gray-600 mb-4">
                See your overall information regarding your courses and your activities
            </p>
            
            {/* Desktop Grid View */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
                {cards.map((card, index) => (
                    <div key={index} className="rounded-xl flex flex-col items-start justify-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="border-b border-gray-200 w-full p-4 flex flex-row items-center justify-start space-x-2 bg-gray-50 rounded-t-xl">
                            {card.icon}
                            <span className="text-sm font-medium">{card.title}</span>
                        </div>
                        <div className="bg-white rounded-b-xl w-full">
                            <h2 className="p-4 text-3xl font-bold text-start">{card.value}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Carousel View */}
            <div className="sm:hidden">
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    stopOnHover={true}
                    swipeable={true}
                    emulateTouch={true}
                    centerMode={true}
                    centerSlidePercentage={80}
                    className="overview-carousel"
                >
                    {cards.map((card, index) => (
                        <div key={index} className="px-2 pb-6">
                            <div className="rounded-xl flex flex-col items-start justify-center border border-gray-200 shadow-sm h-full">
                                <div className="border-b border-gray-200 w-full p-4 flex flex-row items-center justify-start space-x-2 bg-gray-50 rounded-t-xl">
                                    {card.icon}
                                    <span className="text-sm font-medium">{card.title}</span>
                                </div>
                                <div className="bg-white rounded-b-xl w-full">
                                    <h2 className="p-4 text-3xl font-bold text-start">{card.value}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Card;