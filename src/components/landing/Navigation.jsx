import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Choose Role", href: "#choose-role" },
    { name: "About League", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center p-2">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto cursor-pointer" onClick={() => { window.location.href = '/'; setIsOpen(false); }} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex p-2 items-center font-garamond text-muted-foreground hover:text-yellow-500 rounded-lg group"
              >
                {item.name}
              </a>
            ))}

            <Button className="p-4 bg-yellow-600 hover:bg-yellow-700 text-white" onClick={() => setIsOpen(false)}>
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
              className={`absolute h-6 w-6 text-yellow-500 transition-all duration-300 ease-in-out
              ${isOpen ? 'opacity-0 -rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}
            `}
            />

            {/* X Icon */}
            <X
              className={`absolute h-6 w-6 text-yellow-500 transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}
              `}
            />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-18 left-0 right-0 bg-black/30">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex p-2 items-center font-garamond text-yellow-500 rounded-lg group justify-center"
                >
                  {item.name}
                </a>
              ))}
              <Button className="p-4 bg-yellow-600 hover:bg-yellow-700 text-white" onClick={() => setIsOpen(false)}>
                Jump Into the Auction
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};