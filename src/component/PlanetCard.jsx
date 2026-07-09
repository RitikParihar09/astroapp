function PlanetCard({
  title,
  description,
  image,
  bgColor,
}) {
  return (
    <div className={`${bgColor} rounded-3xl p-5 relative overflow-hidden h-52`}>

      <img
        src={image}
        alt={title}
        className="absolute top-4 left-4 w-14 h-14 rounded-full object-cover"
      />

      <div className="ml-20">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="text-gray-700 mt-3">
          {description}
        </p>

        <div className="flex justify-end mt-6">
          <button className="font-bold text-xl">
            View &gt;&gt;
          </button>
        </div>

      </div>

    </div>
  );
}

export default PlanetCard;