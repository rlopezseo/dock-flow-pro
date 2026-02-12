import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionBridge from "@/components/SolutionBridge";
import FeaturesSection from "@/components/FeaturesSection";
import IndustryTabs from "@/components/IndustryTabs";
import MetricsSection from "@/components/MetricsSection";
import TestimonialSection from "@/components/TestimonialSection";
import HowItWorks from "@/components/HowItWorks";
import ComparisonTable from "@/components/ComparisonTable";
import ObjectionsSection from "@/components/ObjectionsSection";
import FAQSection from "@/components/FAQSection";
import LeadMagnet from "@/components/LeadMagnet";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoBar />
        <ProblemSection />
        <SolutionBridge />
        <FeaturesSection />
        <IndustryTabs />
        <MetricsSection />
        <TestimonialSection />
        <HowItWorks />
        <ComparisonTable />
        <ObjectionsSection />
        <FAQSection />
        <LeadMagnet />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
};

export default Index;
