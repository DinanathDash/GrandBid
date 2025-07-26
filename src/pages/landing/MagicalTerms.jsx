import { Scroll, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import wandSvg from "@/assets/wand.svg";

import { Chatbot } from "@/components/ui/chatbot";

export const MagicalTerms = () => {
  return (
    <div className="min-h-screen bg-[#06131D]">
      <Navigation />
      
      {/* Add Chatbot on this landing page */}
      <Chatbot />

      <main className="py-30 px-4 -mb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 opacity-10">
              <img src={wandSvg} alt="Magical Wand" className="w-full h-full" />
            </div>
            <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-white mb-4">
              Magical Terms
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
            <p className="font-garamond text-lg text-amber-300/80 italic">
              The binding magical contract between GrandBid and its esteemed participants
            </p>
            
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-8 h-8 text-amber-400/30" />
            </div>
          </div>

          {/* Terms Content */}
          <Card className="mystical-card p-8 relative overflow-hidden bg-slate-800/80 border-slate-700/50 backdrop-blur-sm mb-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
            
            <div className="space-y-8 font-garamond text-gray-300">
              <section>
                <h2 className="font-cinzel text-2xl text-amber-300 mb-4 flex items-center">
                  <Scroll className="w-5 h-5 mr-2 text-amber-400" />
                  Acceptance of Terms
                </h2>
                <p className="leading-relaxed">
                  By accessing or using the GrandBid platform, you acknowledge that you have read, understood, and agree to be bound by these Magical Terms. These terms constitute a binding magical contract between you and GrandBid, enforceable by both magical and non-magical authorities.
                </p>
              </section>
              
              <section>
                <h2 className="font-cinzel text-2xl text-amber-300 mb-4 flex items-center">
                  <Scroll className="w-5 h-5 mr-2 text-amber-400" />
                  Eligibility
                </h2>
                <p className="leading-relaxed">
                  To participate in GrandBid auctions, you must be a registered member of a recognized magical house or organization. All participants must be at least 17 years of age or have obtained special permission from their Head of House.
                </p>
              </section>
              
              <section>
                <h2 className="font-cinzel text-2xl text-amber-300 mb-4 flex items-center">
                  <Scroll className="w-5 h-5 mr-2 text-amber-400" />
                  Auction Rules
                </h2>
                <p className="leading-relaxed">
                  All bids are magically binding. Once a bid is placed, it cannot be retracted except under extraordinary circumstances approved by the GrandBid Council. The use of enchantments, potions, or other magical means to influence the auction process is strictly prohibited.
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>All bids must be placed within the designated time frame</li>
                  <li>Maximum bid amounts are determined by each house's allocated treasury</li>
                  <li>In the event of a tie, the earlier bid takes precedence</li>
                  <li>The GrandBid Council reserves the right to nullify any suspicious bids</li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-cinzel text-2xl text-amber-300 mb-4 flex items-center">
                  <Scroll className="w-5 h-5 mr-2 text-amber-400" />
                  Code of Conduct
                </h2>
                <p className="leading-relaxed">
                  All participants are expected to conduct themselves with honor and respect. Intimidation, hexes, curses, or any form of magical coercion directed at other participants will result in immediate disqualification and possible referral to magical authorities.
                </p>
              </section>
              
              <section>
                <h2 className="font-cinzel text-2xl text-amber-300 mb-4 flex items-center">
                  <Scroll className="w-5 h-5 mr-2 text-amber-400" />
                  Modifications to Terms
                </h2>
                <p className="leading-relaxed">
                  GrandBid reserves the right to modify these terms at any time. Any changes will be announced via owl post and magical proclamation. Continued use of the platform after such modifications constitutes acceptance of the new terms.
                </p>
              </section>
              
              <div className="pt-6 border-t border-slate-700/30 text-sm text-gray-400 italic">
                <p>Last updated by the Council of Magical Sports and Games on {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
          </Card>

          {/* Magical Seal */}
          <div className="text-center pt-8">
            <div className="w-24 h-24 rounded-full bg-slate-800/80 border border-amber-400/30 flex items-center justify-center mx-auto">
              <Sparkles className="w-10 h-10 text-amber-400/70" />
            </div>
            <p className="font-cinzel text-sm text-amber-400/70 mt-4">
              Official Magical Seal of GrandBid
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MagicalTerms;
