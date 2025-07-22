// import React, { useState } from 'react';
// import { ChevronDown, MessageCircle, X, Users, Building, UserCheck, Star, CheckCircle, DollarSign, Clock, Target } from 'lucide-react';

// export default function IntervueLandingPage() {
//   const [showChat, setShowChat] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <div className="text-2xl font-bold text-gray-900">
//                 int<span className="bg-black text-white px-1 rounded">e</span>rvue
//               </div>
//             </div>
//             <nav className="hidden md:flex space-x-8">
//               <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">Why Intervue?</a>
//               <div className="relative group">
//                 <button className="text-gray-900 hover:text-gray-700 font-medium flex items-center">
//                   Products <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//               </div>
//               <div className="relative group">
//                 <button className="text-gray-900 hover:text-gray-700 font-medium flex items-center">
//                   Solutions <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//               </div>
//               <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">Pricing</a>
//               <div className="relative group">
//                 <button className="text-gray-900 hover:text-gray-700 font-medium flex items-center">
//                   Resources <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//               </div>
//               <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">Contact us</a>
//             </nav>
//             <div className="flex items-center space-x-4">
//               <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
//                 Request demo
//               </button>
//               <button className="border border-gray-300 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Become an Interviewer */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
//             <div className="mb-6">
//               <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
//                 <DollarSign className="h-4 w-4 mr-2" />
//                 Earn & Grow 10x
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 For <span className="text-black">Organizers</span>
//               </h2>
//               <p className="text-gray-600 leading-relaxed">
//                 Join our community of freelance interviewers at Intervue. Gain exposure beyond your workspace and exercise the power of your knowledge and freedom
//               </p>
//             </div>

            
//             <div className="space-y-4 mb-8">
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                 <span className="text-gray-700">Create & manage leagues with ease.</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                 <span className="text-gray-700">Run live, transparent bidding sessions.</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                 <span className="text-gray-700">Efficiently track player stats & results.</span>
//               </div>
//             </div>

//             <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105">
//               Login
//             </button>
//           </div>

//           {/* For Companies */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative">
//             <div className="mb-6">
//               <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
//                 <CheckCircle className="h-4 w-4 mr-2" />
//                 Save 90% of hiring bandwidth
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 For <span className="text-black">Companies</span>
//               </h2>
//               <p className="text-gray-600 leading-relaxed">
//                 Conduct interviews asynchronously on Intervue's platform by vetted interviewers. A detailed report of the candidate's performance is available within 5 minutes
//               </p>
//             </div>

//             <div className="space-y-4 mb-8">
//               <div className="flex items-center">
//                 <Clock className="h-5 w-5 text-green-500 mr-3" />
//                 <span className="text-gray-700">5-minute turnaround time</span>
//               </div>
//               <div className="flex items-center">
//                 <Users className="h-5 w-5 text-green-500 mr-3" />
//                 <span className="text-gray-700">Vetted expert interviewers</span>
//               </div>
//               <div className="flex items-center">
//                 <Target className="h-5 w-5 text-green-500 mr-3" />
//                 <span className="text-gray-700">Detailed performance reports</span>
//               </div>
//             </div>

//             <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 transform hover:scale-105 mb-6">
//               Login
//             </button>

//             <div className="text-center">
//               <p className="text-sm text-gray-600 mb-2">Need help?</p>
//               <button 
//                 onClick={() => setShowChat(true)}
//                 className="text-green-600 font-semibold hover:text-green-700 transition-colors"
//               >
//                 Contact Sales
//               </button>
//             </div>
//           </div>

//           {/* For Candidates */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
//             <div className="mb-6">
//               <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
//                 <UserCheck className="h-4 w-4 mr-2" />
//                 Mock interviews
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 For <span className="text-black">Candidates</span>
//               </h2>
//               <p className="text-gray-600 leading-relaxed">
//                 Get actionable feedback of your interview from industry experts and share it with <span className="font-semibold text-black">400+</span> actively hiring brands
//               </p>
//             </div>

