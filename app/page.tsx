import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import OpenSourceCTA from "@/components/OpenSourceCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />
      <HeroSection />
      <FeatureGrid />
      <HowItWorks />
      <TechStack />
      <OpenSourceCTA />
      <Footer />
    </main>
  );
}

