import {
  FiHome,
  FiMessageCircle,
  FiPhone,
  FiUser,
} from "react-icons/fi";
import { MdLiveTv } from "react-icons/md";

function Time() {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-50">
      <div className="bg-white rounded-full shadow-2xl py-3 px-5 flex justify-between items-center">

        {/* Home */}
        <div className="flex flex-col items-center text-gray-400 cursor-pointer">
          <FiHome className="text-xl sm:text-2xl" />
          <span className="text-[10px] sm:text-xs mt-1">Home</span>
        </div>

        {/* Chat */}
        <div className="flex flex-col items-center text-gray-400 cursor-pointer">
          <FiMessageCircle className="text-xl sm:text-2xl" />
          <span className="text-[10px] sm:text-xs mt-1">Chat</span>
        </div>

        {/* Live Astro */}
        <div className="flex flex-col items-center text-gray-400 cursor-pointer">
          <MdLiveTv className="text-xl sm:text-2xl" />
          <span className="text-[10px] sm:text-xs mt-1 font-semibold">
            LIVE ASTRO
          </span>
        </div>

        {/* Call */}
        <div className="flex flex-col items-center text-gray-400 cursor-pointer">
          <FiPhone className="text-xl sm:text-2xl" />
          <span className="text-[10px] sm:text-xs mt-1">Call</span>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center text-orange-500 cursor-pointer">
          <FiUser className="text-xl sm:text-2xl" />
          <span className="text-[10px] sm:text-xs mt-1 font-semibold">
            Profile
          </span>
        </div>

      </div>
    </div>
  );
}

export default Time;