import { div } from "motion/react-client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { FaStar, FaCheckCircle, FaGoogle } from "react-icons/fa";
import googleLogo from '@/public/google.svg'
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number; // Note sur 5
  time: string; // Date de l'avis
}

export default function TestimonialCard({ name, review, rating, time }: TestimonialCardProps) {
  // Fonction pour générer une couleur de fond selon l'initiale
  const getBgColorFromInitial = (initial: string) => {
    const colors = {
      A: "bg-red-500",
      B: "bg-blue-500",
      C: "bg-green-500",
      D: "bg-yellow-500",
      E: "bg-purple-500",
      F: "bg-pink-500",
      G: "bg-indigo-500",
      H: "bg-emerald-500",
      I: "bg-orange-500",
      J: "bg-teal-500",
      K: "bg-cyan-500",
      L: "bg-lime-500",
      M: "bg-amber-500",
      N: "bg-rose-500",
      O: "bg-violet-500",
      P: "bg-fuchsia-500",
      Q: "bg-sky-500",
      R: "bg-gray-500",
      S: "bg-zinc-500",
      T: "bg-stone-500",
      U: "bg-neutral-500",
      V: "bg-slate-500",
      W: "bg-blue-600",
      X: "bg-red-600",
      Y: "bg-green-600",
      Z: "bg-yellow-600",
    };

    return colors[initial.toUpperCase() as keyof typeof colors] || "bg-gray-400";
  };
  const initial = name.charAt(0);
  const avatarBg = getBgColorFromInitial(initial);
  return (
    <div className=" rounded-xl shadow-md bg-white p-6 space-y-3 text-gray-800 border border-gray-200 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarFallback className={cn('text-white font-bold', avatarBg)}> {initial} </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold"> {name} </p>
            <p className="text-sm text-gray-500"> {time} </p>
          </div>
        </div>

        {/* Logo Google depuis le dossier public */}
        <Image
          src={googleLogo}
          alt="Logo Google"
          className="w-7 h-7"
        />
      </div>

      {/* Étoiles */}
      <div className="flex gap-1 my-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill={index < rating ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-4 w-4 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
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
      {/* review */}
      <p className="text-sm">
        {review}
      </p>
    </div>
  );
}
