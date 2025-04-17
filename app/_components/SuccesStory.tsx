import React from 'react'
import Image from 'next/image'
import succes1 from '@/public/testimonial-one.png'
import succes2 from '@/public/testimonial-three.png'
import ContainerForAll from './ContainerForAll';

export default function SuccesStory() {
    const stories = [
        {
            name: "Aïcha",
            description:
                "Avant je ne savais même pas me maquiller correctement. Aujourd’hui, je propose mes propres prestations à domicile 🥹",
            before: succes1,
            after: succes1,
        },
        {
            name: "Fatou",
            description:
                "Grâce à la formation, j’ai enfin appris à me maquiller selon ma morphologie. Je me sens tellement plus confiante.",
            before: succes2,
            after: succes2,
        },
        {
            name: "Nadia",
            description:
                "Je ne pensais pas que le maquillage pouvait changer autant ma manière de me voir. Merci Joelle pour cette révélation 💖",
            before: succes1,
            after: succes1,
        },
        {
            name: "Mariam",
            description:
                "Je suis passée de débutante totale à maquilleuse freelance en quelques mois. Une vraie renaissance ✨",
            before: succes2,
            after: succes2,
        },
    ];
    return (
        <section className=" py-8 bg-secondary">
            <ContainerForAll className='px-4 space-y-6'>
                <h3 className="text-center">Success Stories</h3>
                <p className="">
                    Découvrez les incroyables transformations de mes élèves et clientes ✨
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {stories.map((story, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 shadow-md space-y-4 text-left"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className=" text-gray-500">Avant</p>
                                    <Image
                                        src={story.before}
                                        alt={`Avant ${story.name}`}

                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className=" text-gray-500 ">Après</p>
                                    <Image
                                        src={story.after}
                                        alt={`Après ${story.name}`}

                                        className=" object-cover"
                                    />
                                </div>
                            </div>
                            <p className="font-semibold">{story.name}</p>
                            <p className=" text-gray-700 italic">"{story.description}"</p>
                        </div>
                    ))}
                </div>
            </ContainerForAll>
        </section>
    )
}
