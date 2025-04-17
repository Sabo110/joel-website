import TestimonialCard from "./TestimonialCard";
import testimonialone from "@/public/testimonial-one.png";
import testimonialtwo from "@/public/testimonial-two.png";
import testimonialthree from "@/public/testimonial-three.png";
import { time } from "console";
import TestimonialList from "./TestimonialList";

export default function TestimonialsSection() {

  return (
    <section className="py-20 bg-secondary text-secondary-foreground" id="testimonials">
      <div className="container mx-auto px-4 lg:px-5 xl:px-20 2xl:px-40">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          Témoignages Clients
        </h2>
        <TestimonialList />
      </div>
    </section>
  );
}