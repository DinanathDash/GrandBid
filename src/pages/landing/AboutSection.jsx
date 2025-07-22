import { Card } from "@/components/ui/card";
import { GlowingCards, GlowingCard } from "@/components/ui/glowing-cards";
import { Scroll, Zap, Trophy, Users } from "lucide-react";
import quillImage from "@/assets/magical-quill.jpg";

export const AboutSection = () => {
  return (
    <section id="about-league" className="py-20 px-4 relative bg-slate-850/60 scroll-mt-20">
      {/* Mystical Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Story Card */}
        <Card className="mystical-card p-12 relative overflow-hidden bg-slate-800/80 border-slate-700/50 backdrop-blur-sm">
          {/* Decorative Quill */}
          <div className="absolute top-8 right-8 w-24 h-24 opacity-70">
            <img src={quillImage} alt="Magical Quill" className="w-full h-full object-cover rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-cinzel text-5xl font-bold text-magical mb-8">
                The Chronicle of Legends
              </h2>
              
              <div className="space-y-6 font-garamond text-lg leading-relaxed text-gray-300">
                <p>
                  In the hallowed halls of the wizarding world, where the greatest magical minds have gathered for centuries, a new tradition was born. Inspired by the legendary Quidditch World Cup and infused with the strategic brilliance of muggle sporting auctions, the <span className="text-amber-400 font-semibold">GrandBid</span> emerged as the most prestigious team-building event in magical history.
                </p>
                
                <p>
                  Here, House Captains wielding ancient wisdom and modern strategy compete not with broomsticks and golden snitches, but with galleons and cunning bids. Each auction becomes a grand spectacle, where the fate of magical athletes hangs in the balance, and every decision shapes the destiny of entire houses.
                </p>
                
                <p className="text-amber-300 font-medium italic">
                  "It is not the size of your treasury that determines victory, but the wisdom with which you spend each golden galleon."
                </p>
                
                <p>
                  As the magical world evolves, so too does the art of competition. Welcome to an arena where strategy meets spectacle, where every bid tells a story, and where legends are not just born—they are carefully crafted, one auction at a time.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gryffindor/10 rounded-lg border border-gryffindor/20 backdrop-blur-sm">
                <Users className="w-8 h-8 text-gryffindor mx-auto mb-3" />
                <div className="font-cinzel text-3xl font-bold text-gryffindor mb-1">500+</div>
                <div className="font-garamond text-sm text-gray-400">Active Houses</div>
              </div>
              
              <div className="text-center p-6 bg-ravenclaw/10 rounded-lg border border-ravenclaw/20 backdrop-blur-sm">
                <Zap className="w-8 h-8 text-ravenclaw mx-auto mb-3" />
                <div className="font-cinzel text-3xl font-bold text-ravenclaw mb-1">10K+</div>
                <div className="font-garamond text-sm text-gray-400">Magical Athletes</div>
              </div>
              
              <div className="text-center p-6 bg-hufflepuff/10 rounded-lg border border-hufflepuff/20 backdrop-blur-sm">
                <Trophy className="w-8 h-8 text-hufflepuff mx-auto mb-3" />
                <div className="font-cinzel text-3xl font-bold text-hufflepuff mb-1">250+</div>
                <div className="font-garamond text-sm text-gray-400">Tournaments Won</div>
              </div>
              
              <div className="text-center p-6 bg-slytherin/10 rounded-lg border border-slytherin/20 backdrop-blur-sm">
                <Scroll className="w-8 h-8 text-slytherin mx-auto mb-3" />
                <div className="font-cinzel text-3xl font-bold text-slytherin mb-1">50M+</div>
                <div className="font-garamond text-sm text-gray-400">Galleons Bid</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};