import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Wand2 } from "lucide-react";
import bg from "@/assets/bg.jpg";

const MagicalParticle = ({ delay }) => (
  <div 
    className="absolute animate-particle-drift pointer-events-none"
    style={{ 
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${6 + Math.random() * 4}s`
    }}
  >
    <Star className="w-2 h-2 text-amber-400 fill-amber-300 drop-shadow-sm" />
  </div>
);

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="great-hall" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
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
        {/* Main Title */}
        <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-6 text-magical drop-shadow-2xl">
          Wizarding Auction League
        </h1>

        {/* Subtitle */}
        <p className="font-garamond text-xl md:text-2xl text-gray-100 mb-4 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Step into the Great Hall of competitive team building, where the greatest wizards gather to bid for magical talent in the most prestigious auction of the wizarding world.
        </p>

        {/* Magical Tagline */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Sparkles className="w-5 h-5 text-amber-400 animate-sparkle" />
          <p className="font-cinzel text-lg text-amber-300 font-medium drop-shadow-md">
            "Where Magic Meets Strategy"
          </p>
          <Sparkles className="w-5 h-5 text-amber-400 animate-sparkle" />
        </div>

        {/* CTA Button */}
        <Button 
          variant="magical" 
          size="lg" 
          className="text-lg px-12 py-6 h-auto text-shadow-md group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3" onClick={() => { window.location.href = '/pre-signup'; setIsOpen(false); }}>
            <Wand2 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Enter the Auction
            <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </span>
          
          {/* Magical Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-26 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
