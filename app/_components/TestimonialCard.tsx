import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  review: string;
  photo: StaticImport;
  rating: number; // Note sur 5
}

export default function TestimonialCard({ name, review, photo, rating }: TestimonialCardProps) {
    return (
      <div className="rounded-lg shadow-lg p-6 flex flex-col items-center text-center bg-background">
        {/* Photo */}
        <div className="w-20 h-20 mb-4">
          <Image
            src={photo}
            alt={`Photo de ${name}`}
            placeholder="blur"
            className="rounded-full object-cover"
          />
        </div>
  
        {/* Nom */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold">{name}</h3>
  
        {/* Étoiles */}
        <div className="flex justify-center my-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill={index < rating ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-5 w-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          ))}
        </div>
  
        {/* Avis */}
        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">{review}</p>
      </div>
    );
  }
  