import { FaFacebook, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 bg-primary text-secondary">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Conteneur principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">

          {/* Réseaux sociaux */}
          <div>
            <p className="text-lg font-bold  mb-4">Réseaux sociaux</p>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://www.facebook.com/CharmingMakeup.Lj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className=""
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className=""
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="mailto:joelle@example.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className=""
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Localisation */}
          <div>
            <p className="text-lg font-bold  mb-4">Localisation</p>
            <div className="flex items-center justify-center md:justify-start gap-2 ">
              <FaMapMarkerAlt className="text-2xl " />
              <p className="text-sm">
                Localisation : <span className=" font-medium">Cameroun, Yaoundé, Nkomkana</span>
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