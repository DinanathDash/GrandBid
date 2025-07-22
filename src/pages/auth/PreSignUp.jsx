import React from 'react';
import {
  Users,
  Trophy,
  Target,
  Star,
  CheckCircle,
  DollarSign,
  Clock,
  Gavel,
  Shield,
  Award,
  TrendingUp,
  Zap,
  Globe,
  Play
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function WizardingAuctionLanding() {
  return (
    <div className="min-h-screen bg-[#0f172a] overflow-x-hidden">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 pt-14">
          {/* League Organizers (Styled as Slytherin) */}
          <div className="bg-[#111827] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-700 hover:border-[#065f46] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0f766e]/20 to-[#059669]/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300"></div>

            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-[#064e3b]/50 to-[#065f46]/50 text-[#10b981] px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                <Trophy className="h-4 w-4 mr-2" />
                Organize & Manage
              </div>
              <h2 className="text-3xl font-bold text-gray-100 mb-4">
                House <span className="text-[#10b981]">Organizers</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Create and manage legendary wizarding tournaments with our comprehensive magical auction system. Handle everything from wizard registration to live bidding seamlessly.
              </p>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#0f766e]/30 rounded-full flex items-center justify-center mr-3">
                  <Gavel className="h-4 w-4 text-[#10b981]" />
                </div>
                <span className="text-gray-300 font-medium">Complete auction management</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#0f766e]/30 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-4 w-4 text-[#10b981]" />
                </div>
                <span className="text-gray-300 font-medium">House & wizard management</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#0f766e]/30 rounded-full flex items-center justify-center mr-3">
                  <TrendingUp className="h-4 w-4 text-[#10b981]" />
                </div>
                <span className="text-gray-300 font-medium">Real-time magical analytics</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#0f766e]/30 rounded-full flex items-center justify-center mr-3">
                  <Shield className="h-4 w-4 text-[#10b981]" />
                </div>
                <span className="text-gray-300 font-medium">Secure spell processing</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#059669] to-[#10b981] text-white py-4 px-6 rounded-xl font-bold hover:from-[#047857] hover:to-[#059669] transition-all duration-200 transform hover:scale-105 shadow-lg relative z-10"
              onClick={() => { window.location.href = '/organizer-login'; }}>
              Assemble Your House
            </button>
          </div>

          {/* Team Owners/Bidders (Styled as Ravenclaw) */}
          <div className="bg-[#111827] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-700 hover:border-[#1e40af] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1e3a8a]/20 to-[#2563eb]/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300"></div>

            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-[#1e3a8a]/50 to-[#1e40af]/50 text-[#3b82f6] px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                <DollarSign className="h-4 w-4 mr-2" />
                Bid & Acquire Wizards
              </div>
              <h2 className="text-3xl font-bold text-gray-100 mb-4">
                Strategic <span className="text-[#3b82f6]">Bidders</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Join exciting magical auctions and build your dream wizard team. Bid strategically for star wizards and create winning combinations with our advanced bidding enchantments.
              </p>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#1e3a8a]/30 rounded-full flex items-center justify-center mr-3">
                  <Zap className="h-4 w-4 text-[#3b82f6]" />
                </div>
                <span className="text-gray-300 font-medium">Live magical bidding experience</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#1e3a8a]/30 rounded-full flex items-center justify-center mr-3">
                  <Target className="h-4 w-4 text-[#3b82f6]" />
                </div>
                <span className="text-gray-300 font-medium">Smart bidding strategies</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#1e3a8a]/30 rounded-full flex items-center justify-center mr-3">
                  <Clock className="h-4 w-4 text-[#3b82f6]" />
                </div>
                <span className="text-gray-300 font-medium">Instant house updates</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#1e3a8a]/30 rounded-full flex items-center justify-center mr-3">
                  <Globe className="h-4 w-4 text-[#3b82f6]" />
                </div>
                <span className="text-gray-300 font-medium">Magical tournament participation</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white py-4 px-6 rounded-xl font-bold hover:from-[#1d4ed8] hover:to-[#2563eb] transition-all duration-200 transform hover:scale-105 shadow-lg relative z-10 mb-6"
              onClick={() => { window.location.href = '/bidder-login'; }}>
              Study the Roster
            </button>
          </div>

          {/* Players (Styled as Gryffindor) */}
          <div className="bg-[#111827] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-700 hover:border-[#7c2d12] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7c2d12]/20 to-[#dc2626]/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300"></div>

            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-[#7c2d12]/50 to-[#b91c1c]/50 text-[#f59e0b] px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                <Star className="h-4 w-4 mr-2" />
                Showcase Talent
              </div>
              <h2 className="text-3xl font-bold text-gray-100 mb-4">
                Magical <span className="text-[#f59e0b]">Wizards</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Showcase your magical abilities and get discovered by house captains worldwide. Create your professional profile and enter exciting auctions to launch your wizarding career.
              </p>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#7c2d12]/30 rounded-full flex items-center justify-center mr-3">
                  <Award className="h-4 w-4 text-[#f59e0b]" />
                </div>
                <span className="text-gray-300 font-medium">Professional wizard profiles</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#7c2d12]/30 rounded-full flex items-center justify-center mr-3">
                  <Play className="h-4 w-4 text-[#f59e0b]" />
                </div>
                <span className="text-gray-300 font-medium">Magical abilities showcase</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#7c2d12]/30 rounded-full flex items-center justify-center mr-3">
                  <TrendingUp className="h-4 w-4 text-[#f59e0b]" />
                </div>
                <span className="text-gray-300 font-medium">Spell performance statistics</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#7c2d12]/30 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="h-4 w-4 text-[#f59e0b]" />
                </div>
                <span className="text-gray-300 font-medium">Verified magical assessments</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white py-4 px-6 rounded-xl font-bold hover:from-[#991b1b] hover:to-[#d97706] transition-all duration-200 transform hover:scale-105 shadow-lg relative z-10"
              onClick={() => { window.location.href = '/player-login'; }}>
              Register as Wizard
            </button>
          </div>
        </div>

        <div className="text-center relative mt-10 -mb-6">
          <p className="text-sm text-gray-400 mb-2">Need help with bidding?</p>
          <button
            onClick={() => setShowChat(true)}
            className="text-[#60a5fa] text-lg font-bold hover:text-yellow-500 transition-colors"
          >
            Contact Magical Support
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}