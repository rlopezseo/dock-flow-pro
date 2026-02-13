import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBarSection from "@/components/TrustBarSection";
import LogoCarouselSection from "@/components/LogoCarouselSection";
import ProblemSection from "@/components/ProblemSection";
import OutcomesSection from "@/components/OutcomesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTABannerSection from "@/components/CTABannerSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import UseCasesSection from "@/components/UseCasesSection";
import ProofSection from "@/components/ProofSection";
import CompareSection from "@/components/CompareSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="light-sections bg-[hsl(0,0%,98%)]">
          <TrustBarSection />
          <ProblemSection />
          <OutcomesSection />
          <LogoCarouselSection />
          <CapabilitiesSection />
          <CTABannerSection />
          <UseCasesSection />
          <HowItWorksSection />
          <ProofSection />
          <CompareSection />
          <FAQSection />
          <CTASection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
