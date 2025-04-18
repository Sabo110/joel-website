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
                "Avant, je ne savais même pas me maquiller correctement. Grâce à la formation en maquillage de Charming Make Up, aujourd'hui, je propose mes propres prestations à domicile. Un vrai changement de carrière ! 🥹",
            before: succes1,
            after: succes1,
        },
        {
            name: "Fatou",
            description:
                "Grâce à la formation maquillage personnalisée de Charming Make Up, j’ai enfin appris à maquiller mon visage selon ma morphologie. Je me sens tellement plus confiante et épanouie.",
            before: succes2,
            after: succes2,
        },
        {
            name: "Nadia",
            description:
                "Je ne pensais pas que le maquillage pouvait transformer autant mon image de soi. Merci Joelle et l'atelier Charming Make Up pour cette véritable révélation 💖.",
            before: succes1,
            after: succes1,
        },
        {
            name: "Mariam",
            description:
                "De débutante totale à maquilleuse freelance en quelques mois grâce à Charming Make Up. Une formation complète qui m’a permis de renaître professionnellement ✨.",
            before: succes2,
            after: succes2,
        },
    ];
    return (
        <section className="py-20">
            <ContainerForAll className='px-4 space-y-6'>
                <h3 className="text-center">Success Stories</h3>
                <p className="">
                    Découvrez les incroyables transformations de mes élèves et clientes ✨
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {stories.map((story, i) => (
                        <div
                            key={i}
                            className="border border-secomdary p-6 shadow-2xl space-y-4 text-left"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className=" text-gray-500">Avant</p>
                                    <Image
                                        src={story.before}
                                        alt={`Avant ${story.name}`}
                                        placeholder='blur'
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className=" text-gray-500 ">Après</p>
                                    <Image
                                        src={story.after}
                                        alt={`Après ${story.name}`}
                                        placeholder='blur'
                                        className=" object-cover"
                                    />
                                </div>
                            </div>
                            <p className="font-semibold">{story.name}</p>
                            <p className="  italic">"{story.description}"</p>
                        </div>
                    ))}
                </div>
            </ContainerForAll>
        </section>
    )
}
