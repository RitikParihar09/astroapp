import {
  Home,
  MessageCircle,
  Radio,
  Phone,
  User,
} from "lucide-react";

function Bottomnav() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[430px] bg-white border-t h-16 flex justify-around items-center">

      <Home size={24} className="text-gray-500" />

      <MessageCircle size={24} className="text-gray-500" />

      <Radio size={24} className="text-gray-500" />

      <Phone size={24} className="text-orange-500" />

      <User size={24} className="text-gray-500" />

    </div>
  );
}

export default Bottomnav;