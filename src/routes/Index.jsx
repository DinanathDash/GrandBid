import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ChooseRoleSection } from "@/components/landing/ChooseRoleSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";

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
