import { useState } from "react";

function CategoryTabs() {
  const tabs = ["All", "Love", "Marriage", "Career"];
  const [active, setActive] = useState("All");

  return (
    <div className="px-4 mt-5">
      <div className="flex gap-3 overflow-x-auto no-scrollbar">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-8 py-3 rounded-xl border text-lg whitespace-nowrap transition-all
              ${
                active === tab
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
          >
            {tab}
          </button>
        ))}

      </div>
    </div>
  );
}

export default CategoryTabs;