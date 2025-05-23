import { FaMapMarkerAlt } from "react-icons/fa";
import { contactMethods } from "@/data/contactMethods";

export default function Footer() {
  return (
    <footer className="py-12 bg-primary text-secondary">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Conteneur principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">

          {/* Réseaux sociaux */}
          <div>
            <p className="mb-4">Contactez-moi</p>
            <div className="flex justify-center md:justify-start gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={method.label}
                  className=""
                >
                  {<method.icon className="text-2xl hover:text-secondary transition duration-300" />}
                </a>
              ))}
            </div>
          </div>

          {/* Localisation */}
          <div>
            <p className="mb-4">Localisation</p>
            <div className="flex items-center justify-center md:justify-start gap-2 ">
              <FaMapMarkerAlt className="text-2xl " />
              <p className="text-sm">
                Localisation : <span className="">Cameroun, Yaoundé, Nkomkana</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mentions légales et auteur */}
        <div className="mt-8 text-center text-sm ">
          <span className="">
            Mentions légales
          </span>
          <p className="mt-2">
            Réalisé par <span className=" font-bold">Yoba Sabo</span>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}