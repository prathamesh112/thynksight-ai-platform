import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureLayers from "@/components/FeatureLayers";
import AILogic from "@/components/AILogic";
import ValueProposition from "@/components/ValueProposition";
import StatsSection from "@/components/StatsSection";
import ComplianceCard from "@/components/ComplianceCard";
import CareerCta from "@/components/CareerCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeatureLayers />
      <AILogic />
      <ValueProposition />
      <StatsSection />
      <ComplianceCard />
      <CareerCta />
      <Footer />
    </div>
  );
};

export default Index;
