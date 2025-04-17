"use client"; // Nécessaire pour utiliser des hooks comme useState et useEffect

import { useState, useEffect } from "react";
import Cta from "./Cta";

export default function Header() {
    const menus = [
        {
            text: 'A propos',
            href: '#about',
        },
        {
            text: 'Formations',
            href: '#formations',
        },
        {
            text: 'Témoignages',
            href: '#testimonials',
        },
        {
            text: 'Contact',
            href: '#contact',
        }
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Détecter le défilement
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 text-background transition-all duration-500 ${isScrolled ? "bg-background text-foreground  shadow-2xl" : ""
                }`}
        >
            <div className="container mx-auto px-6 lg:px-5 flex items-center justify-between sm:h-24 h-20">
                {/* Logo */}
                <div className="text-2xl font-bold ">
                    <a href="#home" className="">
                    Charming Makeup<span className="">.</span>
                    </a>
                </div>



                {/* Bouton CTA */}
                <div className="hidden lg:block"><Cta /></div>

            </div>
            {/* Menu mobile */}
            {isMenuOpen && (
                <div
                    className={`lg:hidden"
                        }`}
                >
                    <nav className="flex flex-col space-y-4 px-6 pt-4 pb-8">
                        {menus.map((menu, index) => (
                            <a
                                key={index}
                                href={menu.href}
                                className="text-base lg:text-lg font-medium link-underline w-fit"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {menu.text}
                            </a>

                        ))}
                        <a
                            href="#contact"
                            className="bg-primary text-primary-foreground py-3 px-6 rounded-lg text-lg font-semibold shadow-lg"
                        >
                            Réserver une formation
                        </a>
                        
                    </nav>
                    
                </div>
            )}
        </header>
    );
}