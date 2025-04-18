import React from 'react'
import FormationCard from './FormationCard'
import Slide from './Slide'
import makeup from '@/public/makeup-image.jpg'
import onglerie from '@/public/onglerie-image.jpg'
import cils from '@/public/cils-image.jpg'

export default function FormationList() {
    const formations = [
        {
            title: "Formation maquillage professionnelle",
            description: "Apprenez les techniques de maquillage professionnel pour sublimer tous les types de visages. Formation 100 % présentielle à Charming Make Up.",
            duration: "1 mois",
            price: "30 000 XAF",
            whatsappLink: "https://wa.me/1234567890?text=Je%20souhaite%20en%20savoir%20plus%20sur%20la%20formation%20maquillage",
            imageSrc: makeup,
        },
        {
            title: "Formation onglerie",
            description: "Maîtrisez la pose d'ongles en gel, le nail art et les techniques modernes d’onglerie. Formation intensive à Charming Make Up.",
            duration: "1 mois",
            price: "50 000 XAF",
            imageSrc: onglerie,
        }
        ,
        {
            title: "Formation extensions de cils",
            description: "Devenez expert(e) en extensions de cils : méthode cil à cil, volume russe et conseils pros. Formation 100 % pratique à Charming Make Up.",
            duration: "1 mois",
            price: "25 000 XAF",
            imageSrc: cils,
        },
    ];


    return (
        <>

            <div className="lg:grid lg:grid-cols-3 lg:gap-8 hidden">
                {formations.map((formation, index) => (
                    <FormationCard
                        key={index}
                        title={formation.title}
                        description={formation.description}
                        duration={formation.duration}
                        price={formation.price}
                        imageSrc={formation.imageSrc}
                    />
                ))}
            </div>
            <div className='sm:block lg:hidden hidden'>
                <Slide size='basis-1/2' placeholder='formation'>
                    {formations.map((formation, index) => (
                        <FormationCard
                            key={index}
                            title={formation.title}
                            description={formation.description}
                            duration={formation.duration}
                            price={formation.price}
                            imageSrc={formation.imageSrc}
                        />
                    ))}
                </Slide>
            </div>
            <div className='sm:hidden block'>
                <Slide placeholder='formation'>
                    {formations.map((formation, index) => (
                        <FormationCard
                            key={index}
                            title={formation.title}
                            description={formation.description}
                            duration={formation.duration}
                            price={formation.price}
                            imageSrc={formation.imageSrc}
                        />
                    ))}
                </Slide>
            </div>

        </>
    )
}
