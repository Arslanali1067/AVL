"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight, Sparkles } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { AnimatedRays } from "@/components/ui/animated-rays";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Background blueprint animation
      gsap.to(".blueprint-bg", {
        backgroundPosition: "64px 64px",
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      // Hero Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-logo", { opacity: 0, y: 20, duration: 0.8, delay: 0.2 })
        .from(".hero-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
        .from(".hero-btn", { opacity: 0, scale: 0.9, duration: 0.6, ease: "back.out(1.5)" }, "-=0.6");

      // Continuous float animation for icons
      gsap.to(".float-icon", {
        y: -4,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      // Pulse animation for the live dot
      gsap.to(".pulse-dot", {
        scale: 1.5,
        opacity: 0.3,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Who I Am - ScrollTrigger
      gsap.from(".who-text > *", {
        scrollTrigger: {
          trigger: "#who-i-am",
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".who-card", {
        scrollTrigger: {
          trigger: "#who-i-am",
          start: "top 65%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Feature items inside the card
      gsap.from(".who-feature", {
        scrollTrigger: {
          trigger: ".who-card",
          start: "top 80%",
        },
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      });
      
      // Interactive hover for feature items
      const features = gsap.utils.toArray(".who-feature");
      features.forEach((feature: any) => {
        const icon = feature.querySelector(".feature-icon");
        feature.addEventListener("mouseenter", () => {
          gsap.to(icon, { scale: 1.2, rotation: 5, duration: 0.3, ease: "back.out(2)" });
        });
        feature.addEventListener("mouseleave", () => {
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" });
        });
      });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="min-h-screen overflow-hidden bg-[#F8F9FB] text-primary">
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

      <div
        aria-hidden
        className="blueprint-bg blueprint-grid blueprint-lines absolute inset-0 opacity-40"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="flex flex-col items-center">
          <div className="hero-logo mb-6 flex justify-center">
            <img
              src="/aloha-avl-hero-logo.png"
              alt="Aloha AVL Logo"
              className="h-24 w-auto object-contain brightness-110 drop-shadow-glow sm:h-28"
            />
          </div>

          <h1 className="hero-title text-balance text-4xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Everything done with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-accent bg-clip-text text-transparent drop-shadow-sm">
              ALOHA
            </span>
            , everytime.
          </h1>

          <p className="hero-desc mt-6 max-w-xl px-2 text-sm leading-7 text-white/75 sm:mt-8 sm:max-w-2xl sm:px-0 sm:text-lg sm:leading-8">
            Reliable audio, video, and lighting rentals backed by technical expertise,
            high-quality gear, and genuine local service for Maui events.
          </p>

          <div className="hero-btn mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="group w-full px-8 font-bold transition-all hover:scale-105 sm:w-auto">
              <a href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
}

function WhoIAmSection() {
  return (
    <section id="who-i-am" className="bg-white px-5 py-20 scroll-mt-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* LEFT: Text */}
          <div className="who-text">
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
          </div>

          {/* RIGHT: Simple dark card */}
          <div className="who-card rounded-2xl bg-[#061a36] p-7 sm:p-8 shadow-xl">
            <div className="space-y-4">
              {[
                { icon: "🎵", title: "Audio", desc: "Crystal-clear PA systems & monitors" },
                { icon: "📽️", title: "Video", desc: "Projectors, screens & LED displays" },
                { icon: "💡", title: "Lighting", desc: "Stage wash, uplighting & effects" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="who-feature flex cursor-default items-center gap-4 rounded-xl bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                >
                  <span className="feature-icon inline-block text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="text-xs text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="flex items-center gap-1.5 text-xs text-white/40">
                <span className="pulse-dot h-2 w-2 rounded-full bg-green-400" />
                Available for bookings
              </span>
              <span className="text-xs text-white/40">Maui, Hawaiʻi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
