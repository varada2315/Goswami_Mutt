import React from "react";
import { motion } from "framer-motion";
import { getAssetUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${getAssetUrl('hero-hotel.jpeg')})`,
          backgroundPosition: 'center 40%' // Adjust to frame the building well
        }}
      />
      
      {/* Dark/Warm Wash Overlay for contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-[#1A110B]/80" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center mt-16 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1.5 sm:px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white text-xs sm:text-sm font-medium tracking-wide uppercase">Pilgrim Accommodations · Rameshwaram</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white text-shadow-lg leading-tight">
            Welcome to <br/>
            <span className="text-primary text-shadow-none bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#E5C158] to-primary">
              Goswami Mutt
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto text-shadow-sm leading-relaxed">
            Affordable and comfortable accommodations for pilgrims visiting the sacred Ramanathaswamy Temple, just 500 metres away.
          </p>
          
          <motion.div 
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              variant="gold" 
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-6"
              onClick={onBookClick}
            >
              Book Your Stay
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-6 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:text-white"
              onClick={() => {
                document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Rooms
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
