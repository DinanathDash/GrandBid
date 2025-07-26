import { HeroSection } from "@/pages/landing/HeroSection";
import { HowItWorksSection } from "@/pages/landing/HowItWorksSection";
import { ChooseRoleSection } from "@/pages/landing/ChooseRoleSection";
import { AboutSection } from "@/pages/landing/AboutSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/ui/chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#06131D]">
      <Navigation />

      <main>
        <HeroSection />
        <HowItWorksSection />
        <ChooseRoleSection />
        <AboutSection />
      </main>

      <Footer />
      
      {/* Add Chatbot only on landing page */}
      <Chatbot />
    </div>
  );
};

export default Index;
