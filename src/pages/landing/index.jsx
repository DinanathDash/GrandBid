import { HeroSection } from "@/pages/landing/HeroSection";
import { HowItWorksSection } from "@/pages/landing/HowItWorksSection";
import { ChooseRoleSection } from "@/pages/landing/ChooseRoleSection";
import { AboutSection } from "@/pages/landing/AboutSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        
        <section id="choose-role">
          <ChooseRoleSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
