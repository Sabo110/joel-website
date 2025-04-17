'use client'

import React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import RealizationCard from './RealizationCard';
import img from "@/public/onglerie-image.jpg"; // Remplacez par le chemin de l'image de la galerie
import img2 from '@/public/makeup-image.jpg'
import img3 from '@/public/cils-image.jpg'


import Slide from './Slide'

export default function RealizationList() {
    const images: {
        img: StaticImport,
        alt: string;
    }[] = [
            { img, alt: "Réalisation maquillage 1" },
            { img: img2, alt: "Réalisation maquillage 2" },
            { img: img3, alt: "Réalisation ongles 1" },
            { img, alt: "Réalisation ongles 2" },
            { img: img2, alt: "Réalisation maquillage 3" },
            { img: img3, alt: "Réalisation ongles 3" },
            { img, alt: "Réalisation ongles 2" },
            { img: img2, alt: "Réalisation maquillage 3" },
            { img: img3, alt: "Réalisation ongles 3" },
            { img, alt: "Réalisation ongles 2" },
            { img: img2, alt: "Réalisation maquillage 3" },
            { img: img3, alt: "Réalisation ongles 3" },
        ];
    return (
        <>
            <div className="lg:grid lg:grid-cols-3 lg:gap-4 hidden">
                {images.map((image, index) => (
                    <RealizationCard
                        key={index}
                        img={image.img}
                        alt={image.alt}
                    />
                ))}
            </div>
            <div className='sm:block lg:hidden hidden'>
                <Slide size='basis-1/2' placeholder='photo'>
                    {images.map((image, index) => (
                        <RealizationCard
                            key={index}
                            img={image.img}
                            alt={image.alt}
                        />
                    ))}
                </Slide>
            </div>
            <div className='sm:hidden block'>
                <Slide placeholder='photo'>
                    {images.map((image, index) => (
                        <RealizationCard
                            key={index}
                            img={image.img}
                            alt={image.alt}
                        />
                    ))}
                </Slide>
            </div>

        </>

    )
}
