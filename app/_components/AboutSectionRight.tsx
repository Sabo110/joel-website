import React from 'react'
import PopoverDemo from './PopoverDemo';
import { truncateText } from '@/lib/text';
import student from '@/public/students.png'; // Remplacez par le chemin de l'image de la section "À propos"
import formation from '@/public/formation.png'; // Remplacez par le chemin de l'image de la section "À propos"
import certification from '@/public/certification.png'; // Remplacez par le chemin de l'image de la section "À propos"
import experience from '@/public/experience.png'; // Remplacez par le chemin de l'image de la section "À propos"
import Image from 'next/image';


export default function AboutSectionRight() {
    const aboutText = `Passionnée par l'art du maquillage depuis plus de 10 ans, je partage mon expertise à travers des formations personnalisées. 
    Mon objectif est de vous aider à développer vos compétences et à réaliser vos rêves dans l'industrie de la beauté.`;
    const options = [
        {
            icon: student,
            text: '500+ Élèves Formés'
        },
        {
            icon: formation,
            text: 'Formations Personnalisées'
        },
        {
            icon: certification,
            text: 'Certificat de Fin de Formation'
        },
        {
            icon: experience,
            text: '10+ Années d\'Expérience'
        }
    ]
    return (
        <div className='lg:w-1/2 space-y-6'>
            <h2 className='text-center lg:text-start'>À Propos de Charming Make up</h2>
            {
                aboutText.length <= 200 ? (
                    <p className=''>
                        {aboutText}
                    </p>) : (
                    <p className=''>
                        <span className=''>{truncateText(aboutText, 200)}</span> <PopoverDemo trigger={<span className=' underline underline-offset-4'>lire plus</span>}> {aboutText} </PopoverDemo>
                    </p>
                )

            }
            <div className='grid gap-6 sm:grid-cols-2'>
                {
                    options.map((option, index) => (
                        <div className='flex items-center gap-4' key={index}>
                            <Image
                                src={option.icon}
                                alt="Icone de la section à propos de Charming Makeup"
                                className=""
                                placeholder='blur'
                            />
                            <p className=''>
                                {option.text}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
