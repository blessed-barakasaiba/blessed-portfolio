import { useLocation } from "react-router-dom";
import logo from "../assets/images/hero.png";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const items = [
    { link: "#home", name: "Home" },
    { link: "#about", name: "About" },
    { link: "#features", name: "Features" },
    { link: "#skills", name: "Skill" },
];


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement>(null);
    const { dark, setDark } = useTheme();

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

            <div className="py-2 flex items-center justify-between px-8 md:px-16  fixed w-full border-b border-gray-300 z-50 backdrop-blur-50/20">

                {/* Logo menu items */}
                <div className="w-10 h-10 rounded-md flex justify-center items-center">
                    <img src={logo} alt="" className="rounded-full object-cover" />
                </div>

                {/* DeskTop menu items */}
                <div className="hidden md:block">
                    <div className="flex gap-3 items-center justify-center">
                        {items.map((item) => (
                            <div key={item.link} className="">
                                <a href={item.link} onClick={() => setMenuOpen(false)} className="hover:underline hover:text-yellow-700">{item.name}</a>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="flex space-x-4 items-center">
                    <div>
                        <button onClick={() => setDark(!dark)}>
                            {dark ? <Sun /> : <Moon />}
                        </button>
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

            </div>

        </section>
    )
}

export default Navbar