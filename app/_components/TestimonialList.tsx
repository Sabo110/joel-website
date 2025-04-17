import React from 'react'
import TestimonialCard from './TestimonialCard'
import Slide from './Slide';
import Image from 'next/image';
import succes1 from '@/public/testimonial-one.png'
import succes2 from '@/public/testimonial-three.png'

export default function TestimonialList() {
    const testimonials = [
        {
            name: "Sarah Dupont",
            review: "Une expérience incroyable ! Joelle est une formatrice exceptionnelle.",
            rating: 5,
            time: "il y' a 3 mois",
        },
        {
            name: "Marc Lefevre",
            review: "Les formations sont très complètes et bien expliquées. Merci Joelle !",
            rating: 4,
            time: "il y' a 6 mois"
        },
        {
            name: "Claire Moreau",
            review: "J'ai beaucoup appris et je recommande vivement ses formations.",
            rating: 5,
            time: "il y'a 8 mois"
        },
        {
            name: "Inès Diallo",
            review: "Joelle a complètement changé ma façon de me maquiller. Aujourd'hui je me sens belle et confiante !",
            rating: 5,
            time: "il y'a 1 mois"
        },
        {
            name: "Léa Martin",
            review: "Une formation très pro, accessible même pour les débutantes comme moi. Je recommande sans hésiter.",
            rating: 4,
            time: "il y'a 2 mois"
        },
        {
            name: "Sophie Bernard",
            review: "Joelle est à l’écoute, bienveillante et passionnée. J’ai adoré chaque module !",
            rating: 4,
            time: "il y'a 5 mois"
        }

    ];
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
        <>
            <div className="lg:grid lg:grid-cols-3 gap-4 hidden">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        name={testimonial.name}
                        review={testimonial.review}
                        rating={testimonial.rating}
                        time={testimonial.time}
                    />
                ))}
            </div>
            <div className='hidden sm:block lg:hidden'>
                <Slide size='basis-[60%]'>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            review={testimonial.review}
                            rating={testimonial.rating}
                            time={testimonial.time}
                        />
                    ))}
                </Slide>
            </div>
            <div className='sm:hidden'>
                <Slide placeholder='avis'>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            review={testimonial.review}
                            rating={testimonial.rating}
                            time={testimonial.time}
                        />
                    ))}
                </Slide>
            </div>
            <section className="mt-24">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
                    <p className="text-gray-600 mb-10">
                        Découvrez les incroyables transformations de mes élèves et clientes ✨
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        {stories.map((story, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow-md space-y-4 text-left"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Avant</p>
                                        <Image
                                            src={story.before}
                                            alt={`Avant ${story.name}`}
                                            
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Après</p>
                                        <Image
                                            src={story.after}
                                            alt={`Après ${story.name}`}
                                            
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                </div>
                                <p className="font-semibold">{story.name}</p>
                                <p className="text-sm text-gray-700 italic">"{story.description}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
