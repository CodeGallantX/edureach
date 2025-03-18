import { useNavigate } from "react-router-dom";
import {
  PiArrowLeft,
  PiPlusCircle,
  PiCaretLeft,
  PiCaretRight,
  PiListBullets,
} from "react-icons/pi";

const VideoPlayer = () => {
  const navigate = useNavigate();

  // Replace with your actual video URL or file path
  const videoSource = "your-video-url.mp4"; // Example: "videos/my-video.mp4" or "https://example.com/video.mp4"
  const instructorImage = "/ariana-grande.png"; // Replace with the correct image path

  return (
    <div className="w-full">
      <div className="p-4 flex flex-row items-center justify-between">
        <button
          onClick={() => navigate("/courses")}
          className="px-4 py-3 rounded-xl border border-blue"
        >
          <PiArrowLeft className="text-xl text-sm text-blue inline-block mr-1" />
          Back
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-3 rounded-xl bg-blue text-white"
        >
          <PiPlusCircle className="text-xl text-sm text-white inline-block mr-1" />
          Add
        </button>
      </div>
      <section className="mt-4 p-4">
        <video src={videoSource} controls className="w-full h-full rounded-xl" />
      </section>

      <section className="m-4 p-4 flex flex-col md:flex-row items-start md:items-center justify-between bg-white">
        <div className="">
          <h2 className="font-bold text-2xl">Learn UI/UX Design (International Standard)</h2>
          <div className="flex flex-row items-center justify-start gap-4 mt-2">
            <img
              src={instructorImage}
              alt="Instructor"
              className="w-12 h-auto rounded-full object-cover"
            />
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold">Emily Lawson</h4>
              <p className="text-xs">UI/UX Professional</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-2 mt-6 md:mt-0">
          <div className="flex flex-row items-center justify-center font-bold">
            <button
              onClick={() => navigate("/courses")}
              className="px-4 py-2 rounded-l-xl border-t border-l border-b border-blue"
            >
              <PiCaretLeft className="text-lg text-blue inline-block mr-2" />
              Previous
            </button>
            <button
              onClick={() => navigate("/courses")}
              className="px-4 py-2 rounded-r-md border border-blue"
            >
              Next
              <PiCaretRight className="text-lg text-blue inline-block ml-2" />
            </button>
          </div>
          <button
            onClick={() => navigate("#")}
            className="p-2 rounded-md border border-blue"
          >
            <PiListBullets className="text-lg text-blue" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default VideoPlayer;