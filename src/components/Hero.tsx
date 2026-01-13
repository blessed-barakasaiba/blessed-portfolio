import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import hero from "../assets/images/hero.png";
import { useEffect, useState } from "react";

const skills = [
  { id: 1, name: "Frontend Developer" },
  { id: 2, name: "Backend Developer" },
  { id: 3, name: "UI/UX Designer" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = skills[index].name;
    let timeout;

    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, display.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
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
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-4 md:px-16 py-12"
    >
      {/* Top Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        {/* Text Section */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Baraka Saiba
            </span>
          </h2>

          <p className="mt-4 text-xl h-10 flex justify-center md:justify-start items-center">
            <span className="inline-block overflow-hidden min-w-[260px] text-left">
              Expert in {display}
            </span>
            <span className="border-r-2 border-cyan-400 ml-1 animate-pulse" />
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg font-semibold shadow text-white bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300"
            >
              Get Started
            </button>

            <a
              href="/pdf/barakacv.pdf"
              download="barakacv.pdf"
              className="px-6 py-3 rounded-lg font-semibold shadow text-white bg-gradient-to-r from-green-700 to-green-500 hover:from-green-500 hover:to-green-700 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center w-48 h-48 md:w-72 md:h-72">
          {/* Rotating gradient ring */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin-slow blur-lg opacity-50"></div>
          <div className="w-full h-full rounded-3xl overflow-hidden p-1 relative z-10">
            <img
              src={hero}
              alt="Baraka Saiba"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-12 flex justify-center md:justify-start space-x-4">
        <a
          href="#"
          aria-label="Facebook"
          className="p-3 bg-gray-100 rounded-md text-blue-700 hover:bg-blue-100 transition"
        >
          <Facebook />
        </a>
        <a
          href="https://www.linkedin.com/in/baraka-saiba-338b91312/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-3 bg-gray-100 rounded-md text-blue-800 hover:bg-blue-100 transition"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.instagram.com/barakamwamakamba/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="p-3 bg-gray-100 rounded-md text-purple-700 hover:bg-purple-100 transition"
        >
          <Instagram />
        </a>
        <a
          href="https://github.com/blessed-barakasaiba"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-3 bg-gray-100 rounded-md text-gray-800 hover:bg-gray-200 transition"
        >
          <Github />
        </a>
      </div>
    </section>
  );
};

export default Hero;
