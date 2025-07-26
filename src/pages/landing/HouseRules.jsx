import { Gavel, Award, ShieldAlert, Scale, BookOpen, Sparkles, Shield } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Chatbot } from "@/components/ui/chatbot";

export const HouseRules = () => {
  const houses = [
    {
      id: "general",
      name: "General Rules",
      color: "amber",
      icon: <Gavel className="w-5 h-5" />,
    },
    {
      id: "gryffindor",
      name: "Gryffindor",
      color: "gryffindor",
      icon: <Award className="w-5 h-5" />,
    },
    {
      id: "ravenclaw",
      name: "Ravenclaw",
      color: "ravenclaw",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: "hufflepuff",
      name: "Hufflepuff",
      color: "hufflepuff",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: "slytherin",
      name: "Slytherin",
      color: "slytherin",
      icon: <Scale className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#06131D]">
      <Navigation />
      
      {/* Add Chatbot on this landing page */}
      <Chatbot />

      <main className="py-30 px-4 -mb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 rounded-full bg-slate-800/90 border border-amber-400/20 flex items-center justify-center">
                <ShieldAlert className="w-8 h-8 text-amber-400/70" />
              </div>
            </div>
            <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-white mb-4 pt-8">
              House Rules
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
            <p className="font-garamond text-lg text-amber-300/80 italic">
              Ancient codes that govern the magical auction league
            </p>
          </div>

          {/* Rules Content */}
          <Card className="mystical-card p-8 relative overflow-hidden bg-slate-800/80 border-slate-700/50 backdrop-blur-sm mb-12">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
            
            <Tabs defaultValue="general" className="w-full items-center">
              <TabsList className="grid grid-cols-5 mb-8">
                {houses.map((house) => (
                  <TabsTrigger 
                    key={house.id} 
                    value={house.id}
                    className={`data-[state=active]:text-${house.color} data-[state=active]:border-b-2 data-[state=active]:border-${house.color}`}
                  >
                    <div className="flex items-center gap-2">
                      {house.icon}
                      <span className="font-cinzel">{house.name}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value="general" className="space-y-6 font-garamond text-gray-300">
                <h2 className="font-cinzel text-3xl text-amber-300 mb-6 text-center">
                  The Grand Codex
                </h2>
                
                <section>
                  <h3 className="font-cinzel text-xl text-amber-200 mb-2">I. Participation</h3>
                  <p className="leading-relaxed">
                    All houses participating in GrandBid must register before the season begins. Each house is allocated an equal treasury of galleons for the auction season. Houses must appoint a Captain and an alternate bidder in case of the Captain's absence.
                  </p>
                </section>
                
                <section>
                  <h3 className="font-cinzel text-xl text-amber-200 mb-2">II. Auction Protocol</h3>
                  <p className="leading-relaxed">
                    The auction follows a strict protocol. Each house bids in turn, with the order determined by random selection at the start of each auction. Minimum bid increments are set at 5 galleons. A bid must be placed within 30 seconds, or the house forfeits that turn.
                  </p>
                </section>
                
                <section>
                  <h3 className="font-cinzel text-xl text-amber-200 mb-2">III. Player Selection</h3>
                  <p className="leading-relaxed">
                    All eligible magical athletes are entered into the auction pool. Houses may request specific athletes to be presented for bidding, but the final selection order is determined by the Council of Magical Sports and Games to ensure fairness.
                  </p>
                </section>
                
                <section>
                  <h3 className="font-cinzel text-xl text-amber-200 mb-2">IV. Magical Contracts</h3>
                  <p className="leading-relaxed">
                    Once a bid is accepted, a magical contract binds both the house and the athlete. These contracts cannot be broken except under extraordinary circumstances approved by the Council. Player trades between houses are permitted only during designated trading windows.
                  </p>
                </section>
                
                <section>
                  <h3 className="font-cinzel text-xl text-amber-200 mb-2">V. Conduct</h3>
                  <p className="leading-relaxed">
                    All participants must conduct themselves with honor and respect. Use of Confundus Charms, potions, or other means to gain unfair advantage is strictly prohibited. Violations may result in disqualification, fines, or other penalties as determined by the Council.
                  </p>
                </section>
              </TabsContent>
              
              <TabsContent value="gryffindor" className="space-y-6 font-garamond text-gray-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gryffindor/20 border border-gryffindor flex items-center justify-center">
                    <Award className="w-8 h-8 text-gryffindor" />
                  </div>
                </div>
                <h2 className="font-cinzel text-3xl text-gryffindor mb-6 text-center">
                  Gryffindor House Rules
                </h2>
                
                <p className="leading-relaxed font-cinzel text-gryffindor/80 text-center italic mb-8">
                  "Where dwell the brave at heart"
                </p>
                
                <ul className="space-y-4">
                  <li className="p-4 bg-gryffindor/10 rounded-lg border border-gryffindor/20">
                    <h3 className="font-cinzel text-lg text-gryffindor mb-2">The Brave Bid</h3>
                    <p>Gryffindor House always places emphasis on courage and bold strategy. Our bidders are encouraged to make decisive moves rather than hesitant ones.</p>
                  </li>
                  <li className="p-4 bg-gryffindor/10 rounded-lg border border-gryffindor/20">
                    <h3 className="font-cinzel text-lg text-gryffindor mb-2">Lion's Pride</h3>
                    <p>All athletes representing Gryffindor must uphold the house values of bravery, nerve, and chivalry both on and off the field.</p>
                  </li>
                  <li className="p-4 bg-gryffindor/10 rounded-lg border border-gryffindor/20">
                    <h3 className="font-cinzel text-lg text-gryffindor mb-2">Godric's Treasury</h3>
                    <p>The treasury shall be managed with both courage and wisdom. We do not fear spending boldly for the right athlete, but neither do we act with reckless abandon.</p>
                  </li>
                  <li className="p-4 bg-gryffindor/10 rounded-lg border border-gryffindor/20">
                    <h3 className="font-cinzel text-lg text-gryffindor mb-2">Champion's Honor</h3>
                    <p>Gryffindor honors fair play above all. We win with grace and lose with dignity, never compromising our integrity for victory.</p>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="ravenclaw" className="space-y-6 font-garamond text-gray-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-ravenclaw/20 border border-ravenclaw flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-ravenclaw" />
                  </div>
                </div>
                <h2 className="font-cinzel text-3xl text-ravenclaw mb-6 text-center">
                  Ravenclaw House Rules
                </h2>
                
                <p className="leading-relaxed font-cinzel text-ravenclaw/80 text-center italic mb-8">
                  "Wit beyond measure is man's greatest treasure"
                </p>
                
                <ul className="space-y-4">
                  <li className="p-4 bg-ravenclaw/10 rounded-lg border border-ravenclaw/20">
                    <h3 className="font-cinzel text-lg text-ravenclaw mb-2">Strategic Intelligence</h3>
                    <p>Ravenclaw's bidding strategy must be based on thorough research and analysis. All bids should be supported by statistical evidence and strategic reasoning.</p>
                  </li>
                  <li className="p-4 bg-ravenclaw/10 rounded-lg border border-ravenclaw/20">
                    <h3 className="font-cinzel text-lg text-ravenclaw mb-2">Eagle's Vision</h3>
                    <p>Our house values foresight. Bidders must consider not just the immediate auction, but the long-term composition and synergy of our team.</p>
                  </li>
                  <li className="p-4 bg-ravenclaw/10 rounded-lg border border-ravenclaw/20">
                    <h3 className="font-cinzel text-lg text-ravenclaw mb-2">Rowena's Wisdom</h3>
                    <p>The treasury shall be managed with precision and intelligence. Each galleon spent must contribute to an overarching strategic plan.</p>
                  </li>
                  <li className="p-4 bg-ravenclaw/10 rounded-lg border border-ravenclaw/20">
                    <h3 className="font-cinzel text-lg text-ravenclaw mb-2">Scholarly Conduct</h3>
                    <p>Ravenclaw representatives must demonstrate wisdom and learning in all auction proceedings, engaging in respectful debate and thoughtful consideration.</p>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="hufflepuff" className="space-y-6 font-garamond text-gray-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-hufflepuff/20 border border-hufflepuff flex items-center justify-center">
                    <Shield className="w-8 h-8 text-hufflepuff" />
                  </div>
                </div>
                <h2 className="font-cinzel text-3xl text-hufflepuff mb-6 text-center">
                  Hufflepuff House Rules
                </h2>
                
                <p className="leading-relaxed font-cinzel text-hufflepuff/80 text-center italic mb-8">
                  "Those patient Hufflepuffs are true and unafraid of toil"
                </p>
                
                <ul className="space-y-4">
                  <li className="p-4 bg-hufflepuff/10 rounded-lg border border-hufflepuff/20">
                    <h3 className="font-cinzel text-lg text-hufflepuff mb-2">Fair Bidding</h3>
                    <p>Hufflepuff values fairness above all. Our bids shall be honest and transparent, with no attempt to manipulate or mislead other houses.</p>
                  </li>
                  <li className="p-4 bg-hufflepuff/10 rounded-lg border border-hufflepuff/20">
                    <h3 className="font-cinzel text-lg text-hufflepuff mb-2">Badger's Loyalty</h3>
                    <p>We value loyalty and teamwork. Our bidding strategy prioritizes athletes who demonstrate strong collaborative skills and dedication to their teammates.</p>
                  </li>
                  <li className="p-4 bg-hufflepuff/10 rounded-lg border border-hufflepuff/20">
                    <h3 className="font-cinzel text-lg text-hufflepuff mb-2">Helga's Generosity</h3>
                    <p>The treasury shall be managed with fairness and inclusivity. We ensure that resources are distributed equitably to build a balanced team where every member is valued.</p>
                  </li>
                  <li className="p-4 bg-hufflepuff/10 rounded-lg border border-hufflepuff/20">
                    <h3 className="font-cinzel text-lg text-hufflepuff mb-2">Humble Excellence</h3>
                    <p>Hufflepuff representatives shall conduct themselves with humility and good sportsmanship, celebrating the achievements of all participants.</p>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="slytherin" className="space-y-6 font-garamond text-gray-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-slytherin/20 border border-slytherin flex items-center justify-center">
                    <Scale className="w-8 h-8 text-slytherin" />
                  </div>
                </div>
                <h2 className="font-cinzel text-3xl text-slytherin mb-6 text-center">
                  Slytherin House Rules
                </h2>
                
                <p className="leading-relaxed font-cinzel text-slytherin/80 text-center italic mb-8">
                  "Those cunning folk use any means to achieve their ends"
                </p>
                
                <ul className="space-y-4">
                  <li className="p-4 bg-slytherin/10 rounded-lg border border-slytherin/20">
                    <h3 className="font-cinzel text-lg text-slytherin mb-2">Cunning Strategy</h3>
                    <p>Slytherin employs shrewd and strategic bidding. Our bidders must demonstrate cunning, ambition, and resourcefulness in securing the best talent.</p>
                  </li>
                  <li className="p-4 bg-slytherin/10 rounded-lg border border-slytherin/20">
                    <h3 className="font-cinzel text-lg text-slytherin mb-2">Serpent's Calculation</h3>
                    <p>We value calculated decision-making. Every bid must serve our house's ambitions and long-term strategic goals.</p>
                  </li>
                  <li className="p-4 bg-slytherin/10 rounded-lg border border-slytherin/20">
                    <h3 className="font-cinzel text-lg text-slytherin mb-2">Salazar's Treasury</h3>
                    <p>The treasury shall be managed with shrewdness and ambition. Resources are invested strategically to maximize return and secure advantage.</p>
                  </li>
                  <li className="p-4 bg-slytherin/10 rounded-lg border border-slytherin/20">
                    <h3 className="font-cinzel text-lg text-slytherin mb-2">Ambitious Excellence</h3>
                    <p>Slytherin representatives must demonstrate determination and the drive to win. We compete fiercely but within the boundaries of the established rules.</p>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
            
            <div className="pt-8 border-t border-slate-700/30 text-sm text-gray-400 italic mt-8">
              <p>Last revised by the Council of Magical Sports and Games on {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
          </Card>

          {/* Magical Seal */}
          <div className="text-center pt-4">
            <div className="w-24 h-24 rounded-full bg-slate-800/80 border border-amber-400/30 flex items-center justify-center mx-auto relative">
              <div className="absolute inset-0 rounded-full border-2 border-amber-400/20 animate-spin" style={{ animationDuration: '10s' }}></div>
              <Sparkles className="w-10 h-10 text-amber-400/70" />
            </div>
            <p className="font-cinzel text-sm text-amber-400/70 mt-4">
              Enchanted by the High Council
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HouseRules;
