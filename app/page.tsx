"use client";

import { ArrowRight, ChevronRight } from "lucide-react";

import { AnimatedStats } from "@/components/animated-stats";
import { BlueprintHero } from "@/components/blueprint-hero";
import { MotionSection } from "@/components/motion-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  clients,
  industries,
  processSteps,
  services,
  testimonials,
  whyPoints,
} from "@/lib/site-data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F9FB] text-primary">
      <Navbar />
      <BlueprintHero />
      <ClientsStrip />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessTimeline />
      <IndustriesGrid />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}


function ClientsStrip() {
  return (
    <section aria-label="Trusted clients" className="relative z-10 -mt-28 sm:-mt-24 md:-mt-12 px-5">
      <div className="mx-auto max-w-7xl rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <div className="grid items-center gap-5 md:grid-cols-[190px_1fr]">
          <p className="text-xs font-bold uppercase leading-relaxed tracking-[0.18em] text-slate-500">
            Trusted by organizations across the region
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-14 items-center justify-center rounded-md border border-slate-100 bg-slate-50 px-3 text-center text-sm font-bold text-slate-500"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className={`text-balance text-3xl font-black tracking-tight sm:text-4xl ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {copy ? (
        <p className={`mt-4 text-base leading-7 ${light ? "text-white/70" : "text-slate-600"}`}>{copy}</p>
      ) : null}
    </div>
  );
}

function ServicesGrid() {
  return (
    <MotionSection id="services" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete AVL Solutions"
          copy="End-to-end strategy, engineering, installation and support from one integrated expert team."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-slate-200 bg-white/88 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-slate-300"
            >
              <CardContent className="flex gap-5 p-7">
                <div className="grid size-12 shrink-0 place-items-center rounded-md border border-slate-200 bg-white text-primary transition group-hover:border-accent/50 group-hover:text-accent">
                  <service.icon />
                </div>
                <div>
                  <h3 className="font-bold text-primary">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function WhyChooseUs() {
  return (
    <section className="px-5 pb-24" id="why">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-primary text-white shadow-soft">
        <div className="blueprint-grid blueprint-lines relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-16">
          <div className="relative z-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-accent">
              Why Choose Us
            </p>
            <h2 className="text-balance text-3xl font-black tracking-tight sm:text-4xl">
              One partner. Every technology. Complete confidence.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
              We align design, procurement, installation and support under one
              accountable team so your space performs on day one and year five.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <a href="#process">
                Our Process
                <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="relative z-10 grid gap-4 sm:grid-cols-2">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-lg border border-white/14 bg-white/7 p-6 backdrop-blur"
              >
                <point.icon className="mb-5 size-9 text-accent" />
                <h3 className="text-lg font-black">{point.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          <AnimatedStats />
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <MotionSection id="process" className="px-5 pb-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Process"
          title="A Proven Process. Exceptional Results."
        />
        <div className="relative grid gap-5 md:grid-cols-3 lg:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-slate-200 lg:block" />
          {processSteps
            .filter((step) => ["01", "04", "07"].includes(step.number))
            .map((step, index) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto grid size-16 place-items-center rounded-full border-8 border-[#F8F9FB] bg-blue-700 text-sm font-black text-white shadow-glow">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <step.icon className="mx-auto mt-5 size-6 text-primary" />
                <h3 className="mt-3 text-sm font-black">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-36 text-xs leading-5 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </MotionSection>
  );
}

function IndustriesGrid() {
  return (
    <MotionSection id="industries" className="bg-[linear-gradient(135deg,#061A36,#112D57)] text-white px-5 py-24 border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for Every Environment"
          light={true}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <a
              key={industry.title}
              href="#contact"
              className="group overflow-hidden rounded-lg border border-white/10 bg-[#061a36]/40 shadow-soft transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div
                className="h-36 bg-cover bg-center relative transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(6, 26, 54, 0.2) 0%, rgba(6, 26, 54, 0.6) 100%), url(${industry.image})`
                }}
              />
              <div className="relative z-10 flex items-center bg-[#061a36]/75 p-4 text-white">
                <span className="flex items-center gap-3 text-sm font-bold">
                  <industry.icon className="size-5 text-accent" />
                  {industry.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function Testimonials() {
  return (
    <MotionSection className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What Our Clients Say"
          title="Trusted by Leaders"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white shadow-sm">
              <CardContent className="p-7">
                <div className="text-5xl font-black leading-none text-blue-700">
                  “
                </div>
                <p className="mt-1 min-h-24 text-sm leading-7 text-slate-600">
                  {testimonial.quote}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-full bg-primary text-sm font-black text-white">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-black">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function CTASection() {
  return (
    <section id="contact" className="px-5 pb-24">
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
              Share your goals, site constraints and timeline. We will map the
              right audio, video, lighting and control approach for your space.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="mailto:info@avlsolutions.com">
                Start a Project
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+18001234567">Call (800) 123-4567</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

