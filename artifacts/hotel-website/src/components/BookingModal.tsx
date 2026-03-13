import React, { useState } from "react";
import { X, Calendar, Users, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: string;
}

export function BookingModal({ isOpen, onClose, preselectedRoom = "" }: BookingModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: preselectedRoom || "Super Deluxe Room",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      toast({
        title: "Booking Request Received",
        description: `Thank you, ${formData.name}. We will contact you shortly to confirm your stay in the ${formData.roomType}.`,
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-card w-full max-w-lg rounded-2xl shadow-2xl pointer-events-auto border border-border overflow-hidden flex flex-col max-h-[90vh]">
              <div className="bg-primary/10 px-6 py-4 flex justify-between items-center border-b border-border/50">
                <h3 className="font-serif text-2xl font-bold text-foreground">Reserve Your Stay</h3>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-background transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <form id="booking-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <input 
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <input 
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Check-in Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input 
                          required
                          type="date"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Check-out Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input 
                          required
                          type="date"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Room Type</label>
                      <div className="relative">
                        <select 
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleChange}
                          className="w-full appearance-none px-3 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        >
                          <option value="Super Deluxe Room">Super Deluxe Room</option>
                          <option value="AC Room">AC Room</option>
                          <option value="Non-AC Room">Non-AC Room</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <select 
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full appearance-none pl-10 pr-3 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5+">5+ People</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              
              <div className="p-6 pt-2 mt-auto border-t border-border/50 bg-background/50 flex justify-end gap-3">
                <Button variant="ghost" onClick={onClose} type="button">
                  Cancel
                </Button>
                <Button 
                  variant="gold" 
                  type="submit" 
                  form="booking-form"
                  disabled={isSubmitting}
                  className="min-w-[140px]"
                >
                  {isSubmitting ? "Processing..." : "Confirm Request"}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
