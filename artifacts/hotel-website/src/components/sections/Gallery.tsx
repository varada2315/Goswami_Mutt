import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetUrl } from "@/lib/utils";
import { Maximize2, X } from "lucide-react";

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    { src: "hero-hotel.jpeg", alt: "Goswami Mutt exterior", span: "md:col-span-2 md:row-span-2" },
    { src: "room-superdeluxe.jpeg", alt: "Super Deluxe Room", span: "md:col-span-1 md:row-span-1" },
    { src: "room-ac.jpeg", alt: "AC Room", span: "md:col-span-1 md:row-span-1" },
    { src: "room-nonac.jpeg", alt: "Non-AC Room", span: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-[#1A110B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-4 justify-center w-full">
            <span className="w-8 h-0.5 bg-primary"></span>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Gallery</span>
            <span className="w-8 h-0.5 bg-primary"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">Discover Our Hotel</h2>
          <p className="text-white/60 text-base sm:text-lg">
            Take a visual tour of our beautifully designed rooms and elegant exterior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] sm:auto-rows-[230px] md:auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span}`}
              onClick={() => setSelectedImg(img.src)}
            >
              <img 
                src={getAssetUrl(img.src)} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-serif text-lg font-medium">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={getAssetUrl(selectedImg)}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
