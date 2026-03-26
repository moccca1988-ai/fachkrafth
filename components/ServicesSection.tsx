'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Personalvermittlung",
    description: "Gezielte Identifikation und Gewinnung von Fachkräften für Festanstellungen. Wir finden Köpfe, die bleiben."
  },
  {
    title: "Executive Search",
    description: "Diskrete Ansprache von Führungspersönlichkeiten auf C-Level und im gehobenen Management."
  },
  {
    title: "Social Recruiting",
    description: "Performance-basiertes Recruiting in digitalen Netzwerken. Wir erreichen Talente dort, wo sie sich bewegen."
  },
  {
    title: "Interim Management",
    description: "Flexible Besetzung kritischer Positionen durch erfahrene Experten für zeitlich begrenzte Projekte."
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 md:py-36 bg-[var(--color-brand-bg)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 glass-premium text-[var(--color-brand-accent)] text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-8">
              Unsere Leistungen
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-[var(--color-brand-ink)] leading-[0.9]">
              Exzellenz im <br />
              <span className="gradient-text">Recruiting.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-12 glass-premium rounded-[3rem] hover:bg-[var(--color-brand-accent)]/5 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-8 h-8 text-[var(--color-brand-accent)]" />
              </div>
              <div className="w-16 h-16 glass-accent rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 text-[var(--color-brand-accent)]">
                <span className="text-2xl font-black">{index + 1}</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-[var(--color-brand-ink)] mb-6 group-hover:text-[var(--color-brand-accent)] transition-colors">
                {service.title}
              </h3>
              <p className="text-xl text-[var(--color-brand-muted)] leading-relaxed max-w-md">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
