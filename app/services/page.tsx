"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MotionSection } from "@/components/motion-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedRays } from "@/components/ui/animated-rays";
import { services, processSteps } from "@/lib/site-data";

// Detailed bullet points of technical capabilities for each service
const serviceDetails: Record<string, string[]> = {
  "Audio Systems": [
    "High-Performance Concert Line Arrays",
    "Digital Audio Networking (Dante, AVB, Milan)",
    "Room Acoustics Modeling & Predictive Tuning (EASE)",
    "Wireless Microphone Coordination & Frequency Planning",
    "Speech Intelligibility Optimization (STI-PA)"
  ],
  "Video Systems": [
    "High-Definition & 4K LED Video Wall Modules",
    "Large-Scale Projector Systems & Blending Mapping",
    "Multi-Destination Video Distribution (SDVoE, NDI)",
    "Broadcast Video Switchers & PTZ Camera Systems",
    "Digital Signage & Stage Monitoring Displays"
  ],
  "Lighting Design": [
    "Intelligent & Theatrical Moving Fixtures",
    "Architectural & House Light Dimming Integration",
    "DMX, sACN & ArtNet Network Control Integration",
    "Professional Control Consoles & Touch Panels",
    "Rigging, Pipes & Custom Truss Architectures"
  ],
  "System Integration": [
    "Unified Control Orchestration (Q-SYS, Crestron, AMX)",
    "Structured Low-Voltage Audio/Video Cable Infrastructure",
    "Equipment Rack Configuration, Ventilation & Dressing",
    "Network Infrastructure & Isolated AV VLAN Routing",
    "Custom Integrated Touchscreen GUI Interfaces"
  ],
  "Live Event Production": [
    "Broadcast Quality Live Streaming & Multi-Casting",
    "On-Site Engineers (FOH, Monitors, Video Directors)",
    "Temporary Rigging, Ground Support & Power Distribution",
    "Hybrid Event Webcasting & Virtual Meeting Routing",
    "Post-Production Multi-Track Audio Remixing"
  ],
  "Technical Support": [
    "CTS-Certified Support Engineers on SLA Agreements",
    "Proactive Remote Equipment Health Monitoring",
    "Custom Operator & Volunteer Onboarding Training Days",
    "On-Site Repair Dispatch & Hot-Swap Loaner Gear",
    "Lifecycle Upgrades & Technical Auditing"
  ]
};

export default function ServicesPage() {
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
              Our Capabilities
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Professional AVL{" "}
              <span className="text-[#5A8DFF]">Systems Integration.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75 sm:text-xl">
              From initial acoustics consulting to final technical commissioning, 
              we construct seamless, state-of-the-art experiences for your audience.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#services-grid">
                  Explore Capabilities
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <a href="#process">
                  Our Process
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Breakdown */}
      <MotionSection id="services-grid" className="px-5 py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">
              Technical Expertise
            </p>
            <h2 className="text-balance text-3xl font-black tracking-tight text-primary sm:text-4xl">
              Complete Integrated Solutions
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We design and coordinate every layer of technology under one roof to ensure maximum compatibility and zero operational bottlenecks.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const bullets = serviceDetails[service.title] || [];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                >
                  <Card className="group h-full border border-slate-200 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                    <CardContent className="flex flex-col h-full p-8">
                      <div className="flex gap-4 items-center mb-6">
                        <div className="grid size-12 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-primary transition-colors group-hover:border-accent/40 group-hover:bg-accent/5 group-hover:text-accent">
                          <service.icon className="size-6" />
                        </div>
                        <h3 className="text-lg font-black tracking-tight text-primary">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm leading-6 text-slate-600 mb-6">
                        {service.description}
                      </p>

                      <div className="border-t border-slate-100 pt-6 mt-auto">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                          Technical Specs Include:
                        </h4>
                        <ul className="space-y-3">
                          {bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                              <CheckCircle2 className="size-4 shrink-0 text-accent mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </MotionSection>

      {/* Process Section */}
      <section id="process" className="bg-primary text-white py-24 px-5 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">
              Our Process
            </p>
            <h2 className="text-balance text-3xl font-black tracking-tight sm:text-4xl">
              From Discovery to Operational Support
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              We apply a rigorous, lifecycle-based execution plan for every project, ensuring timelines are met and requirements are exceeded.
            </p>
          </div>

          <div className="relative grid gap-5 md:grid-cols-3 lg:grid-cols-3">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/20 lg:block" />
            {processSteps
              .filter((step) => ["01", "04", "07"].includes(step.number))
              .map((step, index) => (
                <div key={step.title} className="relative text-center">
                  <div className="mx-auto grid size-16 place-items-center rounded-full border-8 border-primary bg-accent text-sm font-black text-primary shadow-glow">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <step.icon className="mx-auto mt-5 size-6 text-accent" />
                  <h3 className="mt-3 text-sm font-black text-white">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-36 text-xs leading-5 text-white/70">
                    {step.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl rounded-lg bg-[linear-gradient(135deg,#112D57,#0A1D3C_54%,#173F75)] p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-accent">
                System Audit
              </p>
              <h2 className="text-balance text-3xl font-black tracking-tight sm:text-5xl">
                Ready to review your current AVL footprint?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                We offer detailed space testing, coverage mapping, and equipment audit checks. Get in touch with our design engineers.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="mailto:info@avlsolutions.com">
                  Start a Project
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <a href="tel:+18001234567">Call (800) 123-4567</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
