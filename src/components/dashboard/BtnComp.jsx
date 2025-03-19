import { PiArrowLeft, PiPlusCircle  } from "react-icons/pi";
import { useNavigate } from "react-router-dom"

const BtnComp = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="p-4 flex flex-row items-center justify-between">
        <button
          onClick={() => navigate("/courses")}
          className="px-4 py-3 rounded-xl border border-deepBlue"
        >
          <PiArrowLeft className="text-xl text-deepBlue inline-block mr-1" />
          Back
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-3 rounded-xl bg-deepBlue text-white"
        >
          <PiPlusCircle className="text-xl text-sm text-white inline-block mr-1" />
          Add
        </button>
      </div>
    </div>
  )
}

export default BtnComp
