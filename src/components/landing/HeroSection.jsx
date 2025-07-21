import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Wand2 } from "lucide-react";
import bg from "@/assets/bg.jpg";

const MagicalParticle = ({ delay }) => (
  <div 
    className="absolute animate-sparkle"
    style={{ 
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }}
  >
    <Star className="w-2 h-2 text-primary fill-yellow-300" />
  </div>
);

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Floating Magical Elements */}
      {Array.from({ length: 20 }, (_, i) => (
        <MagicalParticle key={`particle-${i}`} delay={i * 0.3} />
      ))}

      {/* Main Content */}
      <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'animate-magical-fade-in' : 'opacity-0'
      }`}>
        
        {/* Magic Wand Icon */}
        <div className="mb-8 animate-float">
          <Wand2 className="w-16 h-16 text-primary mx-auto drop-shadow-lg" />
        </div>

        {/* Main Title */}
        <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-6 text-magical drop-shadow-2xl">
          Wizarding Auction League
        </h1>

        {/* Subtitle */}
        <p className="font-garamond text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto leading-relaxed">
          Step into the Great Hall of competitive team building, where the greatest wizards gather to bid for magical talent in the most prestigious auction of the wizarding world.
        </p>

        {/* Magical Tagline */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Sparkles className="w-5 h-5 text-accent animate-sparkle" />
          <p className="font-cinzel text-lg text-accent font-medium">
            "Where Magic Meets Strategy"
          </p>
          <Sparkles className="w-5 h-5 text-accent animate-sparkle" />
        </div>

        {/* CTA Button */}
        <Button 
          variant="magical" 
          size="lg" 
          className="text-lg px-12 py-6 h-auto text-shadow-md group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Wand2 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Enter the Auction
            <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </span>
          
          {/* Magical Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
