import ContainerForAll from "./ContainerForAll";
import FormationList from "./FormationList";

export default function FormationsSection() {


  return (
    <section className="pb-16 pt-8">
      <ContainerForAll className="px-4 space-y-6">
        <h2 className="text-center">
          Nos formations
        </h2>
        <FormationList />
        </ContainerForAll>
    </section>
  );
}