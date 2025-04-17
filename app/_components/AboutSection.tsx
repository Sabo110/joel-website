import Image from "next/image";
import img from '@/public/about-f.png'; // Remplacez par le chemin de l'image de la section "À propos"
import AboutSectionRight from "./AboutSectionRight";

export default function AboutSection() {
    return (
        <section id="about" className="pb-20 pt-10">
            <div className="container mx-auto  flex lg:flex-row flex-col-reverse gap-6 lg:gap-4 px-4">
                <div className=" lg:w-1/2 border border-black">
                    <Image
                        src={img}
                        placeholder="blur"
                        alt="Image de la section à propos de Charming Makeup"
                        className="sm:mx-auto"
                    />
                </div>
                <AboutSectionRight className="border border-black lg:w-1/2" />
            </div>
            
        </section>
    );
}