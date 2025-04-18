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
            { img, alt: "Pose d’ongles en gel rose nude – Charming Make Up" },
            { img: img2, alt: "Maquillage de soirée éclatant – Réalisation par Charming Make Up" },
            { img: img3, alt: "Extension de cils volume russe – Formation pratique" },
            { img, alt: "Manucure artistique avec effet marbre – Atelier Charming Make Up" },
            { img: img2, alt: "Maquillage naturel pour peau foncée – Look professionnel" },
            { img: img3, alt: "Pose d’extensions de cils cil à cil – Résultat naturel" },
            { img, alt: "Ongles en gel avec strass brillants – Design élégant" },
            { img: img2, alt: "Maquillage nude avec sourcils parfaitement dessinés" },
            { img: img3, alt: "Extension de cils effet œil de biche – Technique maîtrisée" },
            { img, alt: "Pose d’ongles babyboomer – Finition professionnelle" },
            { img: img2, alt: "Maquillage glamour avec lèvres rouges intenses" },
            { img: img3, alt: "Extensions de cils avec volume mixte – Formation Charming Make Up" },
        ];
    return (
        <>
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 hidden">
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
