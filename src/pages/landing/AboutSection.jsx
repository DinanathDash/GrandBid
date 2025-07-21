import { Card } from "@/components/ui/card";
import { Scroll, Zap, Trophy, Users } from "lucide-react";
import quillImage from "@/assets/magical-quill.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Mystical Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Story Card */}
        <Card className="mystical-card p-12 mb-16 relative overflow-hidden">
          {/* Decorative Quill */}
          <div className="absolute top-8 right-8 w-24 h-24 opacity-20 rotate-12">
            <img src={quillImage} alt="Magical Quill" className="w-full h-full object-cover rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-cinzel text-5xl font-bold text-magical mb-8">
                The Chronicle of Legends
              </h2>
              
              <div className="space-y-6 font-garamond text-lg leading-relaxed text-muted-foreground">
                <p>
                  In the hallowed halls of the wizarding world, where the greatest magical minds have gathered for centuries, a new tradition was born. Inspired by the legendary Quidditch World Cup and infused with the strategic brilliance of muggle sporting auctions, the <span className="text-primary font-semibold">Wizarding Auction League</span> emerged as the most prestigious team-building event in magical history.
                </p>
                
                <p>
                  Here, House Captains wielding ancient wisdom and modern strategy compete not with broomsticks and golden snitches, but with galleons and cunning bids. Each auction becomes a grand spectacle, where the fate of magical athletes hangs in the balance, and every decision shapes the destiny of entire houses.
                </p>
                
                <p className="text-accent font-medium italic">
                  "It is not the size of your treasury that determines victory, but the wisdom with which you spend each golden galleon."
                </p>
                
                <p>
                  As the magical world evolves, so too does the art of competition. Welcome to an arena where strategy meets spectacle, where every bid tells a story, and where legends are not just born—they are carefully crafted, one auction at a time.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gryffindor/10 rounded-lg border border-gryffindor/20">
                <Users className="w-8 h-8 text-gryffindor mx-auto mb-3" />
                <div className="font-cinzel text-3xl font-bold text-gryffindor mb-1">500+</div>
                <div className="font-garamond text-sm text-muted-foreground">Active Houses</div>
              </div>
              
              <div className="text-center p-6 bg-ravenclaw/10 rounded-lg border border-ravenclaw/20">
                <Zap className="w-8 h-8 text-ravenclaw mx-auto mb-3" />
                <div className="font-cinzel text-3xl font-bold text-ravenclaw mb-1">10K+</div>
                <div className="font-garamond text-sm text-muted-foreground">Magical Athletes</div>
              </div>
              
              <div className="text-center p-6 bg-hufflepuff/10 rounded-lg border border-hufflepuff/20">
                <Trophy className="w-8 h-8 text-hufflepuff mx-auto mb-3" />
                <div className="font-cinzel text-3xl font-bold text-hufflepuff mb-1">250+</div>
                <div className="font-garamond text-sm text-muted-foreground">Tournaments Won</div>
              </div>
              
              <div className="text-center p-6 bg-slytherin/10 rounded-lg border border-slytherin/20">
                <Scroll className="w-8 h-8 text-slytherin mx-auto mb-3" />
                <div className="font-cinzel text-3xl font-bold text-slytherin mb-1">50M+</div>
                <div className="font-garamond text-sm text-muted-foreground">Galleons Bid</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Heritage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quidditch Heritage */}
          <Card className="mystical-card p-8 group hover:scale-105 transition-all duration-500">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-cinzel text-2xl font-bold text-foreground mb-4">
                Quidditch Legacy
              </h3>
              
              <p className="font-garamond text-muted-foreground leading-relaxed">
                Drawing inspiration from the legendary Quidditch World Cup, we honor the competitive spirit and magical excellence that has thrilled wizards for generations. Every match, every play, every moment of glory.
              </p>
            </div>
          </Card>

          {/* Modern Innovation */}
          <Card className="mystical-card p-8 group hover:scale-105 transition-all duration-500">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="font-cinzel text-2xl font-bold text-foreground mb-4">
                Strategic Innovation
              </h3>
              
              <p className="font-garamond text-muted-foreground leading-relaxed">
                Infused with the tactical depth of modern sporting auctions, we've created a new form of magical competition where wit, strategy, and resource management determine the mightiest houses.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};