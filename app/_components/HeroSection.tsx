import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative max-w-[1920px] lg:h-[600px] md:h-[500px] h-[400px] bg-[url('/hero2.png')] bg-cover bg-center" id="home">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative flex items-center h-full text-white z-20 container mx-auto">
        <div className=" w-[672px] lg:w-[800px] xl:w-[920px] 2xl:w-[1000px] px-6 space-y-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Devenez une maquilleuse professionnelle
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Formation personnalisée par une experte en maquillage.
          </p>

          <a
            href="#contact"
            className="bg-primary text-primary-foreground py-3 px-6 rounded-lg text-lg font-semibold shadow-lg"
          >
            Réserver une formation
          </a>
        </div>
      </div>
    </section>

  );
}