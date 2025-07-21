import { Sparkles, Scroll, Crown, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-t from-card/50 to-background border-t border-border/50">
      {/* Magical Sparkles */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="GrandBid Logo"
              className="h-20 w-auto cursor-pointer"
              onClick={() => window.location.href = '/'}
            />
            <p className="font-garamond text-sm text-muted-foreground mt-2">
              Where Magic Meets Strategy
            </p>
            <p className="font-garamond text-muted-foreground leading-relaxed max-w-md mt-6">
              Join the most prestigious magical auction league, where houses compete for legendary wizards and strategic mastery determines champions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Scroll className="w-5 h-5 text-primary" />
              Quick Scrolls
            </h4>
            <ul className="space-y-3">
              {["Great Hall", "How It Works", "Choose Role", "About League"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="font-garamond text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Crown className="w-5 h-5 text-primary" />
              House Council
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:council@wizardingauction.com"
                className="font-garamond text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                council@wizardingauction.com
              </a>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="font-garamond text-sm">Available 24/7 by Owl Post</span>
              </div>
            </div>
          </div>
        </div>

        {/* House Banners */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { name: "Gryffindor", color: "gryffindor" },
            { name: "Slytherin", color: "slytherin" },
            { name: "Ravenclaw", color: "ravenclaw" },
            { name: "Hufflepuff", color: "hufflepuff" }
          ].map((house) => (
            <div
              key={house.name}
              className={`h-2 bg-${house.color} rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300`}
            ></div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-garamond text-sm text-muted-foreground">
            © {new Date().getFullYear()} GrandBid. All magical rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm font-garamond text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Magical Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Privacy Enchantments
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              House Rules
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};