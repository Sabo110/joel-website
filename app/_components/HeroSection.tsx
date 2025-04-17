import ContainerForAll from "./ContainerForAll";

export default function HeroSection() {
  return (
    <section className="relative xl:h-[700px] lg:h-[600px] md:h-[500px] h-[480px] bg-[url('/hero2.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-50"></div>
      <ContainerForAll className="h-full flex flex-col justify-end pb-8 px-4 relative">
        <div className="space-y-4 text-secondary">
          <h1 className="hero-title">
            Devenez une maquilleuse <br /> professionnelle
          </h1>
          <p className="hero-text">Formation personnalisée par une experte en maquillage.</p>
          <a href="#contact" className="cta">Réserver une formation</a>
        </div>
      </ContainerForAll>
    </section>

  );
}