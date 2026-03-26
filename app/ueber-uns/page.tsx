'use client';

import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { Users, Target, Rocket } from 'lucide-react';
import Image from 'next/image';

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--color-brand-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-block px-4 py-1.5 glass-premium text-[var(--color-brand-accent)] text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-10">
                Über uns
              </div>
              <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tight text-[var(--color-brand-ink)] mb-10 leading-[0.9]">
                Wir bauen die Brücke in die <br />
                <span className="gradient-text">Zukunft der Arbeit.</span>
              </h1>
              <p className="text-xl text-[var(--color-brand-muted)] leading-relaxed max-w-2xl mx-auto">
                Fachkrafthaus ist eine digitale Recruiting-Plattform, die Unternehmen und Fachkräfte effizient zusammenbringt. Unser Ziel ist es, den DACH-Arbeitsmarkt durch Technologie und Empathie zu stärken.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Unsere Vision",
                description: "Jeder Mensch am richtigen Platz, in einem Unternehmen, das seine Talente schätzt."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Unsere Mission",
                description: "Recruiting durch KI und Daten so effizient zu machen, dass Zeit für das Wesentliche bleibt: Den Menschen."
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Unser Versprechen",
                description: "Keine Streuverluste, keine leeren Versprechungen. Nur echte Ergebnisse und nachhaltige Matches."
              }
            ].map((item, index) => (
              <div key={index} className="p-12 glass-premium rounded-[3rem] group hover:bg-black/5 transition-all">
                <div className="w-14 h-14 glass-premium rounded-2xl text-[var(--color-brand-ink)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-brand-accent)] group-hover:text-[var(--color-brand-bg)] transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-brand-ink)] mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="relative aspect-[21/9] rounded-[4rem] overflow-hidden group glass-premium">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1500&auto=format&fit=crop"
              alt="Our Team"
              fill
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 md:bottom-20 md:left-20">
              <p className="text-white text-4xl md:text-6xl font-bold font-display mb-4 leading-none">Ein Team aus Experten.</p>
              <p className="text-[var(--color-brand-accent)] text-xs font-bold uppercase tracking-[0.3em]">Recruiter, Data Scientists und Visionäre</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
