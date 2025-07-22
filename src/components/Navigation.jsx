import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { handleNavClick } from "@/lib/smooth-scroll";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Choose Role", href: "#choose-role" },
    { name: "About League", href: "#about-league" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-slate-700/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center p-2">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => { window.location.href = '/'; setIsOpen(false); }} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex p-2 items-center font-garamond text-gray-300 hover:text-amber-400 rounded-lg group transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </a>
            ))}

            <Button variant="magical" className="p-4 text-white font-garamond" onClick={() => { window.location.href = '/pre-signup'; setIsOpen(false); }}>
              Jump Into the Auction
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            className="md:hidden relative overflow-hidden" // Add `relative` and `overflow-hidden`
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Menu Icon (Hamburger) */}
            <Menu
              className={`absolute h-6 w-6 text-amber-400 transition-all duration-300 ease-in-out
              ${isOpen ? 'opacity-0 -rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}
            `}
            />

            {/* X Icon */}
            <X
              className={`absolute h-6 w-6 text-amber-400 transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}
              `}
            />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden top-18 left-0 right-0">
            <div className="flex flex-col space-y-4 p-4 bg-slate-800/90 rounded-lg mx-2 mb-2 border border-slate-700/50">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { handleNavClick(e, item.href); setIsOpen(false); }}
                  className="flex p-2 items-center font-garamond text-gray-300 hover:text-amber-400 rounded-lg group justify-center transition-colors duration-300 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="magical" className="p-4 text-white font-garamond" onClick={() => { window.location.href = '/pre-signup'; setIsOpen(false); }}>
                Jump Into the Auction
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};