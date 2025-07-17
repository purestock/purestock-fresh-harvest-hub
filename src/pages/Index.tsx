import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import ServicesSection from '@/components/home/ServicesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
    </div>
  );
};

export default Index;
