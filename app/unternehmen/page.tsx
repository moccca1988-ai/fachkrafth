'use client';

import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { CheckCircle2, ArrowRight, Users, Zap, Shield, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Wir übernehmen die Suche",
    description: "Vom ersten Screening bis zum finalen Match – wir entlasten Ihre HR-Abteilung komplett."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Nur qualifizierte Kandidaten",
    description: "Sie erhalten keine Stapel an Bewerbungen, sondern nur handverlesene Profile, die wirklich passen."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Schnelle Besetzung",
    description: "Durch unseren Pool an aktiven Talenten besetzen wir Stellen oft in Rekordzeit."
  }
];

export default function UnternehmenPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--color-brand-bg)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-block px-4 py-1.5 glass-premium text-[var(--color-brand-accent)] text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-10">
                Für Unternehmen
              </div>
              <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tight text-[var(--color-brand-ink)] mb-8 leading-[0.9]">
                Fachkräfte finden <br /> 
                <span className="gradient-text">ohne Aufwand.</span>
              </h1>
              <p className="text-xl text-[var(--color-brand-muted)] mb-12 leading-relaxed max-w-lg">
                Wir wissen, wie wertvoll Ihre Zeit ist. Deshalb haben wir einen Prozess entwickelt, der Ihnen die Suche nach Talenten komplett abnimmt – präzise, diskret und effizient.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Exklusiver Zugriff auf Top-Talente",
                  "KI-gestütztes Vor-Screening",
                  "Persönliche Ansprechpartner"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full glass-premium flex items-center justify-center group-hover:bg-[var(--color-brand-accent)] transition-all">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-accent)] group-hover:text-[var(--color-brand-bg)] transition-colors" />
                    </div>
                    <span className="text-[var(--color-brand-ink)] font-medium text-lg tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-brand-ink)] text-[var(--color-brand-bg)] font-bold rounded-full transition-transform hover:scale-105 shadow-xl shadow-black/10"
              >
                Jetzt starten
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full"
            >
              <div className="absolute inset-0 glass-premium rounded-[4rem] -z-10" />
              <div className="relative h-full rounded-[4rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880212340-053459a139ad?q=80&w=1200&auto=format&fit=crop"
                  alt="Executive Meeting"
                  fill
                  className="grayscale hover:grayscale-0 transition-all duration-1000 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-premium p-12 rounded-[2.5rem] border border-black/5 hidden md:block backdrop-blur-3xl">
                <p className="text-6xl font-bold text-[var(--color-brand-ink)] font-display mb-1 leading-none">94%</p>
                <p className="text-[var(--color-brand-muted)] text-[10px] font-bold uppercase tracking-[0.3em]">Besetzungsquote</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[var(--color-brand-bg)] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-[var(--color-brand-ink)] mb-8 leading-[0.9]">
                Ihre Vorteile mit <br /> <span className="gradient-text">Fachkrafthaus.</span>
              </h2>
              <p className="text-xl text-[var(--color-brand-muted)] leading-relaxed">
                Wir definieren Recruiting neu. Weg von Massen-Bewerbungen, hin zu qualitativen Matches, die Ihr Unternehmen nachhaltig voranbringen.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-12 glass-premium rounded-[3rem] group hover:bg-black/5 transition-all">
                <div className="w-14 h-14 glass-premium rounded-2xl text-[var(--color-brand-ink)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-brand-accent)] group-hover:text-[var(--color-brand-bg)] transition-all">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-brand-ink)] mb-4 tracking-tight uppercase">{benefit.title}</h3>
                <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed">{benefit.description}</p>
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
