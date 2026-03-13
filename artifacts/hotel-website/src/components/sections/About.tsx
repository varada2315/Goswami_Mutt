import React from "react";
import { motion } from "framer-motion";
import { getAssetUrl } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div 
        className="absolute -right-64 -top-64 w-[800px] h-[800px] opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `url(${getAssetUrl('images/mandala-pattern.png')})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-4">
              <span className="w-12 h-0.5 bg-primary"></span>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              A Home for <span className="italic text-primary/90">Pilgrims &amp; Devotees</span>
            </h2>

            {/* Google Reviews Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border shadow-sm">
              <div className="flex gap-0.5">
                {[1,2,3,4].map(i => (
                  <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
                <svg className="w-5 h-5" viewBox="0 0 24 24" style={{fill:'url(#half)'}}>
                  <defs>
                    <linearGradient id="half"><stop offset="50%" stopColor="hsl(var(--primary))"/><stop offset="50%" stopColor="hsl(var(--muted))"/></linearGradient>
                  </defs>
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <div>
                <span className="font-bold text-foreground text-lg">4.2</span>
                <span className="text-muted-foreground text-sm ml-1">· 801 Google reviews</span>
              </div>
            </div>
            
            <div className="prose prose-lg text-muted-foreground prose-p:leading-relaxed">
              <p>
                Goswami Madam Trust is a religious organization located in Rameshwaram, Tamil Nadu, dedicated to providing affordable and comfortable accommodations for pilgrims visiting the renowned Ramanathaswamy Temple.
              </p>
              <p>
                Situated approximately 500 metres from the temple, the trust offers a range of facilities to ensure a pleasant stay for devotees. Whether you're here for a single night or an extended pilgrimage, our welcoming environment and thoughtful amenities make your spiritual journey comfortable.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-8 border-t border-border mt-8">
              <div>
                <h4 className="text-3xl font-serif font-bold text-primary mb-1">500m</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">From Ramanathaswamy Temple</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-primary mb-1">24/7</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Guest Support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img 
                src={getAssetUrl('hero-hotel.jpeg')} 
                alt="Hotel Exterior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl m-2 pointer-events-none" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-[240px]">
              <div className="flex gap-1 text-primary mb-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="font-serif font-bold text-lg leading-tight">"Exceptional stay, highly recommended!"</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
