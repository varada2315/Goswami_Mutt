import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Rooms } from "@/components/sections/Rooms";
import { Amenities } from "@/components/sections/Amenities";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

const WHATSAPP_NUMBER = "918505904123";
const CONTACT_PHONE = "+918505904123";

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

      <div className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50">
        <a
          href={`tel:${CONTACT_PHONE}`}
          aria-label="Call Goswami Mutt"
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <FaPhoneAlt className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      </div>

      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          type="button"
          onClick={() => openWhatsApp()}
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
      </div>
    </div>
  );
}
