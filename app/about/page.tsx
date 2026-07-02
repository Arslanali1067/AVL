"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Users,
  Compass,
  Zap,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MotionSection } from "@/components/motion-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedRays } from "@/components/ui/animated-rays";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F9FB] text-primary">
      <Navbar />
      
      {/* Premium Hero Section */}
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
              About Aloha AVL
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Engineering The Future of{" "}
              <span className="text-[#5A8DFF]">Live Spaces.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75 sm:text-xl">
              We combine scientific precision, creative design, and absolute system integrity 
              to engineer audio, video, lighting, and acoustics that inspire and perform.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#story">
                  Our Story
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <a href="#team">
                  Meet the Team
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <MotionSection id="story" className="px-5 py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">
                Our Heritage
              </p>
              <h2 className="text-balance text-3xl font-black tracking-tight text-primary sm:text-4xl">
                Built on a foundation of performance and reliability.
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-600">
                For over two decades, Aloha AVL has design-engineered space-transforming integrations. 
                What started as a specialized sound tuning consultancy has grown into a leading, 
                full-service AVL integration partner serving houses of worship, corporate offices, 
                educational campuses, performing arts centers, and government facilities across the country.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We believe that technology should be transparent. A truly great AVL system doesn't call 
                attention to its complexity; it elevates the message, clarifies the performance, and 
                empowers the team operating it to focus on what matters most.
              </p>

              {/* High-impact numbers */}
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-4xl font-black text-blue-700">20+</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-blue-700">500+</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">Projects Commissioned</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-blue-700">98%</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">Customer Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Visual representation of an engineered schematic / stage grid */}
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-white shadow-soft overflow-hidden p-6 blueprint-grid relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Simulated blueprint schematic overlay */}
                <div className="h-full w-full border border-dashed border-blue-400/30 rounded-xl relative flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-slate-400">SYS_BLOCK_DIAGRAM_V2.4</span>
                    <span className="text-[10px] font-mono text-slate-400">SCALE: 1:24</span>
                  </div>

                  {/* Interconnected schematic nodes visual */}
                  <div className="flex flex-col gap-6 items-center justify-center py-6">
                    <div className="flex gap-12 items-center justify-center">
                      <div className="rounded border border-blue-500 bg-blue-50 px-3 py-1.5 text-xs font-mono font-bold text-blue-700">
                        AUD_MIXER
                      </div>
                      <div className="w-12 h-px border-t border-dashed border-blue-400 relative">
                        <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-blue-500" />
                      </div>
                      <div className="rounded border border-blue-500 bg-blue-50 px-3 py-1.5 text-xs font-mono font-bold text-blue-700">
                        DSP_PROCESSOR
                      </div>
                    </div>

                    <div className="w-px h-8 border-l border-dashed border-blue-400" />

                    <div className="flex gap-12 items-center justify-center">
                      <div className="rounded border border-accent bg-accent/10 px-3 py-1.5 text-xs font-mono font-bold text-accent">
                        STAGE_AMPS
                      </div>
                      <div className="w-12 h-px border-t border-dashed border-accent relative">
                        <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <div className="rounded border border-accent bg-accent/10 px-3 py-1.5 text-xs font-mono font-bold text-accent">
                        LINE_ARRAY
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[10px] font-mono font-bold text-slate-500">SYSTEMS READY</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">ALOHA AVL LABS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Core Values Section */}
      <section className="bg-primary text-white py-24 px-5">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">
              Our Foundations
            </p>
            <h2 className="text-balance text-3xl font-black tracking-tight sm:text-4xl">
              The Principles That Guide Us
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              We believe in doing things right the first time. We are guided by engineering standards 
              and client support that sets us apart from standard box pushers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-white/10 bg-white/5 backdrop-blur-sm text-white">
              <CardContent className="p-7">
                <div className="grid size-12 place-items-center rounded-lg bg-accent text-accent-foreground mb-6">
                  <Compass className="size-6" />
                </div>
                <h3 className="text-lg font-black tracking-tight">Engineered-First</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  We don't guess, we calculate. Every speaker angle, LED viewing cone, and light placement 
                  is dictated by physics, acoustics, and expert CAD planning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur-sm text-white">
              <CardContent className="p-7">
                <div className="grid size-12 place-items-center rounded-lg bg-accent text-accent-foreground mb-6">
                  <Cpu className="size-6" />
                </div>
                <h3 className="text-lg font-black tracking-tight">Future-Proof Architecture</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Technology changes rapidly. We plan space infrastructure (conduits, networks, racks) 
                  so that upgrading your components in the future is simple and cost-effective.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur-sm text-white">
              <CardContent className="p-7">
                <div className="grid size-12 place-items-center rounded-lg bg-accent text-accent-foreground mb-6">
                  <Users className="size-6" />
                </div>
                <h3 className="text-lg font-black tracking-tight">Operator Empowerment</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  The best system is useless if it is too complex to operate. We customize control 
                  interfaces for non-technical volunteers and train your staff thoroughly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur-sm text-white">
              <CardContent className="p-7">
                <div className="grid size-12 place-items-center rounded-lg bg-accent text-accent-foreground mb-6">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="text-lg font-black tracking-tight">Support-Centered Care</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Our integration does not stop on commissioning day. We provide 24/7 service plans, 
                  remote systems monitoring, and priority on-site response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <MotionSection id="team" className="px-5 py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">
              Meet the Experts
            </p>
            <h2 className="text-balance text-3xl font-black tracking-tight text-primary sm:text-4xl">
              Professional Integration Leadership
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Our team consists of CTS-certified integration engineers, systems architects, 
              acousticians, and live event production specialists.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Team Member 1 */}
            <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-gradient-to-tr from-[#112d57] to-[#2c6eea] text-2xl font-black text-white shadow-soft transition-transform duration-500 group-hover:scale-105">
                MV
              </div>
              <div className="text-center">
                <h3 className="text-lg font-black text-primary">Marcus Vance</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-accent mt-1">Founder & Director</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A veteran of AVL systems with 25+ years of live venue execution and corporate strategy.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-gradient-to-tr from-[#112d57] to-[#f28c28] text-2xl font-black text-white shadow-soft transition-transform duration-500 group-hover:scale-105">
                ER
              </div>
              <div className="text-center">
                <h3 className="text-lg font-black text-primary">Elena Rostova</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-accent mt-1">Principal Systems Architect</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Specializes in room acoustics modeling, digital network structures, and Dante orchestration.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-gradient-to-tr from-[#2c6eea] to-[#2ecc71] text-2xl font-black text-white shadow-soft transition-transform duration-500 group-hover:scale-105">
                SC
              </div>
              <div className="text-center">
                <h3 className="text-lg font-black text-primary">Sarah Chen</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-accent mt-1">Director of Field Operations</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Ensures all structural rigging, electrical integrations, and on-site physical builds meet surgical standards.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-gradient-to-tr from-[#7f8c8d] to-[#112d57] text-2xl font-black text-white shadow-soft transition-transform duration-500 group-hover:scale-105">
                JH
              </div>
              <div className="text-center">
                <h3 className="text-lg font-black text-primary">Jordan Hayes</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-accent mt-1">Client Success Lead</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Coordinates operator training programs, technical SLA updates, and rapid response dispatches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl rounded-lg bg-[linear-gradient(135deg,#112D57,#0A1D3C_54%,#173F75)] p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-accent">
                Ready to build?
              </p>
              <h2 className="text-balance text-3xl font-black tracking-tight sm:text-5xl">
                Let’s design an AVL system your team can trust.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                Whether you need a full space audit, acoustic modeling, or a quote for an upgrade, our engineers are ready to help.
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
