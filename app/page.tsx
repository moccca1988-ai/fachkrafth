'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Star, ArrowRight, CheckCircle2, Users, Target, TrendingUp, 
  Clock, Briefcase, ShieldCheck, Zap, BarChart, Settings, 
  MousePointer2, Menu, X, ChevronRight, PlayCircle, Award
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 group">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <span className="text-gray-900">fachkraft<span className="text-green-500">haus</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {['Home', 'Über uns', 'Leistungen', 'Kontakt'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm font-semibold text-gray-600 hover:text-green-500 transition-colors">
              {item}
            </Link>
          ))}
          <Link href="#kontakt" className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200">
            Jetzt starten
          </Link>
        </div>

        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top md:hidden">
          {['Home', 'Über uns', 'Leistungen', 'Kontakt'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-600">
              {item}
            </Link>
          ))}
          <Link href="#kontakt" onClick={() => setIsOpen(false)} className="bg-green-500 text-white text-center py-4 rounded-xl font-bold">
            Jetzt starten
          </Link>
        </div>
      )}
    </nav>
  );
};

const SectionHeading = ({ tag, title, centered = true }: { tag: string, title: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-widest mb-4">
      {tag}
    </span>
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
      {title}
    </h2>
  </div>
);

export default function Home() {
  return (
    <div className="bg-white text-gray-900 selection:bg-green-100 selection:text-green-900">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/50 -skew-x-12 translate-x-1/2 -z-10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-8">
              <Star className="w-3 h-3 fill-current" />
              Deutschlands Premium Recruiting Plattform
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
              Fachkräfte finden <br />
              <span className="text-green-500">ohne Kompromisse.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Wir lösen das Personalproblem moderner Unternehmen mit KI-gestützten Prozessen und einer unschlagbaren Erfolgsgarantie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#kontakt" className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all hover:shadow-2xl hover:shadow-green-200 flex items-center justify-center gap-2 group">
                Termin vereinbaren <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center justify-center gap-3 px-8 py-4 font-bold text-gray-700 hover:text-green-500 transition-colors group">
                <PlayCircle className="w-6 h-6 text-green-500" />
                Wie es funktioniert
              </button>
            </div>

            <div className="flex items-center gap-8 border-t border-gray-100 pt-10">
              {[
                { label: 'Erfahrung', val: '7+' },
                { label: 'Erfolgsquote', val: '98%' },
                { label: 'Impressionen', val: '100M+' }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-black text-gray-900">{stat.val}</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <Image 
                src="https://images.unsplash.com/photo-1600880212340-02d956ea043c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office Collaboration" 
                width={1000} 
                height={1000}
                className="object-cover aspect-[4/5] md:aspect-square group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
              <div className="absolute top-10 right-10 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-black">98%</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Matching Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading tag="Expertise" title="Mitarbeitergewinnung für eine neue Ära." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Kosten senken", desc: "Reduktion der Cost-per-Hire durch zielgerichtete Performance-Kampagnen.", icon: <BarChart />, color: "green" },
              { title: "KI-Prozesse", desc: "Automatisierte Vorqualifizierung für maximale Zeitersparnis Ihrer HR.", icon: <Zap />, color: "blue" },
              { title: "Marktplatz", desc: "Zugang zu einem exklusiven Pool an passiven und aktiven Talenten.", icon: <Users />, color: "purple" },
              { title: "Skalierbarkeit", desc: "Flexible Recruiting-Kapazitäten, die mit Ihrem Unternehmen wachsen.", icon: <TrendingUp />, color: "orange" }
            ].map((f, i) => (
              <div key={i} className="group p-10 bg-white rounded-[2rem] border border-gray-100 hover:border-green-200 hover:shadow-2xl hover:shadow-green-100 transition-all duration-500">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-green-50 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors`}>
                  {React.cloneElement(f.icon as React.ReactElement, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-[3.5rem] overflow-hidden relative shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16 p-10 md:p-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  Bereit für die <br />
                  <span className="text-green-500 text-nowrap">Bewerberwelle?</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span>Termin innerhalb von 24h möglich</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Vorname</label>
                      <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm" placeholder="Max" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nachname</label>
                      <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm" placeholder="Mustermann" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Firmen E-Mail</label>
                    <input type="email" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm" placeholder="max@unternehmen.de" />
                  </div>
                  <button className="w-full bg-green-500 text-white font-black py-4 rounded-2xl hover:bg-green-600 transition-all">
                    Anfrage absenden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
               <Link href="/" className="text-2xl font-bold flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-900">fachkraft<span className="text-green-500">haus</span></span>
              </Link>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-100 text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© {new Date().getFullYear()} Fachkrafthaus – Premium Recruiting</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
