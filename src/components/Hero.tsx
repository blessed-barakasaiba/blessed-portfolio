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
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  // Typewriter effect
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

  // Handle CV download with proper error handling
  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true);
      setDownloadError("");

      // Method 1: Using fetch with blob (Recommended for hosted PDFs)
      const response = await fetch("/pdf/barakacv.pdf");
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // const blob = await response.blob();
      // const url = window.URL.createObjectURL(blob);
      // const link = document.createElement("a");
      // link.href = url;
      // link.download = "barakasaiba_cv.pdf";
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      // window.URL.revokeObjectURL(url);

      // Alternative Method 2: Direct file access (if PDF is in public folder)
      const link = document.createElement("a");
      link.href = process.env.PUBLIC_URL + "/pdf/barakacv.pdf";
      link.download = "barakasaiba_cv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error("Download failed:", error);
      setDownloadError("Failed to download CV. Please try again or contact me directly.");
      
      // Fallback: Open in new tab if download fails
      window.open("/pdf/barakacv.pdf", "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  // Check if PDF exists on component mount
  useEffect(() => {
    const checkPDF = async () => {
      try {
        const response = await fetch("/pdf/barakacv.pdf", { method: "HEAD" });
        if (!response.ok) {
          console.warn("CV PDF not found at /pdf/barakacv.pdf");
        }
      } catch (error) {
        console.error("Error checking PDF:", error);
      }
    };
    checkPDF();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-4 md:px-16 py-12"
    >
      {/* Error Message */}
      {downloadError && (
        <div className="fixed top-4 right-4 bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-lg z-50 max-w-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{downloadError}</p>
            </div>
          </div>
        </div>
      )}

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

            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="px-6 py-3 rounded-lg font-semibold shadow text-white bg-gradient-to-r from-green-700 to-green-500 hover:from-green-500 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                "Download CV"
              )}
            </button>
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