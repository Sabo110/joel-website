import React from 'react'
import TestimonialCard from './TestimonialCard'
import Slide from './Slide';

export default function TestimonialList() {
    const testimonials = [
        {
          name: "Sarah Dupont",
          review: "Une expérience incroyable ! Joelle est une formatrice en maquillage exceptionnelle qui m'a appris des techniques professionnelles. Les cours sont clairs et adaptés à tous niveaux.",
          rating: 5,
          time: "il y a 3 mois",
        },
        {
          name: "Marc Lefevre",
          review: "Les formations en maquillage de Joelle sont très complètes et bien expliquées. J’ai acquis des compétences pratiques et utiles pour ma carrière. Merci Joelle pour ta pédagogie !",
          rating: 4,
          time: "il y a 6 mois",
        },
        {
          name: "Claire Moreau",
          review: "J'ai beaucoup appris grâce à la formation maquillage de Joelle et je recommande vivement ses formations professionnelles pour tous ceux qui veulent se perfectionner.",
          rating: 5,
          time: "il y a 8 mois",
        },
        {
          name: "Inès Diallo",
          review: "Joelle a complètement changé ma façon de me maquiller. Aujourd'hui je me sens belle, confiante, et je maîtrise des techniques de maquillage pro grâce à sa formation.",
          rating: 5,
          time: "il y a 1 mois",
        },
        {
          name: "Léa Martin",
          review: "Une formation maquillage très professionnelle, accessible même pour les débutantes comme moi. Joelle rend l’apprentissage facile et amusant. Je recommande sans hésiter.",
          rating: 4,
          time: "il y a 2 mois",
        },
        {
          name: "Sophie Bernard",
          review: "Joelle est à l’écoute, bienveillante et passionnée. Chaque module de sa formation maquillage m'a permis d’améliorer ma technique. J’ai adoré chaque session.",
          rating: 4,
          time: "il y a 5 mois",
        },
      ]
      
    return (
        <>
            <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 hidden">
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