//             <div className="space-y-4 mb-8">
//               <div className="flex items-center">
//                 <Star className="h-5 w-5 text-blue-500 mr-3" />
//                 <span className="text-gray-700">Industry expert feedback</span>
//               </div>
//               <div className="flex items-center">
//                 <Building className="h-5 w-5 text-blue-500 mr-3" />
//                 <span className="text-gray-700">400+ hiring partners</span>
//               </div>
//               <div className="flex items-center">
//                 <Target className="h-5 w-5 text-blue-500 mr-3" />
//                 <span className="text-gray-700">Actionable insights</span>
//               </div>
//             </div>

//             <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105">
//               Login
//             </button>
//           </div>
//         </div>
//       </main>

//       {/* Trusted by companies section */}
//       <section className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-gray-600 mb-8 text-lg">Trusted by leading companies worldwide</p>
//           <div className="flex justify-center items-center space-x-12 opacity-60">
//             <div className="text-2xl font-bold text-red-500">Netflix</div>
//             <div className="text-2xl font-bold text-blue-600">Microsoft</div>
//             <div className="text-2xl font-bold text-green-600">WhatsApp</div>
//             <div className="text-2xl font-bold text-red-600">Rakuten</div>
//             <div className="text-2xl font-bold text-purple-600">Paytm</div>
//           </div>
//         </div>
//       </section>

//       {/* Chat Widget */}
//       {showChat && (
//         <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-2xl border w-80 z-50">
//           <div className="bg-gray-900 text-white p-4 rounded-t-lg flex justify-between items-center">
//             <div className="flex items-center">
//               <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
//                 <span className="text-sm font-bold text-black">👨‍💼</span>
//               </div>
//               <div>
//                 <p className="font-semibold">Sales Team</p>
//                 <p className="text-xs text-gray-300">How do you want to get started with Intervue?</p>
//               </div>
//             </div>
//             <button 
//               onClick={() => setShowChat(false)}
//               className="text-gray-300 hover:text-white"
//             >
//               <X className="h-5 w-5" />
//             </button>
//           </div>
//           <div className="p-4 h-64 bg-gray-50">
//             <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
//               <p className="text-sm text-gray-800">
//                 👋 Hey! How do you want to get started with Intervue?
//               </p>
//             </div>
//             <div className="space-y-2">
//               <button className="w-full text-left p-3 bg-white hover:bg-gray-100 rounded-lg text-sm transition-colors">
//                 I'm a company looking to hire
//               </button>
//               <button className="w-full text-left p-3 bg-white hover:bg-gray-100 rounded-lg text-sm transition-colors">
//                 I want to become an interviewer
//               </button>
//               <button className="w-full text-left p-3 bg-white hover:bg-gray-100 rounded-lg text-sm transition-colors">
//                 I'm a candidate seeking mock interviews
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Floating Chat Button */}
//       {!showChat && (
//         <button 
//           onClick={() => setShowChat(true)}
//           className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-40"
//         >
//           <MessageCircle className="h-6 w-6" />
//         </button>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  MessageCircle, 
  X, 
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

