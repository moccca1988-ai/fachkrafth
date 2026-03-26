'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { BentoGrid } from '@/components/BentoGrid';
import { ServicesSection } from '@/components/ServicesSection';
import { TrustSection } from '@/components/TrustSection';
import { cn } from '@/lib/utils';
import { Mail, ArrowUpRight } from 'lucide-react';

const team = [
  { name: 'Andreas Müller', role: 'Geschäftsführer', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=500&auto=format&fit=crop' },
  { name: 'Sarah Schmidt', role: 'Head of IT Recruiting', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop' },
  { name: 'Thomas Weber', role: 'Senior Consultant Bau', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop' },
  { name: 'Elena Wagner', role: 'Talent Acquisition', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-bg)] overflow-hidden">
      <Navbar />
      
      <Hero />

      {/* LOGO CLOUD */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-brand-muted)] mb-16">
            Vertraut von führenden Unternehmen
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-20 grayscale invert">
            {['SIEMENS', 'BOSCH', 'SAP', 'DAIMLER', 'ALLIANZ'].map((logo, i) => (
              <div key={i} className="text-3xl font-black font-display tracking-tighter text-white">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      <BentoGrid />
      
      <ServicesSection />

      {/* FEATURE HIGHLIGHT */}
      <section className="px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-7xl mx-auto glass-premium rounded-[4rem] p-12 lg:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-brand-accent)]/5 blur-[100px] -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000&auto=format&fit=crop" 
                alt="Bauarbeiter auf der Baustelle" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-5xl lg:text-7xl font-display font-bold text-white mb-10 leading-[0.9]">
                Wachstum durch <span className="gradient-text">Präzision.</span>
              </h2>
              <p className="text-xl text-[var(--color-brand-muted)] mb-12 leading-relaxed">
                Wir verstehen die Komplexität des modernen Arbeitsmarktes. Unsere Lösungen sind nicht nur schnell, sondern nachhaltig und passgenau für Ihre Unternehmenskultur.
              </p>
              <Link href="/kontakt" className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full transition-transform hover:scale-105">
                Jetzt beraten lassen
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      {/* TEAM SECTION */}
      <section className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-[0.9]">
                Unsere <span className="gradient-text">Experten.</span>
              </h2>
              <p className="text-xl text-[var(--color-brand-muted)]">
                Lernen Sie das Team hinter Fachkrafthaus kennen. Wir brennen für Ihren Erfolg und begleiten Sie persönlich.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden mb-8 aspect-[4/5] glass-premium">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                    <div className="w-12 h-12 glass-premium rounded-full flex items-center justify-center text-white hover:bg-[var(--color-brand-accent)] hover:text-black transition-all">
                      <Mail size={20} />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-xs text-[var(--color-brand-muted)] uppercase tracking-[0.2em] font-bold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 md:px-12 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto glass-accent rounded-[4rem] p-12 lg:p-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop" 
              alt="Background" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-8xl font-display font-bold text-white mb-10 leading-[0.9]">
              Immer einen <br />
              <span className="gradient-text">Schritt voraus.</span>
            </h2>
            <p className="text-xl text-[var(--color-brand-muted)] mb-16 max-w-2xl mx-auto">
              Abonnieren Sie unseren Newsletter für exklusive Einblicke in den Arbeitsmarkt und Recruiting-Trends der Zukunft.
            </p>
            <form className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="flex-grow px-10 py-6 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-brand-accent)] transition-all"
              />
              <button className="px-12 py-6 bg-[var(--color-brand-accent)] text-black font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(163,255,0,0.2)]">
                Abonnieren
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
