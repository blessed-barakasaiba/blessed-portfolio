import { useLocation } from "react-router-dom";
import logo from "../assets/images/hero.png";
import { ArrowBigDown, ArrowDown, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const items = [
    { link: "#home", name: "Home" },
    { link: "#about", name: "About" },
    { link: "#features", name: "Features" },
    { link: "#skills", name: "Skill" },
    { id: 5, link: "#contacts", name: "Contact" },
];

const more = [
    {link: "#history", name:"History"},
]


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement>(null);
    const { dark, setDark } = useTheme();
    const [moreOpen, setMoreOpen] = useState(false);

    {/* close menu when route change */ }
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);




    return (
        <section>

            <div className="py-2 flex items-center justify-between px-8 md:px-16  fixed w-full border-b border-gray-300 z-50 bg-white backdrop:blur-md">

                {/* Logo menu items */}
                <div className="flex items-center">
                    <a href="#home" className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full  overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                            <img src={logo} alt="" className="rounded-full height-full object-cover mr-3" />

                        </div>
                        <span className="font-bold text-lg hidden sm:inline-block">Baraka <span className="text-yellow-600">.</span>
                        </span>
                    </a>
                </div>

                {/* DeskTop menu items */}
                <div className="hidden md:flex items-center space-x-1">
                    <div className="flex gap-3 items-center justify-center">
                        {items.map((item) => (
                            <div key={item.link} className="">
                                <a href={item.link} onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-600 hover:dark:text-yellow-400 hover:bg-gray-100 hover:dark:bg-gray-800 transition-all duration-200  ">{item.name}</a>
                            </div>
                        ))}

                    </div>
                    <div className="flex items-center space-x-0">
                        <button onClick={()=>setMoreOpen(!moreOpen)} className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-600 hover:dark:text-yellow-400 hover:bg-gray-100 hover:dark:bg-gray-800 transition-all duration-200">More </button>
                        <ArrowDown className="hover:cursor-pointer" /> 
                    </div>
                </div>

                <div className="flex space-x-4 items-center">
                    <div className="flex items-center space-x-4">
                        <button onClick={() => setDark(!dark)} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
                            {dark ? <Sun /> : <Moon />}
                        </button>
                        <a href="" className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700  transition-all duration-300 shadow-md ">Download CV</a>
                    </div>

                    {/* mobile menu items */}
                    <div className="block md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* mobile menu items dropdown*/}
                {menuOpen && (
                    <div ref={menuRef} className={`absolute top-16 bg-white w-full flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out overflow-hidden shadow-md md:hidden ${menuOpen ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
                        {items.map((item) => (
                            <div key={item.link} className="">
                                <a href={item.link} onClick={() => setMenuOpen(false)} className="py-2 text-gray-700 hover:text-yellow-700 transition-all">{item.name}</a>
                            </div>
                        ))}
                    </div>
                )}

                {moreOpen && (
                    <div className={`absolute top-16 bg-white w-full flex `}>
                        {more.map((item)=>(
                            <div>
                                <a href={item.link} onClick={()=> setMoreOpen(false)} className="py-2 text-gray-700 "></a>
                            </div>
                        ))}

                    </div>
                )}

            </div>

        </section>
    )
}

export default Navbar