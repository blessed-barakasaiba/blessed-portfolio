import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/hero.png";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items = [
    { link: "/home", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/features", name: "Features" },
    { link: "/skills", name: "Skill" },
];


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement>(null);

    {/* close menu when route change */}
    useEffect(()=>{
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(()=>{
        const handleClickOutside = (event: MouseEvent)=>{
            if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);




    return (
        <section>

            <div className="py-2 flex items-center justify-between px-6 md:px-16 bg-white text-gray-800 fixed w-full z-50 border-b border-gray-300">

                {/* Logo menu items */}
                <div className="w-10 h-10 rounded-md">
                    <img src={logo} alt="" className="rounded-md object-cover" />
                </div>

                {/* DeskTop menu items */}
                <div className="hidden md:block">
                    <div className="flex gap-3 items-center justify-center">
                        {items.map((item) => (
                            <div key={item.link} className="">
                                <Link to={item.link} className="hover:underline hover:text-yellow-700">{item.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* mobile menu items */}
                <div className="block md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* mobile menu items dropdown*/}
                {menuOpen && (
                    <div ref={menuRef} className="absolute top-16 bg-white w-full flex flex-col items-center space-y-4 py-4 shadow-md md:hidden">
                        {items.map((item)=>(
                            <div key={item.link}>
                                <Link to={item.link}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                )}


            </div>

        </section>
    )
}

export default Navbar