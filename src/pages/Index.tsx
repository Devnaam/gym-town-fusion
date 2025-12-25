import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesBanner from '@/components/FeaturesBanner';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppSection from '@/components/AppSection';
import PricingSection from '@/components/PricingSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      {/* SEO Meta - handled in index.html */}
      
      <Navbar />
      
      <HeroSection />
      
      <FeaturesBanner />
      
      <WhyChooseSection />
      
      <TestimonialsSection />
      
      <AppSection />
      
      <PricingSection />
      
      <GallerySection />
      
      <Footer />
      
      <WhatsAppButton />
    </main>
  );
};

export default Index;
