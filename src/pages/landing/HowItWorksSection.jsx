import { Card } from "@/components/ui/card";
import { GlowingCards, GlowingCard } from "@/components/ui/glowing-cards";
import { Users, Scroll, Coins, Trophy } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Assemble Your House",
    description: "Gather your fellow wizards and form a magical house. Choose your colors, create your legacy, and prepare for the grandest auction in wizarding history.",
    color: "gryffindor",
    glowColor: "#dc2626" // Gryffindor red
  },
  {
    icon: Scroll,
    title: "Study the Roster",
    description: "Examine the magical abilities, special skills, and previous performances of all available wizards. Knowledge is power in the auction halls.",
    color: "ravenclaw",
    glowColor: "#3b82f6" // Ravenclaw blue
  },
  {
    icon: Coins,
    title: "Strategic Bidding",
    description: "Use your galleons wisely! Outbid rival houses to secure the most talented wizards for your team. Every bid shapes your magical destiny.",
    color: "hufflepuff",
    glowColor: "#fbbf24" // Hufflepuff yellow
  },
  {
    icon: Trophy,
    title: "Claim Victory",
    description: "Lead your assembled team of wizards to glory! Compete in magical tournaments and prove your house's supremacy throughout the wizarding world.",
    color: "slytherin",
    glowColor: "#10b981" // Slytherin green
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 relative bg-slate-900/95 scroll-mt-20">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-5xl font-bold text-magical mb-6">
            How the Magic Works
          </h2>
          <p className="font-garamond text-xl text-gray-300 max-w-3xl mx-auto">
            Four simple steps to building your legendary wizarding team and claiming your place in auction history.
          </p>
        </div>

        {/* Steps Grid - Now with Proper Glowing Cards */}
        <GlowingCards 
          className="mb-16"
          enableGlow={true}
          glowRadius={15}
          glowOpacity={0.5}
          gap="2rem"
          responsive={true}
        >
          {steps.map((step, index) => (
            <GlowingCard
              key={index}
              glowColor={step.glowColor}
              className="relative group p-8"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center font-cinzel font-bold text-xl text-white shadow-lg z-10">
                {index + 1}
              </div>

              {/* House Color Accent */}
              <div className={`absolute top-0 left-0 w-2 h-full bg-${step.color} rounded-l-2xl`}></div>
              
              {/* Icon */}
              <div className="mb-6 relative pt-4">
                <div className={`w-16 h-16 bg-${step.color}/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 text-${step.color}`} />
                </div>
                
                {/* Magical Sparkles */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                  <div className="absolute w-1 h-1 bg-amber-300 rounded-full animate-pulse" style={{ top: '20%', left: '70%' }}></div>
                  <div className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{ bottom: '20%', right: '70%' }}></div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-cinzel text-2xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="font-garamond text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (except last item) - Only visible on large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-400/60 to-transparent transform -translate-y-1/2 z-20">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-amber-400 rounded-full transform -translate-y-1/2 animate-pulse"></div>
                </div>
              )}
            </GlowingCard>
          ))}
        </GlowingCards>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <p className="font-garamond text-lg text-gray-300 mb-6">
            Ready to begin your magical journey?
          </p>
          <div className="flex items-center justify-center gap-4 text-amber-400">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
            <span className="font-cinzel text-sm font-medium">The Great Hall Awaits</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};