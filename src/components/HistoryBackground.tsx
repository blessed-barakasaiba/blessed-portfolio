
const HistoryBackground = () => {
    const histories = [
        {
            year: "2016",
            title: "Joined Uyole Secondary School",
            side: "left"

        },
        {
            year: "2019",
            title: "Completed Secondary School",
            side: "left"

        },
        {

            year: "2020",
            title: "Joined Songea Boys Secondary School",
            side: "right"

        },
        {

            year: "2022",
            title: "Completed Advanced School",
            side: "right"

        },
        {

            year: "2022/6",
            title: "Joined Military Course",
            side: "left"

        },
        {

            year: "2022/9",
            title: "Completed Military Course",
            side: "left"

        },
        {
            year: "2022",
            title: "Joined Mbeya University of Science and Technology in Computer Engineering Program " ,
            side: "right"
        },
        {
            year:"2026",
            title: "Final year in Computer Engineering at MUST",
            side:"right"
        }
    ]
    return (
        <div className="">
            <h3 className="text-4xl md:text-5xl text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-16 font-bold">Historical Background</h3>
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500" />

                {histories.map((history, index) => (
                    <div key={index} className={`relative mb-16 flex ${history.side === "left" ? "justify-start" : "justify-end"}`}>
                        {/* Branch content */}
                        <div className="w-5/12 bg-gray-900 p-6 rounded-xl shadow-lg">
                            <h2 className="text-xl text-cyan-400 font-bold">
                                {history.year}
                            </h2>
                            <p className="text-gray-300 mt-3">{history.title}</p>
                        </div>

                        {/* Branch dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-gray-900"></div>

                    </div>

                ))}
            </div>

        </div>
    )
}

export default HistoryBackground;