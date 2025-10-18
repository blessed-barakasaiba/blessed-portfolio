import hero from '../assets/images/hero.png';


const skills = [
    {id:1, name:"Frontend"},
    {id:2, name:"Backend"},
    {id:3, name:"UX/UI designer"},
    
];

const Hero = () => {
    return (
        <section className=' relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white text-gray-800'>

                <div className='max-w-lg text-center md:text-left'>
                    <h2 className='text-4xl  md:text-6xl mb-4'>I'am <span className='font-bold'>Baraka saiba</span></h2>
                    {skills.map((skill)=>(
                        <div key={skill.id}>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                    <button className='px-4 py-2 mt-3 bg-yellow-400 text-blue-800 rounded-md font-semibold shadow-md hover:bg-yellow-300 transition-all'>Get Started</button>
                </div>

                <div className='rounded-full'>
                    <img src={hero} alt="" className='w-full md:w-1/2 mt-10 md:mt-0 rounded-full' />
                </div>

        </section>
    )
}

export default Hero;