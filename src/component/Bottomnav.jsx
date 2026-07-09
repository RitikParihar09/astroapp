import {
  FaHome,
  FaComments,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

function Bottomnav() {
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[320px] h-[60px] bg-white rounded-full shadow-xl px-5 flex justify-between items-center z-50">

      <div className="flex flex-col items-center text-orange-500">
        <FaHome size={25} />
        <span className="text-[8px] font-semibold mt-[1px]">
          Home
        </span>
      </div>

      <div className="flex flex-col items-center text-gray-500">
        <FaComments size={25} />
        <span className="text-[8px] mt-[1px]">
          Chat
        </span>
      </div>

      <div className="flex flex-col items-center text-gray-500">
        <MdLiveTv size={25} />
        <span className="text-[7px] mt-[1px]">
          LIVE ASTRO
        </span>
      </div>

      <div className="flex flex-col items-center text-gray-500">
        <FaPhoneAlt size={25} />
        <span className="text-[8px] mt-[1px]">
          Call
        </span>
      </div>

      <div className="flex flex-col items-center text-gray-500">
        <FaUser size={25} />
        <span className="text-[8px] mt-[1px]">
          Profile
        </span>
      </div>

    </div>
  );
}

export default Bottomnav;
