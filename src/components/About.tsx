import hero from '../assets/images/hero.png';
const About = () => {
    return (
        <section id='about' className=" min-h-screen py-20 px-6 md:px-16  text-gray-800 bg-white flex justify-center items-center">

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

                <div>
                    <img src={hero} alt="" className='w-full mt-10 md:mt-0 rounded-2xl ' />
                </div>

                <div className='text-center md:text-left '>
                    <h2 className='text-xl'>About <span className='text-2xl font-semibold'>Baraka saiba mwamakamba</span></h2>
                    <p>Expert in Full Stack Developer</p>
                    <p className='text-lg text-gray-600 mb-6'>
                        My mission is to connect all people with technology seamlessly, providing an effortless experience that brings your home to life.
                    </p>

                    <button className='px-4 py-2 bg-yellow-400 font-semibold rounded-md shadow-sm hover:bg-yellow-300 transition-all'>Learn More</button>
                </div>

            </div>

        </section>
    )
}

export default About;