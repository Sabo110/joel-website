// Importation des composants nécessaires
import AboutSection from "./_components/AboutSection";
import ContactSection from "./_components/ContactSection";
import FaqSection from "./_components/FaqSection";
import Footer from "./_components/Footer";
import FormationsSection from "./_components/FormationsSection";
import Portfolio from "./_components/Portfolio";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import TestimonialsSection from "./_components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <FormationsSection />
      <Portfolio />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}
