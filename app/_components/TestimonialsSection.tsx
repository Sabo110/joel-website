import ContainerForAll from "./ContainerForAll";
import TestimonialList from "./TestimonialList";

export default function TestimonialsSection() {

  return (
    <section className=" pb-16 pt-8">
      <ContainerForAll className="px-4 space-y-6">
        <h2 className="text-center">
          Témoignages Clients
        </h2>
        <TestimonialList />
      </ContainerForAll>
    </section>
  );
}