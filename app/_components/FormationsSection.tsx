import ContainerForAll from "./ContainerForAll";
import FormationList from "./FormationList";

export default function FormationsSection() {


  return (
    <section className="pb-16 pt-8 lg:pt-20 min-h-screen flex items-center bg-secondary">
      <ContainerForAll className="px-4 space-y-6">
        <h3 className="text-center">
          Nos formations
        </h3>
        <FormationList />
        </ContainerForAll>
    </section>
  );
}