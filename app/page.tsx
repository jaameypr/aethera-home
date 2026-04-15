import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureScroll from "@/components/FeatureScroll";
import DeploySection from "@/components/DeploySection";
import HowItWorks from "@/components/HowItWorks";
import ModuleSystem from "@/components/ModuleSystem";
import TechStack from "@/components/TechStack";
import OpenSourceCTA from "@/components/OpenSourceCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />
      <HeroSection />
      <FeatureScroll />
      <DeploySection />
      <HowItWorks />
      <ModuleSystem />
      <TechStack />
      <OpenSourceCTA />
      <Footer />
    </main>
  );
}

