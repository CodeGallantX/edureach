import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player';
import {
  PiArrowLeft,
  PiPlusCircle,
  PiCaretLeft,
  PiCaretRight,
  PiDotsThreeVertical,
  PiPause,
  PiPlay,
  // PiVolumeHigh,
  // PiVolumeX
} from "react-icons/pi";
import BtnComp from "../BtnComp";

const VideoPlayer = () => {
  const navigate = useNavigate();
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Video data - replace with your actual data
  const videoData = {
    title: "Learn UI/UX Design",
    instructor: {
      name: "Bobby Michael",
      role: "UI/UX Professional",
      image: "https://yt3.googleusercontent.com/sIkwkO7wfyO9uVAzMymeZGgkIU04uy3odDor8Yybc6vK4d4QDG629QtKMbNyYu8XK_X40M2w=s160-c-k-c0x00ffffff-no-rj"
    },
    videoUrl: "/videos/Using-Figma-as-aUI-UX-designer.mp4" // Replace with your video URL
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    setProgress(state.played);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <BtnComp />
      
      {/* Video Player Section */}
      <section className="mt-4 bg-black rounded-xl overflow-hidden relative group p-4">
        <ReactPlayer
          ref={playerRef}
          url={videoData.videoUrl}
          width="100%"
          height="100%"
          playing={playing}
          volume={volume}
          muted={muted}
          onProgress={handleProgress}
          onDuration={handleDuration}
          controls={false}
        />
        
        {/* Custom Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handlePlayPause}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {playing ? <PiPause size={24} /> : <PiPlay size={24} />}
            </button>
            
            <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500" 
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            
            <div className="text-white text-sm">
              {formatTime(progress * duration)} / {formatTime(duration)}
            </div>
            
            <button 
              onClick={() => setMuted(!muted)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {/* {muted ? <PiVolumeX size={24} /> : <PiVolumeHigh size={24} />} */}
            </button>
            
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 accent-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Video Info Section */}
      <section className="mt-6 p-6 bg-white rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {videoData.title}
            </h2>
            
            <div className="flex items-center gap-3">
              <img
                src={videoData.instructor.image}
                alt={videoData.instructor.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  {videoData.instructor.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {videoData.instructor.role}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 flex items-center gap-2 text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <PiCaretLeft />
                <span>Previous</span>
              </button>
              
              <div className="border-l border-gray-200" />
              
              <button
                onClick={() => navigate("/next-lesson")} // Update with your next lesson path
                className="px-4 py-2 flex items-center gap-2 text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <span>Next</span>
                <PiCaretRight />
              </button>
            </div>
            
            <button
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="More options"
            >
              <PiDotsThreeVertical size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoPlayer;