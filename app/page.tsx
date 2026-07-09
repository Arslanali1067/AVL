"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { AnimatedRays } from "@/components/ui/animated-rays";
import { MotionSection } from "@/components/motion-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F9FB] text-primary">
      <Navbar />
      <HeroSection />
      <WhoIAmSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061a36] px-5 pb-28 pt-28 text-white sm:pb-36 sm:pt-40 lg:pb-44">
      <div className="absolute inset-0 -z-10 opacity-90">
        <AnimatedRays forceDark />
      </div>

      <motion.div
        aria-hidden
        className="blueprint-grid blueprint-lines absolute inset-0 opacity-40"
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 flex justify-center">
            <img
              src="/aloha-avl-hero-logo.png"
              alt="Aloha AVL Logo"
              className="h-24 w-auto object-contain brightness-110 drop-shadow-glow sm:h-28"
            />
          </div>

          <h1 className="text-balance text-4xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Everything done with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-accent bg-clip-text text-transparent drop-shadow-sm">
              ALOHA
            </span>
            , everytime.
          </h1>

          <p className="mt-6 max-w-xl px-2 text-sm leading-7 text-white/75 sm:mt-8 sm:max-w-2xl sm:px-0 sm:text-lg sm:leading-8">
            Reliable audio, video, and lighting rentals backed by technical expertise,
            high-quality gear, and genuine local service for Maui events.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full px-8 font-bold sm:w-auto">
              <a href="/contact">
                Request a Quote
                <ArrowRight />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs font-semibold text-white/60 sm:gap-x-8">
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-accent" /> Maui, HI Delivery &amp; Setup
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Professional Support Included</span>
            <span className="hidden sm:inline">•</span>
            <span>Tailored for Any Crowd Size</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhoIAmSection() {
  return (
    <MotionSection id="who-i-am" className="bg-white px-5 py-20 scroll-mt-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-black leading-snug tracking-tight text-primary sm:text-4xl">
              Passion for the Sound,{" "}
              <span className="text-accent">Care for the Community.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-500">
              <p>
                Music has been a lifelong passion of mine, giving me firsthand experience with what it
                takes to make live events sound and feel exceptional.
              </p>
              <p>
                After years of performing and working in live production, I founded Aloha AVL to provide
                reliable audio, video, and lighting rentals backed by technical expertise, quality
                equipment, and genuine local service.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Simple dark card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-2xl bg-[#061a36] p-7 sm:p-8">
              <div className="space-y-4">
                {[
                  { icon: "🎵", title: "Audio", desc: "Crystal-clear PA systems & monitors" },
                  { icon: "📽️", title: "Video", desc: "Projectors, screens & LED displays" },
                  { icon: "💡", title: "Lighting", desc: "Stage wash, uplighting & effects" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-xl bg-white/5 px-4 py-3"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-xs text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="flex items-center gap-1.5 text-xs text-white/40">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  Available for bookings
                </span>
                <span className="text-xs text-white/40">Maui, Hawaiʻi</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </MotionSection>
  );
}
