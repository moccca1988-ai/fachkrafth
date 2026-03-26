'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const methoden = [
  {
    title: "Bedarfsanalyse",
    description: "Wir verstehen Ihre Unternehmenskultur und fachlichen Anforderungen bis ins Detail.",
    className: "md:col-span-1 md:row-span-1 bg-white border border-[var(--color-brand-border)] text-[var(--color-brand-ink)]",
    icon: "🔍"
  },
  {
    title: "KI-Sourcing",
    description: "Unser Algorithmus scannt Millionen von Profilen und identifiziert die Top 1% für Ihre Vakanz.",
    className: "md:col-span-2 md:row-span-2 bg-[var(--color-brand-surface)] text-[var(--color-brand-ink)]",
    icon: "🤖"
  },
  {
    title: "Persönliches Interview",
    description: "Wir führen tiefgehende Gespräche, um Soft Skills und Motivation zu prüfen.",
    className: "md:col-span-1 md:row-span-2 bg-[var(--color-brand-ink)] text-[var(--color-brand-bg)]",
    icon: "🗣️"
  },
  {
    title: "Onboarding-Support",
    description: "Wir begleiten den Prozess bis zur erfolgreichen Integration in Ihr Team.",
    className: "md:col-span-1 md:row-span-1 bg-blue-50 text-[var(--color-brand-ink)]",
    icon: "🤝"
  }
];

export function SolutionSection() {
  return (
    <section className="py-24 bg-[var(--color-brand-bg)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-brand-accent)] mb-4">
            Unsere Methoden
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-brand-ink)]">
            Der Weg zum Erfolg
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {methoden.map((methode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "p-8 rounded-[2rem] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden relative",
                methode.className
              )}
            >
              <div className="text-4xl mb-4 group-hover:rotate-12 transition-transform duration-500">{methode.icon}</div>
              <div>
                <h4 className="text-xl font-bold mb-2">{methode.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed">{methode.description}</p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
