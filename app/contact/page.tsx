"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle,
  MapPin,
  MessageSquare,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MotionSection } from "@/components/motion-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedRays } from "@/components/ui/animated-rays";

export default function ContactPage() {
  // Form submission states
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    service: "System Integration",
    budget: "$25k - $100k",
    timeline: "1-3 Months",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F9FB] text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#061a36] px-5 pb-32 pt-32 text-white sm:pt-36 lg:pb-36">
        {/* Animated Light Rays Background */}
        <div className="absolute inset-0 -z-10 opacity-100">
          <AnimatedRays forceDark />
        </div>

        <motion.div
          aria-hidden
          className="blueprint-grid blueprint-lines absolute inset-0 opacity-60"
          animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-accent">
              Get in Touch
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Start Your <span className="text-[#5A8DFF]">Next Project.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75 sm:text-xl">
              Consult with our systems engineers to design, build, or modernize 
              the audio, video, lighting, or controls in your venue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Section */}
      <MotionSection className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.9fr]">
          
          {/* Left Column: Info & Details */}
          <div className="flex flex-col justify-between space-y-10">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">
                Direct Contact
              </p>
              <h2 className="text-balance text-3xl font-black tracking-tight text-primary">
                Reach Our Engineering Office
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Whether you need a general systems layout or have a highly specific technical query, 
                our project planners are ready to connect.
              </p>

              {/* Direct channels links */}
              <div className="mt-8 space-y-6">
                <a href="tel:+18001234567" className="flex items-center gap-4 group">
                  <div className="grid size-12 place-items-center rounded-lg border border-slate-200 bg-white text-primary group-hover:border-accent/40 group-hover:text-accent transition-colors duration-300">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Toll-Free</p>
                    <p className="text-base font-black text-primary group-hover:text-blue-700 transition-colors duration-300">(800) 123-4567</p>
                  </div>
                </a>

                <a href="mailto:info@avlsolutions.com" className="flex items-center gap-4 group">
                  <div className="grid size-12 place-items-center rounded-lg border border-slate-200 bg-white text-primary group-hover:border-accent/40 group-hover:text-accent transition-colors duration-300">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Our Team</p>
                    <p className="text-base font-black text-primary group-hover:text-blue-700 transition-colors duration-300">info@avlsolutions.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-lg border border-slate-200 bg-white text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Main Headquarters</p>
                    <p className="text-base font-black text-primary">Orlando, FL</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-lg border border-slate-200 bg-white text-primary">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Operating Hours</p>
                    <p className="text-base font-black text-primary">Mon - Fri: 8:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA support notice card */}
            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="size-6 text-blue-700 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-blue-900">24/7 SLA Technical Hotline</h4>
                  <p className="mt-2 text-xs leading-5 text-blue-800">
                    SLA contract clients gain access to our critical hotline numbers. Emergency dispatch 
                    and remote diagnostic engineers are available 24/7/365.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div>
            <Card className="border border-slate-200 bg-white shadow-soft">
              <CardContent className="p-8 sm:p-10">
                {isSubmitted ? (
                  /* Success State Panel */
                  <motion.div
                    className="text-center py-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mx-auto grid size-16 place-items-center rounded-full bg-green-50 text-green-600 mb-6">
                      <CheckCircle className="size-10" />
                    </div>
                    <h3 className="text-2xl font-black text-primary">Inquiry Sent Successfully!</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 max-w-md mx-auto">
                      Thank you for submitting your project specs, {formData.name}. Our integration 
                      planners will review your requirements and reach out within 1 business day.
                    </p>
                    <Button 
                      className="mt-8"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          organization: "",
                          email: "",
                          phone: "",
                          service: "System Integration",
                          budget: "$25k - $100k",
                          timeline: "1-3 Months",
                          message: "",
                        });
                      }}
                    >
                      Send Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  /* Project Inquiry Form */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-primary">Project Inquiry Details</h3>
                      <p className="mt-1.5 text-xs text-slate-500">Provide details about your space and requirements to receive a customized quote.</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-primary placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition duration-200"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="organization" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Organization Name *
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          required
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-primary placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition duration-200"
                          placeholder="Church or Company Name"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-primary placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition duration-200"
                          placeholder="johndoe@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-primary placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition duration-200"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-primary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition duration-200"
                        >
                          <option>Audio Systems</option>
                          <option>Video Systems</option>
                          <option>Lighting Design</option>
                          <option>System Integration</option>
                          <option>Live Event Production</option>
                          <option>Technical Support</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Est. Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-primary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition duration-200"
                        >
                          <option>Under $25k</option>
                          <option>$25k - $100k</option>
                          <option>$100k - $250k</option>
                          <option>$250k+</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="timeline" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Desired Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-primary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition duration-200"
                        >
                          <option>Immediate</option>
                          <option>1-3 Months</option>
                          <option>3-6 Months</option>
                          <option>6+ Months</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Project Scope Details / Notes
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-primary placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition duration-200 resize-none"
                        placeholder="Tell us about your space size, constraints, or equipment preferences..."
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full justify-center">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          Sending Specs...
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Submit Project Inquiry
                          <Send className="size-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </MotionSection>

      {/* Trust elements badges strip */}
      <section className="bg-slate-100 border-y border-slate-200 py-10 px-5">
        <div className="mx-auto max-w-7xl grid gap-8 sm:grid-cols-3 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="size-8 text-accent mb-3" />
            <h4 className="text-sm font-black text-primary">CTS Certified Integrators</h4>
            <p className="mt-1.5 text-xs text-slate-500 max-w-xs">All our field installation and diagnostic leads hold advanced CTS and CTS-I certifications.</p>
          </div>
          <div className="flex flex-col items-center">
            <MessageSquare className="size-8 text-accent mb-3" />
            <h4 className="text-sm font-black text-primary">Free Pre-Design Consultation</h4>
            <p className="mt-1.5 text-xs text-slate-500 max-w-xs">We provide initial space assessments and conceptual consultations free of charge.</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="size-8 text-accent mb-3" />
            <h4 className="text-sm font-black text-primary">Fully Licensed & Insured</h4>
            <p className="mt-1.5 text-xs text-slate-500 max-w-xs">Complete bonding, structural rigging licensure, and commercial general liabilities protection.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
