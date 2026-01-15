import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NewsSection from '@/components/NewsSection';
import AboutSection from '@/components/AboutSection';
import RulesSection from '@/components/RulesSection';
import StaffSection from '@/components/StaffSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <NewsSection />
      <AboutSection />
      <RulesSection />
      <StaffSection />
      <Footer />
    </div>
  );
};

export default Index;
