import React from "react";
import { getAssetUrl } from "@/lib/utils";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
  };

  return (
    <footer className="bg-[#1A110B] text-white/80 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ 
          backgroundImage: `url(${getAssetUrl('images/mandala-pattern.png')})`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-3xl font-bold text-white mb-1">Goswami Mutt</h3>
              <p className="text-primary text-sm uppercase tracking-widest font-medium">Rameshwaram, Tamil Nadu</p>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              A religious organization dedicated to providing affordable and comfortable accommodations for pilgrims visiting the renowned Ramanathaswamy Temple, just 500 metres away.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Rooms', 'Amenities', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-white mb-6">Our Rooms</h4>
            <ul className="space-y-3">
              <li>
                <a href="#rooms" onClick={(e) => handleNavClick(e, '#rooms')} className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Super Deluxe Room
                </a>
              </li>
              <li>
                <a href="#rooms" onClick={(e) => handleNavClick(e, '#rooms')} className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  AC Room
                </a>
              </li>
              <li>
                <a href="#rooms" onClick={(e) => handleNavClick(e, '#rooms')} className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Non-AC Room
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <a
                  href="https://share.google/iDCs58GqxOiISGaVf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed hover:text-primary transition-colors underline underline-offset-2"
                >
                  Goswami Mutt, Rameshwaram,<br />
                  Tamil Nadu, India
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+918505904123" className="text-sm hover:text-primary transition-colors">
                  +91 85059 04123
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50 text-center md:text-left">
            &copy; {currentYear} Goswami Mutt. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
