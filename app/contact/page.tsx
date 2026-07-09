"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion-section";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-primary flex flex-col justify-between">
      <div>
        <Navbar />
        
        {/* Contact Page Header */}
        <section className="bg-[#061a36] text-white pt-36 pb-20 px-5 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 blueprint-grid" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-accent mb-3">
              Get In Touch
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Let's Discuss Your Event
            </h1>
            <p className="mt-4 text-base text-white/70 max-w-xl mx-auto leading-relaxed">
              Tell me about your upcoming event on Maui. I'll help you select the right audio, video, 
              and lighting gear and put together a customized rental quote.
            </p>
          </div>
        </section>

        {/* Contact Content Section */}
        <MotionSection className="px-5 py-20 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
              
              {/* Info Block */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary sm:text-3xl">
                  Maui's Local Event Rental Partner
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Whether you are planning a wedding, corporate meeting, community gathering, 
                  or live music performance, I provide technical care and reliable setup so your event runs smoothly.
                </p>
                
                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="grid size-10 place-items-center rounded-md bg-slate-50 border border-slate-200 text-accent shadow-sm">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</p>
                      <a href="mailto:info@alohaavl.com" className="text-sm font-bold text-primary hover:text-accent transition">
                        info@alohaavl.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="grid size-10 place-items-center rounded-md bg-slate-50 border border-slate-200 text-accent shadow-sm">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Service Area</p>
                      <p className="text-sm font-bold text-primary">Maui, HI (Delivery, Setup & Support)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 rounded-xl border border-dashed border-slate-200 bg-slate-50">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary">Technical Setup Included</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    All rentals include custom system configuration, delivery, professional setup, testing, and retrieval. 
                    I make sure everything sounds and looks exceptional before your guests arrive.
                  </p>
                </div>
              </div>
              
              {/* Interactive Quote Request Form */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
                <ContactForm />
              </div>

            </div>
          </div>
        </MotionSection>
      </div>
      <Footer />
    </main>
  );
}

function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-8 text-center shadow-sm">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
          <Sparkles className="size-6" />
        </div>
        <h3 className="text-lg font-bold text-emerald-800">Request Sent Successfully!</h3>
        <p className="mt-2 text-sm leading-6 text-emerald-600">
          Mahalo! I will review your rental request details and get back to you with a custom quote shortly.
        </p>
        <Button onClick={() => setFormSubmitted(false)} className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder="First & Last Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-primary outline-none focus:border-accent"
        />
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-primary outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Event Date (Optional)
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-primary outline-none focus:border-accent"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          What equipment do you need?
        </label>
        <textarea
          id="details"
          rows={4}
          required
          placeholder="E.g., sound system for 100 people, wireless microphone, stage lighting..."
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-primary outline-none focus:border-accent"
        />
      </div>
      
      <Button type="submit" className="w-full bg-accent text-accent-foreground font-bold hover:bg-[#df7c1d]">
        Request Rental Quote
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </form>
  );
}
