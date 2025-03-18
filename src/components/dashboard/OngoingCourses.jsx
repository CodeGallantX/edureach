import { PiPlayCircle } from "react-icons/pi"
import { useNavigate } from "react-router-dom";

const ongoingCourses = [
    {
        title: "Introduction to React Development",
        img: "",
        progress: 85,
        link: "/courses/single-course"
    }, 
    {
        title: "Become a Salsa Dancer in 3 weeks",
        img: "",
        progress: 60,
        link: "/courses/single-course"
    }, 
    {
        title: "Introduction to React Development",
        img: "",
        progress: 70,
        link: "/courses/single-course"
    }, 
]

const OngoingCourses = () => {
    const navigate = useNavigate();
    return (
        <section className="p-4">
            <h3 className="font-bold text-lg">Video I'm watching</h3>
            <p className="text-sm">See your overall information regarding your courses and your activities</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {ongoingCourses.map((courses, index) => (
                <div key={index} className="flex flex-col items-start justify-center bg-white p-4 rounded-xl space-y-3">
                    <img src={courses.link} alt={`${courses.title} - EkoStudy`}/>
                    <h3 className="text-xl font-bold text-blue">{courses.title}</h3>
                    {/* ReactProgress */}
                    <meter value="70" min={0} max={100}></meter>
                    <button onClick={() => navigate(courses.link)} className="text-sm py-2 px-6 rounded-full bg-blue text-white">Resume <PiPlayCircle className="text-2xl inline-block ml-1" /></button>
                </div>
                ))}
            </div>
        </section>
    )
}

export default OngoingCourses