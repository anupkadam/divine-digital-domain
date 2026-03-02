import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AcademicSection from "@/components/AcademicSection";
import AstrologySection from "@/components/AstrologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// GitHub sync - March 2, 2026
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AcademicSection />
      <AstrologySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
