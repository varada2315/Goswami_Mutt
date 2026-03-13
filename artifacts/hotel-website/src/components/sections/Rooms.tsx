import React from "react";
import { motion } from "framer-motion";
import { getAssetUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Wifi, Wind, Tv, Coffee, Users, BedDouble } from "lucide-react";

interface RoomsProps {
  onBookClick: (roomName: string) => void;
}

export function Rooms({ onBookClick }: RoomsProps) {
  const rooms = [
    {
      id: "super-deluxe",
      name: "Super Deluxe Room",
      image: "room-superdeluxe.jpeg",
      description: "Our finest accommodation featuring modern furnishings, premium marble flooring, elegant gold and white decor, and ultimate comfort.",
      capacity: "2-3 Guests",
      bedType: "2 Premium Beds",
      price: "₹1,750",
      amenities: [
        { icon: <Wind className="w-4 h-4" />, label: "Air Conditioned" },
        { icon: <Wifi className="w-4 h-4" />, label: "Free High-Speed WiFi" },
        { icon: <Tv className="w-4 h-4" />, label: "Smart TV" },
        { icon: <Coffee className="w-4 h-4" />, label: "Tea/Coffee Maker" },
      ],
      featured: true
    },
    {
      id: "ac-room",
      name: "AC Room",
      image: "room-ac.jpeg",
      description: "Comfortable and spacious room with rich wooden furniture, tray ceilings, and maroon accent pillows for a cozy stay.",
      capacity: "2-4 Guests",
      bedType: "2 Double Beds",
      price: "₹1,500",
      amenities: [
        { icon: <Wind className="w-4 h-4" />, label: "Air Conditioned" },
        { icon: <Wifi className="w-4 h-4" />, label: "Free WiFi" },
        { icon: <Tv className="w-4 h-4" />, label: "Cable TV" },
        { icon: <BedDouble className="w-4 h-4" />, label: "Premium Bedding" },
      ],
      featured: false
    },
    {
      id: "non-ac-room",
      name: "Non-AC Room",
      image: "room-nonac.jpeg",
      description: "Budget-friendly comfort featuring wooden furniture, fan cooling, and clean, comfortable beds with traditional red sheets.",
      capacity: "1-3 Guests",
      bedType: "3 Single Beds",
      price: "₹1,000",
      amenities: [
        { icon: <Users className="w-4 h-4" />, label: "Family Friendly" },
        { icon: <Wifi className="w-4 h-4" />, label: "Free WiFi" },
        { icon: <Tv className="w-4 h-4" />, label: "TV" },
        { icon: <BedDouble className="w-4 h-4" />, label: "Comfortable Beds" },
      ],
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="rooms" className="py-24 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-4 justify-center w-full">
            <span className="w-8 h-0.5 bg-primary"></span>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Accommodation</span>
            <span className="w-8 h-0.5 bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Our Rooms & Suites</h2>
          <p className="text-muted-foreground text-lg">
            Choose from our range of thoughtfully designed rooms, each tailored to provide you with a relaxing and comfortable stay.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rooms.map((room) => (
            <motion.div 
              key={room.id}
              variants={cardVariants}
              className={`bg-card rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col ${
                room.featured ? 'border-primary/50 shadow-lg relative' : 'border-border shadow-md'
              }`}
            >
              {room.featured && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={getAssetUrl(room.image)} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl font-bold text-foreground">{room.name}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 border-t border-b border-border/50 py-4">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="text-primary bg-primary/10 p-1.5 rounded-md">
                        {amenity.icon}
                      </span>
                      <span className="truncate">{amenity.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Starting from</span>
                    <span className="text-2xl font-bold text-primary">{room.price}<span className="text-sm text-muted-foreground font-normal">/night</span></span>
                  </div>
                  <Button 
                    variant={room.featured ? "gold" : "outline"} 
                    className={room.featured ? "" : "border-primary text-primary hover:bg-primary hover:text-white"}
                    onClick={() => onBookClick(room.name)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
