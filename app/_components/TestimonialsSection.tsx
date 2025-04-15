import TestimonialCard from "./TestimonialCard";
import testimonialone from "@/public/testimonial-one.png";
import testimonialtwo from "@/public/testimonial-two.png";
import testimonialthree from "@/public/testimonial-three.png";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Dupont",
      review: "Une expérience incroyable ! Joelle est une formatrice exceptionnelle.",
      photo: testimonialone,
      rating: 5,
    },
    {
      name: "Marc Lefevre",
      review: "Les formations sont très complètes et bien expliquées. Merci Joelle !",
      photo: testimonialtwo,
      rating: 4,
    },
    {
      name: "Claire Moreau",
      review: "J'ai beaucoup appris et je recommande vivement ses formations.",
      photo: testimonialthree,
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary" id="testimonials">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">
          Témoignages Clients
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              review={testimonial.review}
              photo={testimonial.photo}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}