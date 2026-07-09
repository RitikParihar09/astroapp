import { FaSearch, FaMicrophone } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="px-5 mt-2">
      <div className="bg-white h-12 rounded-full shadow-md flex items-center px-4">

        <FaSearch className="text-gray-400 text-lg" />

        <input
          type="text"
          placeholder='Search for "Astrologer"'
          className="flex-1 px-3 text-[16px] outline-none bg-transparent text-gray-600 placeholder:text-gray-400"
        />

        <FaMicrophone className="text-orange-500 text-lg" />

      </div>
    </div>
  );
}

export default SearchBar;