import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import hero from '../assets/images/hero.png';
import { Link } from 'react-router-dom';


const skills = [
    { id: 1, name: "Frontend" },
    { id: 2, name: "Backend" },
    { id: 3, name: "UX/UI designer" },

];

const Hero = () => {
    return (
        <section id='home' className='min-h-screen flex flex-col justify-center items-center md:items-start px-6 md:px-16 py-20 md:py-24'>

            <div className='flex flex-col md:flex-row w-full justify-between'>
                <div className='max-w-lg text-center md:text-left'>
                    <h2 className='text-4xl  md:text-6xl mb-4'>
                        I&apos;m <span className="font-bold text-blue-700">Baraka Saiba</span>
                    </h2>
                    {skills.map((skill) => (
                        <div key={skill.id} className='space-y-1 mb-4' >
                            <p className='text-gray-600'>{skill.name}</p>
                        </div>
                    ))}
                    <button className=' hidden md:block px-4 py-2 mt-3 bg-yellow-400 text-blue-800 rounded-md overflow-hidden font-semibold shadow-md hover:bg-yellow-300 transition-all'>Get Started</button>
                </div>

                <div className='flex items-center justify-center mt-10 md:mt-0'>
                    <div className='w-48 h-48 md:h-72 md:w-72 rounded-full border border-gradient from-yellow-300 to-blue-500'>
                        <img src={hero} alt="" className='w-full object-cover h-full rounded-full border shadow-lg' />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className='flex items-center space-x-2'>
                    <Link to={"/"} className='p-2 bg-gray-200 rounded-md text-blue-700 hover:bg-gray-300'>
                        <Facebook className='w-8 h-8' />
                    </Link>
                    <Link to={"https://www.linkedin.com/in/baraka-saiba-338b91312/"} className='p-2 bg-gray-200 rounded-md text-blue-700 hover:bg-gray-300'>
                        <Linkedin className='w-8 h-8' />
                    </Link>
                    <Link to={"https://www.instagram.com/barakamwamakamba/?hl=en"} className='p-2 bg-gray-200 rounded-md text-purple-700 hover:bg-gray-300'>
                        <Instagram className='w-8 h-8' />
                    </Link>
                    <Link to={"https://github.com/blessed-barakasaiba"} className='p-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300'>
                        <Github className='w-8 h-8' />
                    </Link>

                </div>
            </div>

            <button className=' block md:hidden px-4 py-2 mt-3 bg-yellow-400 text-blue-800 rounded-md overflow-hidden font-semibold shadow-md hover:bg-yellow-300 transition-all'>Get Started</button>


        </section>
    )
}

export default Hero;