export default function CricketAuctionLanding() {
  const [showChat, setShowChat] = useState(false);
  const [currentBid, setCurrentBid] = useState(1500000);
  
  // Animated counter for bid amount
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBid(prev => prev + Math.floor(Math.random() * 100000));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent flex items-center">
                🏏 CricAuction
                <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-green-600 font-medium transition-colors">How It Works</a>
              <div className="relative group">
                <button className="text-gray-900 hover:text-green-600 font-medium flex items-center transition-colors">
                  Leagues <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="text-gray-900 hover:text-green-600 font-medium transition-colors">Pricing</a>
              <a href="#" className="text-gray-900 hover:text-green-600 font-medium transition-colors">Live Auctions</a>
              <a href="#" className="text-gray-900 hover:text-green-600 font-medium transition-colors">Support</a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600 hidden md:block">
                🔴 LIVE: Current Bid ₹{currentBid.toLocaleString()}
              </div>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105">
                Join Live Auction
              </button>
              <button className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            The Ultimate Cricket Player 
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Auction Platform</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Organize leagues, bid for star players, and showcase your cricket talent on the most advanced auction platform
          </p>
          <div className="flex justify-center space-x-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              50+ Active Leagues
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              1000+ Players Registered
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              Live Bidding Now
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* League Organizers */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300"></div>
            
            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                <Trophy className="h-4 w-4 mr-2" />
                Organize & Manage
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                League <span className="text-green-600">Organizers</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Create and manage professional cricket leagues with our comprehensive auction management system. Handle everything from player registration to live bidding seamlessly.
              </p>
            </div>
            
            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Gavel className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Complete auction management</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Team & player management</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Real-time analytics & reports</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Shield className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Secure payment processing</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg relative z-10">
              Start Organizing
            </button>
          </div>

          {/* Team Owners/Bidders */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300"></div>
            
            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                <DollarSign className="h-4 w-4 mr-2" />
                Bid & Build Teams
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Team <span className="text-blue-600">Owners</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Join exciting auctions and build your dream cricket team. Bid strategically for star players and create winning combinations with our advanced bidding tools.
              </p>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Zap className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Live bidding experience</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Target className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Smart bidding strategies</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Instant team updates</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Globe className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Global league participation</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg relative z-10 mb-6">
              Start Bidding
            </button>

            <div className="text-center relative z-10">
              <p className="text-sm text-gray-600 mb-2">Need help with bidding?</p>
              <button 
                onClick={() => setShowChat(true)}
                className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
              >
                Contact Auction Support
              </button>
            </div>
          </div>

          {/* Players */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-red-200 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300"></div>
            
            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                <Star className="h-4 w-4 mr-2" />
                Showcase Talent
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cricket <span className="text-orange-600">Players</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Showcase your cricket skills and get discovered by team owners worldwide. Create your professional profile and enter exciting auctions to launch your career.
              </p>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <Award className="h-4 w-4 text-orange-600" />
                </div>
                <span className="text-gray-700 font-medium">Professional player profiles</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <Play className="h-4 w-4 text-orange-600" />
                </div>
                <span className="text-gray-700 font-medium">Video highlights showcase</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <TrendingUp className="h-4 w-4 text-orange-600" />
                </div>
                <span className="text-gray-700 font-medium">Performance statistics</span>
              </div>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="h-4 w-4 text-orange-600" />
                </div>
                <span className="text-gray-700 font-medium">Verified skill assessments</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-6 rounded-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg relative z-10">
              Register as Player
            </button>
          </div>
        </div>
      </main>

      {/* Live Stats Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Live Auction Statistics</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400">₹{currentBid.toLocaleString()}</div>
              <p className="text-gray-300">Highest Bid Today</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">247</div>
              <p className="text-gray-300">Active Bidders</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-400">1,250+</div>
              <p className="text-gray-300">Players Available</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400">52</div>
              <p className="text-gray-300">Active Leagues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      {showChat && (
        <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 w-80 z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-lg">🏏</span>
              </div>
              <div>
                <p className="font-bold">Auction Support</p>
                <p className="text-xs text-green-100">How can we help you get started?</p>
              </div>
            </div>
            <button 
              onClick={() => setShowChat(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 h-72 bg-gray-50 overflow-y-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <p className="text-sm text-gray-800">
                👋 Welcome to CricAuction! Choose your path:
              </p>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-green-100 hover:bg-green-200 rounded-lg text-sm transition-colors border border-green-200">
                🏆 I want to organize a cricket league
              </button>
              <button className="w-full text-left p-3 bg-blue-100 hover:bg-blue-200 rounded-lg text-sm transition-colors border border-blue-200">
                💰 I'm interested in bidding for players
              </button>
              <button className="w-full text-left p-3 bg-orange-100 hover:bg-orange-200 rounded-lg text-sm transition-colors border border-orange-200">
                🏏 I'm a player looking to get auctioned
              </button>
              <button className="w-full text-left p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors border border-gray-200">
                ❓ I need general information
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!showChat && (
        <button 
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:from-green-700 hover:to-blue-700 transition-all z-40 transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}