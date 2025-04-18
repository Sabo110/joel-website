import { Button } from "@/components/ui/button";
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
    <div className="space-y-4">
      {/* Image */}
      <div className="relative w-full">
        <Image
          src={imageSrc}
          alt={`Image de ${title}`}
          placeholder="blur"
          className=""
        />
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col justify-between flex-grow">
        <div className="space-y-4">
          <h4 className="uppercase font-semibold">
            {title}
          </h4>
          <p className="">
            {description}
          </p>

          {/* Badge durée */}
          <div className="">
            Durée : {duration}
          </div>

          {/* Prix */}
          <div className="">
            {price} XAF
          </div>
          <div>
            <a href="#contact" className="mb-4 ms-1 bg-background text-secondary-foreground outline-1 outline-primary block w-fit py-2 px-5 text-lg font-semibold text-center">
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>


  );
}