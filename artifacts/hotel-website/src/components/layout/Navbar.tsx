import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onBookClick: () => void;
}

export function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex flex-col">
          <span className={`font-serif font-bold text-2xl tracking-tight transition-colors duration-300 ${
            isScrolled ? "text-primary" : "text-white text-shadow-md"
          }`}>
            Hotel Shree Ganesh
          </span>
          <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
            isScrolled ? "text-muted-foreground" : "text-white/80 text-shadow-sm"
          }`}>
            Luxury & Comfort
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    isScrolled ? "text-foreground/80" : "text-white text-shadow-sm"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-border/30 pl-6">
            <a 
              href="tel:+919876543210" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white text-shadow-sm"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <Button 
              variant="gold" 
              onClick={onBookClick}
              className={!isScrolled ? "shadow-black/20" : ""}
            >
              Book Now
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-md ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground font-medium text-lg py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  +91 98765 43210
                </a>
                <Button variant="gold" size="lg" className="w-full mt-2" onClick={onBookClick}>
                  Book Your Stay
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
