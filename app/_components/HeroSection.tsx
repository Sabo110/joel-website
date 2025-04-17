import ContainerForAll from "./ContainerForAll";
import Cta from "./Cta";

export default function HeroSection() {
  return (
    <section className="relative lg:h-screen md:h-[700px] h-[100dvh] bg-[url('/hero2.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-45"></div>
      <ContainerForAll className="h-full flex flex-col justify-end pb-8 px-4 relative">
        <div className="space-y-4 text-white">
          <h1 className="">
            Devenez une maquilleuse <br /> professionnelle
          </h1>
          <p className="">Formation personnalisée par une experte en maquillage.</p>
          <Cta />
        </div>
      </ContainerForAll>
    </section>

  );
}