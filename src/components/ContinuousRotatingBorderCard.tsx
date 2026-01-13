const ContinuousRotatingBorderCard = ({ color = "cyan" }) => {
    const colorConfig = {
        cyan: 'from-cyan-400 via-blue-500 to-cyan-600',
        orange: 'from-orange-400 via-red-500 to-orange-600',
        purple: 'from-purple-400 via-pink-500 to-purple-600',
        green: 'from-green-400 via-emerald-500 to-green-600'
    };

    const gradient = colorConfig[color] || colorConfig.cyan;

    return (
        <div className="relative w-80 h-64 rounded-2xl  p-[2px] overflow-hidden group">
            {/* Continuous Rotating Border */}
            <div className={`absolute inset-0`}>
                <div className={`absolute w-[200%] h-[200%] bg-gradient-to-r ${gradient} animate-rotateFull`}>
                </div>
            </div>
            {/* Card Content */}
            <div className="relative w-full h-full bg-black rounded-2xl p-6 flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-400">codewith_blessed</span>
                <h2 className={`text-3xl font-bold mt-6 bg-gradient-to-r  ${gradient} bg-clip-text text-transparent`}>Continuous Rotation</h2>
                <p className="mt-4 text-gray-300 flex-grow"> A seamless rotating gradient that continuously moves around the border</p>

            </div>
        </div>
    );
}

export default ContinuousRotatingBorderCard;