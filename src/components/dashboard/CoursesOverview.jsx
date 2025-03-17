import { useNavigate } from "react-router-dom"

const CoursesOverview = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="w-full flex flex-row items-center justify-between p-4">
                <div>
                    <h3 className="text-2xl font-bold text-left">My Ongoing Courses</h3>
                    <p className="text-sm text-left">See your overall information regarding your courses and your activities</p>
                </div>
                <button onClick={() => navigate("/courses")} className="bg-blue py-2 px-6 rounded-full text-white">View All</button>
            </div>

        </div>
    )
}

export default CoursesOverview
