'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-32 bg-[var(--color-brand-bg)] px-6 md:px-12">
      <div className="max-w-7xl mx-auto glass-accent rounded-[4rem] p-12 lg:p-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-brand-accent)]/10 via-transparent to-[var(--color-brand-secondary)]/10 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-accent)]/5 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="inline-block px-4 py-1.5 glass-premium text-[var(--color-brand-accent)] text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-10">
            Bereit für den nächsten Schritt?
          </span>
          <h2 className="text-5xl lg:text-8xl font-display font-bold text-[var(--color-brand-ink)] mb-10 leading-[0.9]">
            Lassen Sie uns gemeinsam <br />
            <span className="gradient-text">Geschichte schreiben.</span>
          </h2>
          <p className="text-xl text-[var(--color-brand-muted)] mb-16 max-w-2xl mx-auto leading-relaxed">
            Ob Sie Talente suchen oder Ihre Karriere auf das nächste Level heben wollen – wir sind Ihr Partner für exzellente Ergebnisse.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/kontakt" 
              className="group flex items-center gap-3 px-12 py-6 bg-[var(--color-brand-ink)] text-[var(--color-brand-bg)] font-bold rounded-full transition-all hover:scale-105 shadow-2xl shadow-black/20"
            >
              Jetzt Kontakt aufnehmen
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link 
              href="/ueber-uns" 
              className="px-12 py-6 glass-premium text-[var(--color-brand-ink)] font-bold rounded-full hover:bg-black/5 transition-all"
            >
              Mehr über uns
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
