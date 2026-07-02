"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, MonitorPlay, Volume2, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatedRays } from "@/components/ui/animated-rays";

const capabilities = [
  { label: "Audio", description: "Crystal clear sound", icon: Volume2 },
  { label: "Video", description: "Stunning visuals", icon: MonitorPlay },
  { label: "Lighting", description: "Dynamic lighting", icon: Lightbulb },
  { label: "Live Production", description: "Exceptional events", icon: Video },
];

export function BlueprintHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061a36] px-5 pb-40 pt-32 text-white sm:pt-36 lg:pb-36">
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
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-accent">
            Professional AVL Solutions
          </p>
          <h1 className="text-balance max-w-3xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Technology That Transforms{" "}
            <span className="text-[#5A8DFF]">Every Space.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            We design, install, integrate and support professional audio, video,
            lighting and control systems that create unforgettable experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#contact">
                Get a Quote
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">
                Explore Projects
                <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-3 gap-4 text-xs font-bold text-white/72">
            <span>20+ Years of Excellence</span>
            <span>500+ Projects Delivered</span>
            <span>98% Client Satisfaction</span>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[480px] flex items-center justify-end"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12 }}
        >
          {/* Stage Image Container with glowing highlight brackets */}
          <div className="relative w-[82%] h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#091d3b] shadow-glow">
            <img
              src="/hero-stage.png"
              alt="Live Production Stage"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay to ensure text readability on overlapping cards */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061a36]/80 via-[#061a36]/20 to-transparent pointer-events-none" />
            
            {/* Corner glowing line braces */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/40 rounded-tl-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-400/40 rounded-br-2xl pointer-events-none" />
          </div>

          {/* Overlapping Capability Cards with dashed line connections */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pl-8 flex flex-col gap-4">
            {/* Vertical connector dashed line */}
            <div className="absolute left-[12px] top-8 bottom-8 w-[1px] border-l border-dashed border-blue-400/30 pointer-events-none" />

            {capabilities.map((item, index) => (
              <motion.div
                key={item.label}
                className="relative flex w-60 items-center gap-4 rounded-xl border border-white/10 bg-[#061a36]/80 p-3.5 shadow-soft backdrop-blur-xl hover:border-blue-400/30 transition duration-300"
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.1 }}
              >
                {/* Horizontal branch line from the vertical connector */}
                <div className="absolute -left-[20px] top-1/2 w-[20px] h-[1px] border-t border-dashed border-blue-400/30 -translate-y-1/2 pointer-events-none" />

                <div className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/5 text-blue-300">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white tracking-wide">{item.label}</p>
                  <p className="text-xs text-white/60 mt-0.5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
