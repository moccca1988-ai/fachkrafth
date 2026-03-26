'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Target, 
  Zap, 
  BarChart3, 
  Search, 
  Globe,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

const items = [
  {
    title: 'KI-Matching',
    description: 'Präzise Kandidatenauswahl durch modernste Algorithmen.',
    icon: <Target className="w-6 h-6 text-[var(--color-brand-accent)]" />,
    className: 'col-span-2 row-span-1 glass-premium',
    delay: 0.1
  },
  {
    title: 'DACH Netzwerk',
    description: 'Exklusiver Zugriff auf Top-Talente in der Region.',
    icon: <Globe className="w-6 h-6 text-[var(--color-brand-secondary)]" />,
    className: 'col-span-1 row-span-1 glass-premium',
    delay: 0.2
  },
  {
    title: 'Speed',
    description: 'Besetzung in Rekordzeit.',
    icon: <Zap className="w-6 h-6 text-[var(--color-brand-accent)]" />,
    className: 'col-span-1 row-span-1 glass-accent',
    delay: 0.3
  },
  {
    title: 'Analytics',
    description: 'Echtzeit-Einblicke in Ihren Recruiting-Prozess.',
    icon: <BarChart3 className="w-6 h-6 text-[var(--color-brand-secondary)]" />,
    className: 'col-span-1 row-span-1 glass-premium',
    delay: 0.4
  },
  {
    title: 'Headhunting',
    description: 'Direkte und diskrete Ansprache von passiven Kandidaten.',
    icon: <Search className="w-6 h-6 text-[var(--color-brand-accent)]" />,
    className: 'col-span-2 row-span-1 glass-premium',
    delay: 0.5
  },
  {
    title: 'Talent Pool',
    description: 'Über 1.2k+ verifizierte Fachkräfte.',
    icon: <Users className="w-6 h-6 text-[var(--color-brand-secondary)]" />,
    className: 'col-span-1 row-span-1 glass-premium',
    delay: 0.6
  }
];

export function BentoGrid() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-[var(--color-brand-bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[var(--color-brand-ink)] mb-6 leading-tight">
              Intelligente Lösungen für <span className="gradient-text">modernes Recruiting.</span>
            </h2>
            <p className="text-lg text-[var(--color-brand-muted)]">
              Wir kombinieren technologische Exzellenz mit tiefem Marktverständnis, um Ihre Recruiting-Ziele effizient zu erreichen.
            </p>
          </div>
          <Link 
            href="/unternehmen" 
            className="group flex items-center gap-2 text-[var(--color-brand-accent)] font-bold uppercase tracking-widest text-xs"
          >
            Alle Leistungen ansehen
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className={`p-12 rounded-[3rem] flex flex-col justify-between group hover:scale-[1.02] transition-all duration-500 ${item.className}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-accent)]/5 flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-accent)]/10 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-brand-ink)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-brand-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
