import { Shield, Eye, Lock, BookLock, FileKey, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

import { Chatbot } from "@/components/ui/chatbot";

export const PrivacyEnchantments = () => {
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
                <Shield className="w-8 h-8 text-amber-400/70" />
              </div>
            </div>
            <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-white mb-4 pt-8">
              Privacy Enchantments
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
            <p className="font-garamond text-lg text-amber-300/80 italic">
              Our magical protections for your most valuable secrets
            </p>
          </div>

          {/* Privacy Content */}
          <Card className="mystical-card p-8 relative overflow-hidden bg-slate-800/80 border-slate-700/50 backdrop-blur-sm mb-12">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
            
            <div className="space-y-10 font-garamond text-gray-300">
              <section className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-slate-700/60 border border-amber-400/20 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-amber-400/80" />
                  </div>
                </div>
                <div>
                  <h2 className="font-cinzel text-2xl text-amber-300 mb-3">Information We Collect</h2>
                  <p className="leading-relaxed">
                    GrandBid collects only the information necessary for your participation in our magical auctions:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Your magical identity and house affiliation</li>
                    <li>Treasury allocations and bidding history</li>
                    <li>Magical preferences and strategic tendencies (for enhanced experience only)</li>
                    <li>Communication records between you and other auction participants</li>
                  </ul>
                  <p className="mt-3 text-amber-200/70 italic">
                    All information is stored in enchanted repositories with multi-layered protection spells.
                  </p>
                </div>
              </section>
              
              <section className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-slate-700/60 border border-amber-400/20 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-amber-400/80" />
                  </div>
                </div>
                <div>
                  <h2 className="font-cinzel text-2xl text-amber-300 mb-3">How We Protect Your Information</h2>
                  <p className="leading-relaxed">
                    Your privacy is safeguarded by ancient protective enchantments and modern magical security:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Fidelius Charm-inspired data encryption</li>
                    <li>Anti-intrusion hexes and detection wards</li>
                    <li>Regular security audits by certified magical security experts</li>
                    <li>Limited access protocols, even among GrandBid staff</li>
                  </ul>
                </div>
              </section>
              
              <section className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-slate-700/60 border border-amber-400/20 flex items-center justify-center">
                    <BookLock className="w-6 h-6 text-amber-400/80" />
                  </div>
                </div>
                <div>
                  <h2 className="font-cinzel text-2xl text-amber-300 mb-3">Information Sharing</h2>
                  <p className="leading-relaxed">
                    We share limited information only when necessary:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>With other participants during active auctions (limited to bid amounts and house identities)</li>
                    <li>With the Council of Magical Sports and Games for regulatory compliance</li>
                    <li>When required by magical law with proper authorization</li>
                  </ul>
                  <p className="mt-3">
                    We will never sell your information to third parties or use it for purposes outside the scope of GrandBid's operations.
                  </p>
                </div>
              </section>
              
              <section className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-slate-700/60 border border-amber-400/20 flex items-center justify-center">
                    <FileKey className="w-6 h-6 text-amber-400/80" />
                  </div>
                </div>
                <div>
                  <h2 className="font-cinzel text-2xl text-amber-300 mb-3">Your Rights</h2>
                  <p className="leading-relaxed">
                    As a participant in GrandBid, you have the right to:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Review your personal information in our records</li>
                    <li>Request modifications to inaccurate information</li>
                    <li>Opt out of non-essential communications</li>
                    <li>Request the deletion of your account (subject to regulatory requirements)</li>
                  </ul>
                  <p className="mt-3">
                    To exercise any of these rights, please contact our Privacy Enchanter by owl post or magical mirror.
                  </p>
                </div>
              </section>
              
              <div className="pt-6 border-t border-slate-700/30 text-sm text-gray-400 italic">
                <p>Last enchanted on {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} by the Office of Magical Data Protection</p>
              </div>
            </div>
          </Card>

          {/* Magical Seal */}
          <div className="text-center pt-4">
            <div className="relative mx-auto w-32 h-32">
              <div className="absolute inset-0 bg-amber-400/5 rounded-full animate-ping"></div>
              <div className="absolute inset-2 bg-amber-400/10 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="relative w-full h-full rounded-full bg-slate-800 border border-amber-400/30 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-amber-400/70" />
              </div>
            </div>
            <p className="font-cinzel text-sm text-amber-400/70 mt-4">
              Protected by the Great Seal of Privacy
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyEnchantments;
