import { Sparkles, Scroll, Crown, Mail } from "lucide-react";
import { handleNavClick } from "@/lib/smooth-scroll";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="relative py-16 px-4 bg-[#06131D] border-t border-slate-700/30">
      {/* Magical Sparkles */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="GrandBid Logo"
              className="h-20 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => window.location.href = '/'}
            />
            <p className="font-garamond text-sm text-amber-300 mt-2 font-medium">
              Where Magic Meets Strategy
            </p>
            <p className="font-garamond text-gray-300 leading-relaxed max-w-md mt-6">
              Join the most prestigious magical auction league, where houses compete for legendary wizards and strategic mastery determines champions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Scroll className="w-5 h-5 text-amber-400" />
              Quick Scrolls
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Great Hall", href: "#great-hall" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Choose Role", href: "#choose-role" },
                { name: "About League", href: "#about-league" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-garamond text-gray-400 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-1 h-1 bg-amber-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-400" />
              House Council
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:council@grandbid.com"
                className="font-garamond text-gray-400 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                council@grandbid.com
              </a>

              <div className="flex items-center gap-2 text-gray-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="font-garamond text-sm">Available 24/7 by Owl Post</span>
              </div>
            </div>
          </div>
        </div>

        {/* House Banners */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { name: "Gryffindor", color: "gryffindor" },
            { name: "Ravenclaw", color: "ravenclaw" },
            { name: "Hufflepuff", color: "hufflepuff" },
            { name: "Slytherin", color: "slytherin" }
          ].map((house) => (
            <div
              key={house.name}
              className={`h-2 bg-${house.color} rounded-full opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 shadow-sm cursor-pointer`}
              title={`House ${house.name}`}
            ></div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-garamond text-sm text-gray-400">
            © {new Date().getFullYear()} GrandBid. All magical rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm font-garamond text-gray-400">
            <a href="/magical-terms" className="hover:text-amber-300 transition-colors duration-300">
              Magical Terms
            </a>
            <a href="/privacy-enchantments" className="hover:text-amber-300 transition-colors duration-300">
              Privacy Enchantments
            </a>
            <a href="/house-rules" className="hover:text-amber-300 transition-colors duration-300">
              House Rules
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};