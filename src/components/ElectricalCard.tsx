// ElectricalCard.jsx - Improved version
const ElectricalCard = ({ color }) => {
  // Define color mappings for Tailwind classes
  const colorClasses = {
    cyan: {
      border: 'border-cyan-400',
      shadow: 'shadow-cyan-500/50',
      text: 'text-cyan-400',
      glow: 'from-cyan-400 to-blue-500'
    },
    orange: {
      border: 'border-orange-400',
      shadow: 'shadow-orange-500/50',
      text: 'text-orange-400',
      glow: 'from-orange-400 to-red-500'
    },
    purple: {
      border: 'border-purple-400',
      shadow: 'shadow-purple-500/50',
      text: 'text-purple-400',
      glow: 'from-purple-400 to-pink-500'
    },
    green: {
      border: 'border-green-400',
      shadow: 'shadow-green-500/50',
      text: 'text-green-400',
      glow: 'from-green-400 to-emerald-500'
    }
  };

  const currentColor = colorClasses[color] || colorClasses.cyan;

  return (
    <div className="relative group" >
      {/* Electric Border Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${currentColor.glow} rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}></div>
      
      {/* Main Card */}
      <div className={`relative w-80 p-6 rounded-2xl bg-black text-white border-2 ${currentColor.border} animate-electric transition-all duration-500 group-hover:scale-[1.02]`}>
        <span className={`text-xs uppercase tracking-wider opacity-80 ${currentColor.text}`}>
          codewith_blessed
        </span>
        <h1 className="text-3xl font-bold mt-6">Electric Border</h1>
        <p className="mt-4 text-gray-300">
          In case you like to emphasize something dramatically
        </p>
        
        {/* Optional: Add an animated underline */}
        <div className="mt-6 relative">
          <div className={`absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r ${currentColor.glow} rounded-full animate-pulse`}></div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalCard;