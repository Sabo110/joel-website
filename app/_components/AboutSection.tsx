import Image from "next/image";
import img from '@/public/about-f.png'; // Remplacez par le chemin de l'image de la section "À propos"
import student from '@/public/students.png'; // Remplacez par le chemin de l'image de la section "À propos"
import formation from '@/public/formation.png'; // Remplacez par le chemin de l'image de la section "À propos"
import certification from '@/public/certification.png'; // Remplacez par le chemin de l'image de la section "À propos"
import experience from '@/public/experience.png'; // Remplacez par le chemin de l'image de la section "À propos"


export default function AboutSection() {
    const options = [
        {
            icon: student,
            text: '500+ Élèves Formés'
        },
        {
            icon: formation,
            text: 'Formations Personnalisées'
        },
        {
            icon: certification,
            text: 'Certificat de Fin de Formation'
        },
        {
            icon: experience,
            text: '10+ Années d\'Expérience'
        }
    ]
    return (
        <section id="about" className="pb-20 pt-10">
            <div className="container mx-auto  flex lg:flex-row flex-col-reverse items-center gap-6 lg:gap-10 px-4">
                <div className=" lg:w-1/2">
                    <Image
                        src={img}
                        placeholder="blur"
                        alt="Image de la section à propos de Charming Makeup"
                        className="ms-auto"
                    />
                </div>
                <div className="lg:w-1/2 space-y-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
                        À Propos de Charming Makeup
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.4rem] xl:text-2xl leading-relaxed">
                        Passionnée par l'art du maquillage depuis plus de 10 ans, je partage mon expertise à travers des formations personnalisées.
                        Mon objectif est de vous aider à développer vos compétences et à réaliser vos rêves dans l'industrie de la beauté.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            options.map((option, index) => (
                                <div className="flex items-center gap-2 mt-4" key={index}>
                                    <Image
                                        src={option.icon}
                                        alt="Icone de la section à propos de Charming Makeup"
                                        className=""
                                    />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600">
                                        {option.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    );
}