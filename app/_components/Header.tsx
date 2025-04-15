"use client"; // Nécessaire pour utiliser des hooks comme useState et useEffect

import { useState, useEffect } from "react";
import Link from "next/link";

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
            className={`sticky top-0 left-0 w-full z-50 bg-background  ${isScrolled ? " shadow-lg" : ""
                }`}
        >
            <div className="container mx-auto px-6 lg:px-5 flex items-center justify-between h-24">
                {/* Logo */}
                <div className="text-2xl font-bold ">
                    <a href="#home" className="">
                    Charming Makeup<span className="">.</span>
                    </a>
                </div>

                {/* Menu de navigation */}
                <nav className="hidden lg:flex lg:items-center space-x-6 lg:space-x-8">
                    {menus.map((menu, index) => (
                        <a
                            href={menu.href}
                            className="text-base lg:text-lg font-medium link-underline"
                            key={index}
                        >
                            {menu.text}
                        </a>
                    ))}
                </nav>


                {/* Bouton CTA */}
                <div className="hidden lg:block">
                    <a
                        href="#contact"
                        className="bg-primary text-primary-foreground py-3 px-6 rounded-lg text-lg font-semibold shadow-lg"
                    >
                        Réserver une formation
                    </a>

                </div>

                {/* Menu hamburger pour mobile */}
                <button
                    className="lg:hidden focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
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