"use client";

import { motion } from "framer-motion";

import { stats } from "@/lib/site-data";

export function AnimatedStats() {
  return (
    <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="rounded-lg border border-white/14 bg-white/7 p-6 text-center backdrop-blur"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.55 }}
        >
          <p className="text-4xl font-black tracking-tight sm:text-5xl">
            {stat.value}
          </p>
          <p className="mt-2 text-sm text-white/62">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
