import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import LogosSection from "@/components/LogosSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainSection />
        <FeaturesSection />
        <StatsSection />
        <LogosSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
