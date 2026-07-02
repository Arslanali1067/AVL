"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import { projects } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function ProjectsCarousel() {
  return (
    <section
      id="projects"
      className="bg-[linear-gradient(135deg,#061A36,#112D57)] px-5 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-accent">
            Featured Projects
          </p>
          <h2 className="text-3xl font-black tracking-tight">Our Latest Work</h2>
          <p className="mt-4 text-sm leading-7 text-white/68">
            Delivering exceptional experiences through thoughtful technology,
            disciplined engineering and precise field execution.
          </p>
          <Button asChild variant="outline" className="mt-8">
            <a href="#contact">
              View All Projects
              <ArrowRight />
            </a>
          </Button>
        </motion.div>

        <div>
          <div className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="min-w-[280px] overflow-hidden rounded-lg border border-white/14 bg-white/8 shadow-soft backdrop-blur sm:min-w-[360px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className={`h-48 bg-cover ${project.image}`} />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-2 min-h-12 text-lg font-black">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 text-sm text-white/62">
                    <MapPin className="size-4" />
                    {project.location}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-accent"
                  >
                    Case Study
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <Button size="icon" variant="outline" aria-label="Previous project">
              <ChevronLeft />
            </Button>
            <Button size="icon" variant="outline" aria-label="Next project">
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
