const services = [
  {
    title: "Chat",
    sub: "With Astrology Experts",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "Call",
    sub: "1:1 Personal Guidance",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    title: "Astro Info",
    sub: "Astrology Readings",
    img: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    title: "Pooja",
    sub: "Personalised Pooja",
    img: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

function ServiceGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 px-4 mt-3 mb-16">
      {services.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-[20px] h-[85px] p-3 relative shadow-md"
        >
          {/* Offer Badge */}
          <span className="absolute top-2 right-2 bg-orange-500 text-white text-[8px] px-2 py-[2px] rounded-full font-semibold">
            50% OFF
          </span>

          {/* Title */}
          <h2 className="text-[14px] font-bold text-[#1d2340]">
            {item.title}
          </h2>

          {/* Subtitle */}
          <p className="text-[10px] text-gray-400 mt-1 leading-3 w-[72px]">
            {item.sub}
          </p>

          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="absolute right-3 bottom-2 w-[42px] h-[42px] rounded-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default ServiceGrid;