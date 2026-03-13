import React from "react";
import { motion } from "framer-motion";
import { Wifi, Wind, BellRing, Utensils, Car, Bath, Tv, Droplets } from "lucide-react";

export function Amenities() {
  const amenities = [
    { icon: <Wifi className="w-8 h-8" />, title: "Free High-Speed WiFi", desc: "Stay connected throughout the hotel premises." },
    { icon: <Wind className="w-8 h-8" />, title: "Air Conditioned", desc: "Climate control in all premium and deluxe rooms." },
    { icon: <BellRing className="w-8 h-8" />, title: "24/7 Reception", desc: "Round-the-clock assistance for all your needs." },
    { icon: <Utensils className="w-8 h-8" />, title: "Room Service", desc: "Delicious meals delivered right to your door." },
    { icon: <Car className="w-8 h-8" />, title: "Ample Parking", desc: "Safe and secure parking space for your vehicles." },
    { icon: <Bath className="w-8 h-8" />, title: "Clean Bathrooms", desc: "Hygienic, modern attached bathrooms." },
    { icon: <Tv className="w-8 h-8" />, title: "Smart/Cable TV", desc: "Entertainment with multiple channels in every room." },
    { icon: <Droplets className="w-8 h-8" />, title: "Hot & Cold Water", desc: "24-hour running hot and cold water facility." },
  ];

  return (
    <section id="amenities" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-4">
              <span className="w-12 h-0.5 bg-primary"></span>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">Hotel Amenities</h2>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md md:text-right">
            We provide everything you need for a comfortable and hassle-free stay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
