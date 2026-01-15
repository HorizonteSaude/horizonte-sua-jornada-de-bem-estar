import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import AboutSection from '@/components/AboutSection';
import AuthoritySection from '@/components/AuthoritySection';
import ServicesSection from '@/components/ServicesSection';
import SpecialCTASection from '@/components/SpecialCTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <AboutSection />
        <AuthoritySection />
        <ServicesSection />
        <SpecialCTASection />
        <TestimonialsSection />
        <LocationsSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
