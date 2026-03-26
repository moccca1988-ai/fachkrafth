'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Users, Briefcase } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-36 pb-24 overflow-hidden bg-[var(--color-brand-bg)]">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-brand-accent)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-brand-secondary)]/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-accent mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-ink)]">
                  Premium Recruiting DACH
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8 text-balance text-[var(--color-brand-ink)]">
                Finden Sie <br />
                <span className="gradient-text">Exzellenz.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--color-brand-muted)] max-w-xl leading-relaxed mb-12 text-balance">
                Fachkrafthaus definiert Recruiting neu. Wir verbinden die innovativsten Unternehmen mit den talentiertesten Köpfen Deutschlands.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/unternehmen"
                  className="group px-8 py-4 bg-[var(--color-brand-accent)] text-[var(--color-brand-bg)] text-sm font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300"
                >
                  Für Unternehmen
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link
                  href="/bewerber"
                  className="px-8 py-4 border border-black/10 text-[var(--color-brand-ink)] text-sm font-bold rounded-full hover:bg-black/5 transition-all duration-300"
                >
                  Für Bewerber
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 flex items-center gap-8 border-t border-black/5 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--color-brand-bg)] overflow-hidden">
                      <Image
                        src={`https://picsum.photos/seed/user${i}/100/100`}
                        alt="User"
                        width={100}
                        height={100}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--color-brand-ink)]">500+ Platzierungen</div>
                  <div className="text-xs text-[var(--color-brand-muted)]">In den letzten 12 Monaten</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="https://picsum.photos/seed/agency/1000/1250"
                alt="Modern Office"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 glass-premium p-6 rounded-3xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-accent)]/10 flex items-center justify-center">
                    <Users className="text-[var(--color-brand-accent)] w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[var(--color-brand-ink)]">98%</div>
                    <div className="text-[10px] uppercase font-bold text-[var(--color-brand-muted)]">Matching Rate</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -right-10 glass-premium p-6 rounded-3xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-accent)]/10 flex items-center justify-center">
                    <Briefcase className="text-[var(--color-brand-accent)] w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[var(--color-brand-ink)]">12 Tage</div>
                    <div className="text-[10px] uppercase font-bold text-[var(--color-brand-muted)]">Ø Besetzungszeit</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
