'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const vorteile = [
  {
    title: "Präzises Matching",
    description: "Unsere KI-gestützten Algorithmen finden nicht nur Fachkräfte, sondern die perfekte Ergänzung für Ihr Team.",
    className: "md:col-span-2 md:row-span-2 bg-[var(--color-brand-ink)] text-[var(--color-brand-bg)]",
    icon: "🎯"
  },
  {
    title: "Schnelle Besetzung",
    description: "Reduzieren Sie Ihre Time-to-Hire um bis zu 60% durch unseren optimierten Prozess.",
    className: "md:col-span-1 md:row-span-1 bg-blue-50 text-[var(--color-brand-ink)]",
    icon: "⚡"
  },
  {
    title: "Geprüfte Qualität",
    description: "Jeder Kandidat durchläuft einen mehrstufigen Validierungsprozess.",
    className: "md:col-span-1 md:row-span-2 bg-[var(--color-brand-surface)] text-[var(--color-brand-ink)]",
    icon: "✅"
  },
  {
    title: "Exklusiver Pool",
    description: "Zugang zu passiven Kandidaten, die auf herkömmlichen Portalen nicht zu finden sind.",
    className: "md:col-span-1 md:row-span-1 bg-white border border-[var(--color-brand-border)] text-[var(--color-brand-ink)]",
    icon: "💎"
  }
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-[var(--color-brand-bg)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-brand-accent)] mb-4">
            Ihre Vorteile
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-brand-ink)]">
            Warum Fachkrafthaus?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {vorteile.map((vorteil, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "p-8 rounded-[2rem] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden relative",
                vorteil.className
              )}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">{vorteil.icon}</div>
              <div>
                <h4 className="text-xl font-bold mb-2">{vorteil.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed">{vorteil.description}</p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
