import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContainerForAll from "./ContainerForAll";
import Cta from "./Cta";

export default function ContactSection() {
    const contactMethods = [
        {
            icon: <FaWhatsapp className=" text-4xl mb-4" />,
            title: "WhatsApp",
            description: "Envoyez-moi un message",
            link: "https://wa.me/659182723",
        },
        {
            icon: <FaPhoneAlt className=" text-4xl mb-4" />,
            title: "Appel",
            description: "Appelez-moi directement",
            link: "tel:+237659182723",
        },
        {
            icon: <FaEnvelope className=" text-4xl mb-4" />,
            title: "Email",
            description: "Envoyez-moi un email",
            link: "mailto:samirphanuel@gmail.com"
        }
    ]
    return (
        <section className="py-20" id="contact">
            <ContainerForAll className="px-4 space-y-6">
                <h3 className="text-center">
                    Contactez-moi
                </h3>
                <p className="">
                    Vous pouvez me contacter via WhatsApp, par téléphone ou par email. Je
                    suis disponible pour répondre à toutes vos questions !
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center bg-background rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            {method.icon}
                            <h4 className="">
                                {method.title}
                            </h4>
                            <p className="text-center">
                                {method.description}
                            </p>
                        </a>
                    ))}
                </div>
            </ContainerForAll>
        </section>
    );
}