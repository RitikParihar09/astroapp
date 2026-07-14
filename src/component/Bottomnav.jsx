import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaComments,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

function Bottomnav() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-3 pb-2 z-50">
      <div className="bg-white h-[82px] rounded-full shadow-2xl flex justify-around items-center">

        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex flex-col items-center flex-1 ${
              isActive ? "text-orange-500" : "text-[#8E90A6]"
            }`
          }
        >
          <FaHome size={22} />
          <span className="text-[11px] mt-1">Home</span>
        </NavLink>

        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `flex flex-col items-center flex-1 ${
              isActive ? "text-orange-500" : "text-[#8E90A6]"
            }`
          }
        >
          <FaComments size={22} />
          <span className="text-[11px] mt-1">Chat</span>
        </NavLink>

        <NavLink
          to="/liveastro"
          className={({ isActive }) =>
            `flex flex-col items-center flex-1 ${
              isActive ? "text-orange-500" : "text-[#8E90A6]"
            }`
          }
        >
          <MdLiveTv size={22} />
          <span className="text-[10px] mt-1">LIVE ASTRO</span>
        </NavLink>

        <NavLink
          to="/call"
          className={({ isActive }) =>
            `flex flex-col items-center flex-1 ${
              isActive ? "text-orange-500" : "text-[#8E90A6]"
            }`
          }
        >
          <FaPhoneAlt size={22} />
          <span className="text-[11px] mt-1">Call</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center flex-1 ${
              isActive ? "text-orange-500" : "text-[#8E90A6]"
            }`
          }
        >
          <FaUser size={22} />
          <span className="text-[11px] mt-1">Profile</span>
        </NavLink>

      </div>
    </div>
  );
}

export default Bottomnav;