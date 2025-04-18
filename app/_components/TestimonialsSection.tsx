import ContainerForAll from "./ContainerForAll";
import TestimonialList from "./TestimonialList";

export default function TestimonialsSection() {

  return (
    <section className=" lg:pb-16 lg:pt-20 lg:min-h-screen min-h-[550px] flex items-center bg-secondary">
      <ContainerForAll className="px-4 space-y-6">
        <h3 className="text-center">
          Témoignages Clients
        </h3>
        <TestimonialList />
      </ContainerForAll>
    </section>
  );
}