import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Shield, Wand2, ArrowRight } from "lucide-react";

const roles = [
  {
    title: "Auction Organizer",
    subtitle: "Master of Ceremonies",
    description: "Orchestrate grand auctions in the Great Hall. Set rules, manage bids, and ensure fair play as you host the most magical sporting events in the wizarding world.",
    icon: Crown,
    features: ["Host magical auctions", "Set bidding rules", "Manage tournaments", "Crown champions"],
    houseColor: "gryffindor",
    badge: "Leadership",
    nav: "/organizer-login"
  },
  {
    title: "Team Head",
    subtitle: "House Captain",
    description: "Lead your house to glory! Build strategic teams, manage your treasury of galleons, and outbid rival houses to secure the most talented wizards.",
    icon: Shield,
    features: ["Build dream teams", "Strategic bidding", "House management", "Player development"],
    houseColor: "ravenclaw", 
    badge: "Strategy",
    nav: "/bidder-login"
  },
  {
    title: "Player",
    subtitle: "Magical Athlete",
    description: "Showcase your magical abilities and join legendary teams. Compete in tournaments, develop your skills, and become the most sought-after wizard in the auction.",
    icon: Wand2,
    features: ["Join prestigious teams", "Showcase magical skills", "Compete in tournaments", "Earn recognition"],
    houseColor: "hufflepuff",
    badge: "Performance",
    nav: "/player-login"

  }
];

export const ChooseRoleSection = () => {
  return (
    <section id="choose-role" className="py-20 px-4 relative overflow-hidden bg-slate-800/50 scroll-mt-20">
      {/* Magical Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-amber-400 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-amber-300 rounded-full animate-spin-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-amber-500 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-5xl font-bold text-magical mb-6">
            Choose Your Magical Path
          </h2>
          <p className="font-garamond text-xl text-gray-300 max-w-3xl mx-auto">
            Every great wizard has a destiny. Whether you lead, strategize, or perform, your role shapes the magical world around you.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {roles.map((role, index) => (
            <Card key={index} className="mystical-card p-8 relative group cursor-pointer bg-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/90">
              {/* House Color Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-${role.houseColor} rounded-lg transition-all duration-500`}></div>
              
              {/* Badge */}
              <div className={`absolute -top-3 right-6 px-4 py-1 bg-${role.houseColor} text-xs font-cinzel font-medium text-white rounded-full shadow-lg`}>
                {role.badge}
              </div>

              {/* Icon */}
              <div className="relative">
                <div className={`w-20 h-20 bg-${role.houseColor}/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <role.icon className={`w-10 h-10 text-${role.houseColor}`} />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-2xl font-bold text-white text-center">
                {role.title}
              </h3>
              
              <p className={`font-garamond text-${role.houseColor} text-center font-medium`}>
                {role.subtitle}
              </p>

              {/* Description */}
              <p className="font-garamond text-gray-300 text-center leading-relaxed">
                {role.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {role.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <div className={`w-2 h-2 bg-${role.houseColor} rounded-full flex-shrink-0`}></div>
                    <span className="font-garamond text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant="magical"
                className="w-full group/btn"
                onClick={() => window.location.href = role.nav}
              >
                <span className="font-cinzel">Begin as {role.title}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-${role.houseColor}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-800/80 rounded-full border border-slate-600/50 backdrop-blur-sm">
            <Wand2 className="w-5 h-5 text-amber-400" />
            <span className="font-garamond text-gray-300">
              Don't worry - you can always change your path later in your magical journey
            </span>
            <Wand2 className="w-5 h-5 text-amber-400 scale-x-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
};