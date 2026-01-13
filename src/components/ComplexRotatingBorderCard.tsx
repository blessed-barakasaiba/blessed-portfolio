// Complex Rotating Border with Multiple Lines
const ComplexRotatingBorderCard = ({ color = 'cyan' }) => {
  const colorConfig = {
    cyan: 'from-cyan-400 via-blue-500 to-cyan-400',
    orange: 'from-orange-400 via-red-500 to-orange-400',
    purple: 'from-purple-400 via-pink-500 to-purple-400',
    green: 'from-green-400 via-emerald-500 to-green-400'
  };

  const gradient = colorConfig[color] || colorConfig.cyan;

  return (
    <div className="relative w-80 h-64 rounded-2xl overflow-hidden group">
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20 blur-xl animate-pulse`}></div>
      
      {/* Multiple Rotating Lines */}
      <div className="absolute inset-0">
        {/* Line 1 - Main rotating border */}
        <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${gradient} animate-rotateLine1`}></div>
        
        {/* Line 2 - Offset rotating border */}
        <div className={`absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b ${gradient} animate-rotateLine2`}></div>
        
        {/* Line 3 - Reverse direction */}
        <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-l ${gradient} animate-rotateLine3`}></div>
        
        {/* Line 4 - Completing the square */}
        <div className={`absolute top-0 right-0 w-[1px] h-full bg-gradient-to-t ${gradient} animate-rotateLine4`}></div>
        
        {/* Corners */}
        <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${color === 'cyan' ? 'border-cyan-400' : color === 'orange' ? 'border-orange-400' : color === 'purple' ? 'border-purple-400' : 'border-green-400'} animate-pulse`}></div>
        <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${color === 'cyan' ? 'border-cyan-400' : color === 'orange' ? 'border-orange-400' : color === 'purple' ? 'border-purple-400' : 'border-green-400'} animate-pulse`} style={{animationDelay: '0.5s'}}></div>
        <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${color === 'cyan' ? 'border-cyan-400' : color === 'orange' ? 'border-orange-400' : color === 'purple' ? 'border-purple-400' : 'border-green-400'} animate-pulse`} style={{animationDelay: '1s'}}></div>
        <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${color === 'cyan' ? 'border-cyan-400' : color === 'orange' ? 'border-orange-400' : color === 'purple' ? 'border-purple-400' : 'border-green-400'} animate-pulse`} style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Card Content */}
      <div className="relative w-full h-full bg-black/90 backdrop-blur-sm rounded-2xl p-6 flex flex-col border border-gray-800">
        <span className={`text-xs uppercase tracking-wider ${color === 'cyan' ? 'text-cyan-400' : color === 'orange' ? 'text-orange-400' : color === 'purple' ? 'text-purple-400' : 'text-green-400'}`}>
          codewith_blessed
        </span>
        
        <h1 className="text-3xl font-bold mt-6 text-white">
          Complex Rotation
        </h1>
        
        <p className="mt-4 text-gray-300 flex-grow">
          Multiple lines rotating independently with corner effects
        </p>
        
        <div className="mt-4 flex gap-2">
          <div className={`w-2 h-2 rounded-full ${color === 'cyan' ? 'bg-cyan-400' : color === 'orange' ? 'bg-orange-400' : color === 'purple' ? 'bg-purple-400' : 'bg-green-400'} animate-pulse`}></div>
          <div className={`w-2 h-2 rounded-full ${color === 'cyan' ? 'bg-cyan-400' : color === 'orange' ? 'bg-orange-400' : color === 'purple' ? 'bg-purple-400' : 'bg-green-400'} animate-pulse`} style={{animationDelay: '0.2s'}}></div>
          <div className={`w-2 h-2 rounded-full ${color === 'cyan' ? 'bg-cyan-400' : color === 'orange' ? 'bg-orange-400' : color === 'purple' ? 'bg-purple-400' : 'bg-green-400'} animate-pulse`} style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};