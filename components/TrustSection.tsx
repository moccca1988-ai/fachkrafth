'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const stats = [
  { label: "Erfolgreiche Vermittlungen", value: "2.4k+" },
  { label: "Kundenzufriedenheit", value: "98%" },
  { label: "Aktive Kandidaten", value: "15k+" },
  { label: "DACH Region", value: "100%" }
];

export function TrustSection() {
  return (
    <section className="py-24 md:py-36 bg-[var(--color-brand-bg)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Statistics Section */}
        <div className="glass-premium rounded-[4rem] p-12 md:p-24 mb-32 relative overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-display font-bold text-[var(--color-brand-accent)] mb-4">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-brand-muted)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-accent)]/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-brand-secondary)]/10 rounded-full blur-3xl -ml-32 -mb-32" />
        </div>

        {/* Testimonial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 glass-premium text-[var(--color-brand-accent)] text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-8">
              Was Kunden sagen
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-[var(--color-brand-ink)] mb-10 leading-[0.9]">
              Qualität ist <br />
              <span className="gradient-text">kein Zufall.</span>
            </h2>
            <p className="text-xl text-[var(--color-brand-muted)] leading-relaxed mb-12">
              Fachkrafthaus hat unsere Erwartungen an eine Personalberatung neu definiert. Diskretion und Präzision auf höchstem Niveau.
            </p>
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-black/5 p-1">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="https://picsum.photos/seed/ceo/200/200"
                    alt="Dr. Michael Weber"
                    fill
                    className="object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-brand-ink)]">Dr. Michael Weber</div>
                <div className="text-sm text-[var(--color-brand-muted)] uppercase tracking-widest font-bold">HR Director, DACH Group</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-[3rem] overflow-hidden glass-premium p-4 shadow-2xl"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/trust-premium/800/1000"
                alt="Professional Trust"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="text-3xl font-display font-bold mb-4">Exzellenz im Recruiting</div>
                <p className="text-white/70 leading-relaxed">Wir setzen neue Standards in der Personalvermittlung durch technologische Innovation.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
