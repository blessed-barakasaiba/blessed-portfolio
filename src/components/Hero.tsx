import hero from '../assets/images/hero.png';


const skills = [
    { id: 1, name: "Frontend" },
    { id: 2, name: "Backend" },
    { id: 3, name: "UX/UI designer" },

];

const Hero = () => {
    return (
        <section id='home' className='min-h-screen relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white text-gray-800'>

            <div className='max-w-lg text-center md:text-left'>
                <h2 className='text-4xl  md:text-6xl mb-4'>
                    I&apos;m <span className="font-bold text-blue-700">Baraka Saiba</span>
                </h2>
                {skills.map((skill) => (
                    <div key={skill.id} className='space-y-1 mb-4' >
                        <p className='text-gray-600'>{skill.name}</p>
                    </div>
                ))}
                <button className='px-4 py-2 mt-3 bg-yellow-400 text-blue-800 rounded-md overflow-hidden font-semibold shadow-md hover:bg-yellow-300 transition-all'>Get Started</button>
            </div>

            <div className='flex items-center justify-center mt-10 md:mt-0'>
                <div className='w-50 h-50 md:h-72 md:w-72 rounded-full border border-gradient from-yellow-300 to-blue-500'>
                    <img src={hero} alt="" className='w-full object-cover h-full rounded-full border shadow-lg' />
                </div>
            </div>

        </section>
    )
}

export default Hero;