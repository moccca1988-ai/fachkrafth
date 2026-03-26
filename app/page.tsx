'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, CheckCircle2, Users, Target, TrendingUp, Clock, Briefcase, ShieldCheck, Zap, BarChart, Settings, MousePointer2 } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-gray-900">fachkraft</span>
            <span className="text-green-500">haus</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-gray-600 hover:text-gray-900 transition">Home</Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition">Über uns</Link>
            <Link href="#leistungen" className="text-gray-600 hover:text-gray-900 transition">Leistungen</Link>
            <Link href="#kontakt" className="text-gray-600 hover:text-gray-900 transition">Kontakt</Link>
            <Link href="#kontakt" className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition">Jetzt starten</Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-semibold mb-6">Premium Recruiting Plattform</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Personalproblem? Wir lösen es - <span className="text-green-500 text-nowrap">modern, schnell, zuverlässig.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Wir verbinden die innovativsten Unternehmen mit den talentiertesten Köpfen Deutschlands. Erleben Sie Recruiting für eine neue Ära.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="#kontakt" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition flex items-center gap-2">
                Kostenfreien Termin buchen <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#leistungen" className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition">
                Services ansehen
              </Link>
            </div>
            <div className="flex items-center gap-12">
              <div>
                <p className="text-3xl font-bold text-gray-900">7</p>
                <p className="text-gray-500 text-sm">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">98%</p>
                <p className="text-gray-500 text-sm">Kundenzufriedenheit</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100M+</p>
                <p className="text-gray-500 text-sm">Impressionen</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-200 rounded-3xl aspect-square overflow-hidden relative shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent" />
               <div className="absolute top-8 right-8 bg-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                     <CheckCircle2 className="w-6 h-6 text-green-600" />
                   </div>
                   <div>
                     <p className="text-2xl font-bold">98%</p>
                     <p className="text-gray-500 text-xs">Matching Rate</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAS WIR TUN */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-green-500 font-semibold tracking-widest uppercase text-sm">Was wir tun</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">Mitarbeitergewinnung für eine neue Ära.</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Kosten senken",
              desc: "Wir reduzieren Ihre Kosten, indem wir qualifiziertes Personal zügig für Ihre Branche zielgerichtet gewinnen.",
              icon: <BarChart className="w-6 h-6" />
            },
            {
              title: "Innovative Prozesse",
              desc: "Wir setzen innovative Prozesse ein, um die besten Talente für Ihr Unternehmen effizient zu gewinnen.",
              icon: <Zap className="w-6 h-6" />
            },
            {
              title: "Branchenkenntnis",
              desc: "Dank unserer Branchenkenntnis haben wir passgenau die Talente, die Ihre spezifischen Anforderungen erfüllen.",
              icon: <Briefcase className="w-6 h-6" />
            },
            {
              title: "Skalierbare Planung",
              desc: "Unsere skalierbare Planung ermöglicht es Ihnen, schnell auf Personalbedarf zu reagieren.",
              icon: <TrendingUp className="w-6 h-6" />
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition group">
              <div className="w-12 h-12 bg-green-50 text-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UNSERE SERVICES */}
      <section id="leistungen" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-green-500 font-semibold uppercase text-sm">Unsere Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">Garantierter Erfolg bei der Mitarbeitergewinnung</h2>
            <p className="text-gray-600 mt-4">Bewerbungen in Echtzeit. Keine doppelten Kosten bei mehrfacher Besetzung.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Abgestimmtes Konzept", desc: "Mit erprobten Methoden bringen wir Sie als Arbeitgeber in den richtigen Fokus." },
              { title: "Bewerbergarantie", desc: "Wir garantieren eine Vielzahl qualifizierter Kandidaten, die zu Ihnen passen." },
              { title: "Geld-zurück-Garantie", desc: "Sollte unser Konzept nicht überzeugen, erhalten Sie Ihr Geld zurück – ohne Risiko." },
              { title: "Vorqualifizierung", desc: "Wir qualifizieren Kandidaten vor und sparen so Ihre wertvollen Ressourcen." },
              { title: "Vertragliche Absicherung", desc: "Wir sichern unsere Garantien vertraglich ab – keine leeren Versprechen." },
              { title: "Mehrfache Besetzung", desc: "Bei mehrfacher Besetzung einer Anzeige fallen keine doppelten Kosten an." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition">
                <CheckCircle2 className="w-8 h-8 text-green-500 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link href="#kontakt" className="text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Termin vereinbaren <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANCHEN */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-4xl font-bold text-gray-900 mb-6">Wir lösen das Personalproblem in nahezu jeder Branche.</h2>
               <p className="text-gray-600 mb-8 text-lg">Egal ob Industrie, Handwerk oder Dienstleistung – wir haben die passende Lösung für Ihren Fachkräftemangel.</p>
               <div className="grid grid-cols-2 gap-4">
                 {[
                   "Industrie & Fertigung", "Transport & Logistik", 
                   "Gesundheit & Pflege", "Bank & Versicherung",
                   "Consulting & Steuern", "Öffentlich & Staatlich"
                 ].map((b, i) => (
                   <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                     <div className="w-2 h-2 bg-green-500 rounded-full" />
                     <span className="font-medium text-gray-700">{b}</span>
                   </div>
                 ))}
               </div>
               <Link href="#kontakt" className="inline-block mt-10 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition">
                 Jetzt Termin vereinbaren
               </Link>
             </div>
             <div className="bg-gray-100 rounded-3xl p-12 aspect-[4/3] flex flex-col justify-center">
               <h3 className="text-3xl font-bold mb-6">Unsere Philosophie</h3>
               <p className="text-gray-600 leading-relaxed mb-6">
                 Wir arbeiten ausschließlich mit sorgfältig geprüften Arbeitgebern zusammen. 
                 So gewährleisten wir Bewerberinnen Qualität und faire Chancen. Nur durch Vertrauen sichern wir langfristigen Erfolg.
               </p>
               <div className="flex gap-4">
                 <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex-1">
                   <p className="text-green-500 font-bold text-xl">Werte</p>
                   <p className="text-gray-500 text-sm">Ehrlich & Transparent</p>
                 </div>
                 <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex-1">
                   <p className="text-green-500 font-bold text-xl">Erfolg</p>
                   <p className="text-gray-500 text-sm">BW-Methode</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* KONTAKT SECTION */}
      <section id="kontakt" className="py-24 px-6 bg-gray-900 text-white rounded-[3rem] mx-4 mb-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-green-500 font-semibold uppercase text-sm tracking-widest">Kontakt</span>
            <h2 className="text-5xl font-bold mt-4 mb-8">Werden Sie zu unserem Partner auf Augenhöhe.</h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed">
              Wir beantworten gerne Ihre Fragen und helfen Ihnen dabei, herauszufinden, welche unserer Dienstleistungen Ihren Bedürfnissen am besten entsprechen.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Die nächsten Schritte?</h4>
                  <p className="text-gray-400">Termin vereinbaren → Bedarf prüfen → Onboarding</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-green-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Ihre Benefits</h4>
                  <p className="text-gray-400">Kundenorientiert, Unabhängig, Zuverlässig, Transparent</p>
                </div>
              </div>
            </div>

            <a href="tel:025192875080" className="text-3xl font-bold text-green-500 hover:text-green-400 transition">
              0251 928750 80
            </a>
          </div>

          <div className="bg-white rounded-3xl p-10 text-gray-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Kostenfreies Erstgespräch</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vorname</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nachname</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail Adresse</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="Wie können wir Ihnen helfen?"></textarea>
              </div>
              <button className="w-full bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition shadow-lg shadow-green-500/20">
                Anfrage absenden
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <Link href="/" className="text-3xl font-bold mb-6 block">
              <span className="text-gray-900">fachkraft</span>
              <span className="text-green-500">haus</span>
            </Link>
            <p className="text-gray-500 max-w-sm mb-8">
              Premium Recruiting Plattform für moderne Unternehmen. Wir lösen Personalprobleme nachhaltig und effizient.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="#home" className="hover:text-green-500 transition">Startseite</Link></li>
              <li><Link href="#about" className="hover:text-green-500 transition">Über uns</Link></li>
              <li><Link href="#leistungen" className="hover:text-green-500 transition">Services</Link></li>
              <li><Link href="#kontakt" className="hover:text-green-500 transition">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Rechtliches</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="/impressum" className="hover:text-green-500 transition">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-green-500 transition">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-green-500 transition">AGB</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Fachkrafthaus. Alle Rechte vorbehalten.
        </div>
      </footer>
    </>
  );
}
