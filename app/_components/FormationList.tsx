import React from 'react'
import FormationCard from './FormationCard'
import Slide from './Slide'
import makeup from '@/public/makeup-image.jpg'
import onglerie from '@/public/onglerie-image.jpg'
import cils from '@/public/cils-image.jpg'

export default function FormationList() {
    const formations = [
        {
            title: "Formation maquillage",
            description: "Apprenez les techniques de maquillage professionnel pour sublimer chaque visage.",
            duration: "3 jours",
            price: "30 000XAF",
            whatsappLink: "https://wa.me/1234567890?text=Je%20souhaite%20en%20savoir%20plus%20sur%20la%20formation%20maquillage",
            imageSrc: makeup,
        },
        {
            title: "Formation ongles",
            description: "Maîtrisez l'art de la pose d'ongles en gel et des designs créatifs.",
            duration: "5 jours",
            price: "50 000XAF",
            imageSrc: onglerie,
        },
        {
            title: "Formation extensions de cils",
            description: "Devenez expert(e) en extensions de cils pour un regard captivant.",
            duration: "2 jours",
            price: "25 000XAF",
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
