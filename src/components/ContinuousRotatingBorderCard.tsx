const ContinuousRotatingBorderCard = ({ color = "cyan", skill, description }) => {
  const colorConfig = {
    cyan: "from-cyan-400 via-blue-500 to-cyan-600",
    orange: "from-orange-400 via-red-500 to-orange-600",
    purple: "from-purple-400 via-pink-500 to-purple-600",
    green: "from-green-400 via-emerald-500 to-green-600",
  };

  const gradient = colorConfig[color] || colorConfig.cyan;

  return (
    <div className="relative w-full h-64 rounded-2xl p-[2px] overflow-hidden group">
      {/* Rotating Border */}
      <div className="absolute inset-0">
        <div
          className={`absolute w-[200%] h-[200%] bg-gradient-to-r ${gradient} animate-rotateFull`}
        />
      </div>

      {/* Card Content */}
      <div className="relative w-full h-full bg-black rounded-2xl p-6 flex flex-col">
        <span className="text-xs uppercase tracking-wider text-gray-400">
          Skill
        </span>

        <h2
          className={`text-2xl font-bold mt-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          {skill}
        </h2>

        <p className="mt-4 text-gray-300 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default ContinuousRotatingBorderCard;
