
const RotatingBorderCard = ({ color = "cyan" }) => {
    const colorConfig = {
        cyan: {
            gradient: 'from-cyan-400 to-blue-500',
            shadow: '0 0 20px rgba(0, 255, 255, 0.7)',
            text: 'text-cyan-400'
        },
        orange: {
            gradient: 'from-orange-400 to-red-500',
            shadow: '0 0 20px rgba(255, 165, 0, 0.7)',
            text: 'text-orange-400'
        },
    };

    const config = colorConfig[color] || colorConfig.cyan;


    return (
        <div className="relative w-80 h-64 p-0.5 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            {/* Rotating Border Container */}
            <div className="absolute inset-0">

                {/* Top Border - Left to Right */}
                <div className={`absolute top-0 left-[-100%] w-full h-0.5 bg-gradient-to-r ${config.gradient} animate-rotateTop`} style={{
                    animationDelay: "0s",
                }}></div>

                {/* Right Border - Top to Bottom */}
                <div className={`absolute top-[-100%] right-0 h-full w-0.5 bg-gradient-to-b ${config.gradient} animate-rotateRight`} style={{
                    animationDelay: "0.5s"
                }}></div>

                {/* Bottom Border - Right to Left */}
                <div className={`absolute bottom-0 right-[-100%] h-0.5 w-full bg-gradient-to-l ${config.gradient} animate-rotateBottom`} style={{
                    animationDelay: "1s"
                }}></div>

                {/* Left Border - Bottom to Top */}
                <div className={`absolute bottom-[-100%] left-0 w-0.5 h-full bg-gradient-to-t ${config.gradient} animate-rotateLeft`} style={{
                    animationDelay: "1.5s"
                }}>

                </div>
            </div>
            <div className="relative w-full h-full bg-black rounded-[15px] p-6 flex flex-col">
                <span className={` text-xs uppercase tracking-wider opacity-80 ${config.text}`}>codewith_blessed</span>
                <h1 className="text-3xl font-bold mt-6 bg-white bg-clip-text  text-transparent">Continues Rotating Border</h1>
                <p className="mt-4 text-gray-300 flex-grow">Continues Rotating Electric Border that travel around the world </p>
                <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${config.gradient} animate-pulse`}></div>
                    <span className="text-xs text-gray-400">Border rotating</span>
                </div>
            </div>
        </div>
    );
}

export default RotatingBorderCard