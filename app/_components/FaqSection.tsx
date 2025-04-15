import FaqItem from "./FaqItem";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection() {
    const faqs = [
        {
            question: "Quels sont les prérequis pour suivre une formation ?",
            answer:
                "Aucun prérequis n'est nécessaire. Nos formations sont adaptées aux débutants comme aux professionnels.",
        },
        {
            question: "Combien de temps dure une formation ?",
            answer:
                "La durée varie selon la formation. Par exemple, la formation maquillage dure 3 jours, tandis que la formation ongles dure 5 jours.",
        },
        {
            question: "Est-ce que je reçois un certificat après la formation ?",
            answer:
                "Oui, un certificat est délivré à la fin de chaque formation pour attester de vos compétences.",
        },
        {
            question: "Quels sont les modes de paiement acceptés ?",
            answer:
                "Nous acceptons les paiements par virement bancaire, mobile money, et espèces.",
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-20">
                <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">Question Frequentes</h2>
                </div>
                <div>
                <Accordion type="single" collapsible className="w-full">
    {faqs.map((faq, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 cursor-pointer">
                {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
                {faq.answer}
            </AccordionContent>
        </AccordionItem>
    ))}
</Accordion>

                </div>
            </div>
        </section>
    );
}