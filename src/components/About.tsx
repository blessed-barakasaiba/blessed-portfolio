const About = () => {
    return (
        <section id='about' className=" min-h-screen px-6 md:px-16 flex justify-center items-center">

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

                <div className="grid grid-cols-2 gap-6 border border-gray-200 p-6">
                    <div className="p-2 md:p-6 bg-gray-300 rounded-md">
                        <h2>Award</h2>
                        <p>6</p>
                    </div>
                    <div>
                        <h2>Experience</h2>
                        <p>3+ Years</p>
                    </div>
                    <div>
                        <h2>Award</h2>
                        <p>6</p>
                    </div>
                    <div>
                        <h2>Experience</h2>
                        <p>3+ Years</p>
                    </div>
                   
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