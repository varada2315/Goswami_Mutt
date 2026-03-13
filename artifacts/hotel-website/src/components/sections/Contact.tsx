import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-secondary/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-4">
                <span className="w-8 h-0.5 bg-primary"></span>
                <span className="text-primary font-medium tracking-wider uppercase text-sm">Reach Out</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Have questions or need assistance? We're always here to help make your stay perfect.
              </p>
            </div>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-background border border-border shadow-sm flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Our Location</h4>
                  <a
                    href="https://share.google/iDCs58GqxOiISGaVf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground leading-relaxed hover:text-primary transition-colors underline underline-offset-4"
                  >
                    Goswami Mutt, Rameshwaram,<br />
                    Tamil Nadu, India
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-background border border-border shadow-sm flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Phone Number</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    <a href="tel:+918505904123" className="hover:text-primary transition-colors">+91 85059 04123</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-card p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-border/50"
          >
            <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</label>
                  <input 
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                  <input 
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <input 
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  placeholder="Inquiry about group booking"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Your Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                  placeholder="How can we help you today?"
                />
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                size="lg" 
                className="w-full text-base py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
