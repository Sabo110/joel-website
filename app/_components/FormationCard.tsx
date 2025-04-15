import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface FormationCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  imageSrc: StaticImport; // Chemin de l'image pour illustrer la formation
}

export default function FormationCard({
  title,
  description,
  duration,
  price,
  imageSrc,
}: FormationCardProps) {
  return (
    <div className="rounded-lg shadow-lg border hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-background ">
      {/* Image */}
      <div className="relative w-full">
        <Image
          src={imageSrc}
          alt={`Image de ${title}`}
          placeholder="blur"
          className="rounded-t-lg"
        />
      </div>

      {/* Contenu principal */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3">
            {title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-4">
            {description}
          </p>

          {/* Badge durée */}
          <div className="inline-block text-xs sm:text-sm md:text-base font-medium py-1 rounded-lg  mb-2">
            Durée : {duration}
          </div>

          {/* Prix */}
          <div className="text-base sm:text-lg md:text-xl font-semibold">
            {price} XAF
          </div>
        </div>
      </div>
    </div>


  );
}