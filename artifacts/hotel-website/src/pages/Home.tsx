import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Rooms } from "@/components/sections/Rooms";
import { Amenities } from "@/components/sections/Amenities";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

const WHATSAPP_NUMBER = "918505904123";

export function openWhatsApp(roomName?: string) {
  const message = roomName
    ? `Please send details of ${roomName}`
    : `Hello, I would like to know more about your rooms and availability at Goswami Mutt.`;
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar onBookClick={() => openWhatsApp()} />

      <main className="flex-grow">
        <Hero onBookClick={() => openWhatsApp()} />
        <About />
        <Rooms onBookClick={(roomName) => openWhatsApp(roomName)} />
        <Amenities />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
