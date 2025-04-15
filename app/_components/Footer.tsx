import { FaFacebook, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Conteneur principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold  mb-4">Navigation</h3>
            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#home" className="">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#about" className=" ">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#formations" className=" ">
                    Formations
                  </a>
                </li>
                <li>
                  <a href="#contact" className=" ">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold  mb-4">Réseaux sociaux</h3>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://www.facebook.com"
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
            <h3 className="text-lg font-bold  mb-4">Localisation</h3>
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
          <a href="#" className="">
            Mentions légales
          </a>
          <p className="mt-2">
            Réalisé par <span className=" font-bold">Yoba Sabo</span>
          </p>
          <p className="mt-2 ">
            © {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}