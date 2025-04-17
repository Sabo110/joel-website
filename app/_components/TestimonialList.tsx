import React from 'react'
import TestimonialCard from './TestimonialCard'
import Slide from './Slide';

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
    
    return (
        <>
            <div className="lg:grid lg:grid-cols-3 gap-8 hidden">
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
        </>
    )
}
