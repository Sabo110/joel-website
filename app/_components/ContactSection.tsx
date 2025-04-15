import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
        <section className="py-20 bg-secondary text-secondary-foreground" id="contact">
            <div className="container mx-auto px-4 lg:px-20 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
    Contactez-moi
</h2>
<p className="mb-8 text-base sm:text-lg md:text-xl lg:text-[1.35rem] xl:text-2xl">
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
            <h3 className="text-base sm:text-lg md:text-xl font-bold">
                {method.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-center">
                {method.description}
            </p>
        </a>
    ))}
</div>

            </div>
        </section>
    );
}