'use client';

import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { Sparkles, Send, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Passende Jobs automatisch",
    description: "Kein Suchen mehr. Wir schlagen dir nur Jobs vor, die wirklich zu deinen Skills und Wünschen passen."
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: "Kein Bewerbungsstress",
    description: "Einmal Profil erstellen, mehrfach profitieren. Wir stellen dich den Unternehmen direkt vor."
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Direkte Kontakte",
    description: "Überspringe langwierige Portale und erhalte direkten Zugang zu Entscheidern in Top-Unternehmen."
  }
];

export default function BewerberPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--color-brand-bg)] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-[var(--color-brand-border)] -z-0 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-accent)] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                <Sparkles className="w-3 h-3" />
                <span>Für Talente & Fachkräfte</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-[var(--color-brand-ink)] mb-8 leading-[0.95]">
                Dein nächster <br /> 
                <span className="italic font-light text-[var(--color-brand-muted)]">Karriereschritt</span> wartet
              </h1>
              <p className="text-xl text-[var(--color-brand-muted)] mb-10 leading-relaxed max-w-xl">
                Hör auf zu suchen, lass dich finden. Fachkrafthaus bringt dich mit den attraktivsten Arbeitgebern der DACH-Region zusammen – diskret und auf Augenhöhe.
              </p>
              <Link
                href="/kontakt"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-[var(--color-brand-ink)] text-[var(--color-brand-bg)] text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Profil erstellen</span>
                <ArrowRight className="relative z-10 ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-[var(--color-brand-accent)] translate-y-full transition-transform group-hover:translate-y-0" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="glass-premium border border-[var(--color-brand-border)] p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-[var(--color-brand-border)] opacity-50" />
                <div className="space-y-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-6 p-6 border border-[var(--color-brand-border)] bg-[var(--color-brand-bg)]/50 hover:border-[var(--color-brand-accent)] transition-colors">
                      <div className="w-12 h-12 border border-[var(--color-brand-border)] flex items-center justify-center text-[var(--color-brand-ink)]">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-[var(--color-brand-ink)]/20 mb-3" />
                        <div className="h-2 w-32 bg-[var(--color-brand-ink)]/10" />
                      </div>
                      <div className="px-3 py-1 border border-[var(--color-brand-accent)]/30 text-[var(--color-brand-accent)] text-[10px] font-bold uppercase tracking-wider">98% Match</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[var(--color-brand-bg)] border-y border-[var(--color-brand-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-[var(--color-brand-ink)] mb-6">
              Warum Fachkrafthaus <br /> für dich?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-[var(--color-brand-border)]">
            {features.map((feature, index) => (
              <div key={index} className="p-12 border-r border-b border-[var(--color-brand-border)] group hover:bg-[var(--color-brand-surface)] transition-colors">
                <div className="w-12 h-12 border border-[var(--color-brand-border)] text-[var(--color-brand-ink)] flex items-center justify-center mb-8 group-hover:border-[var(--color-brand-accent)] group-hover:text-[var(--color-brand-accent)] transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-brand-ink)] mb-4 tracking-tight uppercase">{feature.title}</h3>
                <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
