import { Facebook, Github, Instagram, Linkedin} from 'lucide-react';
import hero from '../assets/images/hero.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const skills = [
    { id: 1, name: "Frontend" },
    { id: 2, name: "Backend" },
    { id: 3, name: "UX/UI designer" },

];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [display, setDisplay] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const current = skills[index].name;
        let timeout: ReturnType<typeof setTimeout>;

        if (typing) {
            if (display.length < current.length) {
                timeout = setTimeout(() => {
                    setDisplay(current.slice(0, display.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => {
                    setTyping(false);
                }, 1000);
            }

        } else {
            if (display.length > 0) {
                timeout = setTimeout(() => {
                    setDisplay(current.slice(0, display.length - 1));
                }, 60);
            } else {
                setTyping(true);
                setIndex((prev) => (prev + 1) % skills.length);
            }

        }
        return () => clearTimeout(timeout);
    }, [display, typing, index]);
    return (
        <section id='home' className='min-h-screen flex flex-col justify-center items-center md:items-start px-6 md:px-16 py-20 md:py-24'>

            <div className='flex flex-col md:flex-row w-full justify-between'>
                <div className='max-w-lg text-center md:text-left order-2 md:order-1'>
                    <h2 className='text-4xl  md:text-6xl mb-4'>
                        I&apos;m <span className="font-bold text-blue-700">Baraka Saiba</span>
                    </h2>
                    <p className='mt-4 text-xl h-8 flex items-center justify-center md:justify-start'>
                        <span className='min-w-[120px] text-left'> Expert in {display}</span>
                        <span className='border-r-2 border-blue-700 animate-pulse ml-1'></span>
                    </p>
                    <button className='hidden md:block px-6 py-3 mt-6 bg-yellow-400 text-blue-800 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition-all duration-300'>
                        Get Started
                    </button>
                </div>

                <div className='flex items-center justify-center mt-10 md:mt-0 order-1 md:order-2 mb-8 md:mb-0'>
                    <div className='w-48 h-48 md:h-72 md:w-72 rounded-full border-4  border-white shadow-2xl overflow-hidden'>
                        <img src={hero} alt="" className='w-full object-cover h-full hover:scale-110 transition-transform duration-500' />
                    </div>
                </div>
            </div>

            <div className='mt-8 md:mt-12 order-3'>
                <div className='flex items-center justify-center md:items-start space-x-3'>
                    <Link to={"/"}
                        aria-label="Facebook"
                        rel="noopener noreferrer"
                        className='p-3 bg-gray-100 rounded-md text-blue-700 hover:bg-blue-100'>
                        <Facebook className='w-6 h-6' />
                    </Link>
                    <Link
                        to={"https://www.linkedin.com/in/baraka-saiba-338b91312/"}
                        aria-label='LinkedIn'
                        rel="noopener noreferrer"
                        className='p-3 bg-gray-100 rounded-md text-blue-800 hover:bg-blue-100'>
                        <Linkedin className='w-6 h-6' />
                    </Link>
                    <Link
                        to={"https://www.instagram.com/barakamwamakamba/?hl=en"}
                        aria-label='Instagram'
                        rel="noopener noreferrer"
                        className='p-3 bg-gray-100 rounded-md text-purple-700 hover:bg-purple-100'>
                        <Instagram className='w-6 h-6' />
                    </Link>
                    <Link
                        to={"https://github.com/blessed-barakasaiba"}
                        aria-label='GitHub'
                        target='_blank'
                        rel="noopener noreferrer"
                        className='p-3 bg-gray-100 rounded-md text-gray-800 hover:bg-gray-200'>
                        <Github className='w-6 h-6' />
                    </Link>

                </div>
            </div>

            <button className=' block md:hidden px-4 py-2 mt-3 bg-yellow-400 text-blue-800 rounded-md overflow-hidden font-semibold shadow-md hover:bg-yellow-300 transition-all'>Get Started</button>


        </section>
    )
}

export default Hero;