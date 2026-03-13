import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Rooms } from "@/components/sections/Rooms";
import { Amenities } from "@/components/sections/Amenities";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { BookingModal } from "@/components/BookingModal";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");

  const handleOpenBooking = (roomName: string = "") => {
    setSelectedRoom(roomName);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar onBookClick={() => handleOpenBooking()} />
      
      <main className="flex-grow">
        <Hero onBookClick={() => handleOpenBooking()} />
        <About />
        <Rooms onBookClick={handleOpenBooking} />
        <Amenities />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        preselectedRoom={selectedRoom}
      />
    </div>
  );
}
