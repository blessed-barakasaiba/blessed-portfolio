const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl text-center mb-16 font-bold
          bg-gradient-to-r from-cyan-400 to-purple-500 
          bg-clip-text text-transparent"
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT – STATS */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Experience", value: "3+ Years" },
              { label: "Projects Completed", value: "20+" },
              { label: "Awards", value: "6" },
              { label: "Technologies", value: "10+" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 text-center shadow-lg 
                hover:scale-105 transition-transform"
              >
                <h3 className="text-3xl font-bold text-cyan-400">
                  {item.value}
                </h3>
                <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT – DESCRIPTION */}
          <div className="text-center md:text-left">
            <h3 className="text-xl mb-2">
              About{" "}
              <span className="text-2xl font-semibold text-cyan-400">
                Baraka Saiba Mwamakamba
              </span>
            </h3>

            <p className="text-lg font-medium text-purple-400 mb-4">
              Full-Stack Developer
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              I am a passionate full-stack developer specializing in building
              scalable web and mobile applications. My mission is to connect
              people with technology seamlessly, delivering intuitive and
              efficient digital solutions that make life easier.
            </p>

            <button
              className="px-6 py-3 rounded-lg font-semibold
              bg-gradient-to-r from-cyan-400 to-purple-500
              text-black hover:opacity-90 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
