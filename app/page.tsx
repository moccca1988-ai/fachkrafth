'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, CheckCircle2, Users, Target, TrendingUp, Clock } from 'lucide-react';

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
            <Link href="/#home" className="text-gray-600 hover:text-gray-900 transition">Home</Link>
            <Link href="/#about" className="text-gray-600 hover:text-gray-900 transition">Über uns</Link>
            <Link href="/#leistungen" className="text-gray-600 hover:text-gray-900 transition">Leistungen</Link>
            <Link href="/#kontakt" className="text-gray-600 hover:text-gray-900 transition">Kontakt</Link>
            <Link href="/#kontakt" className="btn-primary">Jetzt starten</Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-tag">Premium Recruiting Plattform</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Finden Sie Exzellenz mit <span className="text-green-500">Fachkrafthaus</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Wir verbinden die innovativsten Unternehmen mit den talentiertesten Köpfen Deutschlands. Moderne Recruiting-Prozesse für maximale Effizienz.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/#kontakt" className="btn-primary">
                Für Unternehmen <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/bewerber" className="btn-outline">Für Bewerber</Link>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">500+ Platzierungen</p>
                <p className="text-xs text-gray-500">in den letzten 12 Monaten</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl aspect-square flex items-center justify-center overflow-hidden">
              <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">98%</p>
                    <p className="text-xs text-gray-500">Matching Rate</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">12 Tage</p>
                    <p className="text-xs text-gray-500">Ø Besetzungszeit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="stat-number">500+</p>
            <p className="text-gray-600 text-sm">Erfolgreiche Platzierungen</p>
          </div>
          <div>
            <p className="stat-number">98%</p>
            <p className="text-gray-600 text-sm">Kundenzufriedenheit</p>
          </div>
          <div>
            <p className="stat-number">100M+</p>
            <p className="text-gray-600 text-sm">Gesetzte Impressionen</p>
          </div>
          <div>
            <p className="stat-number">26</p>
            <p className="text-gray-600 text-sm">Verschiedene Branchen</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl aspect-video"></div>
          <div>
            <span className="section-tag">Was wir tun</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Mitarbeitergewinnung für eine neue Ära
            </h2>
            <div className="space-y-6">
              <div className="numbered-item">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 text-green-600 font-bold text-xl flex items-center justify-center">01</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Kosten senken</h3>
                  <p className="text-gray-600 text-sm">Wir reduzieren Ihre Kosten, indem wir qualifiziertes Personal zügig für Ihre Branche zielgerichtet gewinnen.</p>
                </div>
              </div>
              <div className="numbered-item">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 text-green-600 font-bold text-xl flex items-center justify-center">02</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Innovative Prozesse</h3>
                  <p className="text-gray-600 text-sm">Wir setzen innovative Prozesse ein, um die besten Talente für Ihr Unternehmen effizient zu gewinnen.</p>
                </div>
              </div>
              <div className="numbered-item">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 text-green-600 font-bold text-xl flex items-center justify-center">03</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Branchenkenntnis</h3>
                  <p className="text-gray-600 text-sm">Dank unserer Branchenkenntnis haben wir passgenau die Talente, die Ihre spezifischen Anforderungen erfüllen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="leistungen" className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-tag">Unsere Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Garantierter Erfolg bei der Mitarbeitergewinnung</h2>
            <p className="text-xl text-gray-600">Bewerbungen in Echtzeit. Keine doppelten Kosten bei mehrfacher Besetzung.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-service">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Abgestimmtes Konzept</h3>
              <p className="text-gray-600 text-sm">Mit unserem abgestimmten Konzept und unseren erprobten Methoden bringen wir Sie als Arbeitgeber in den richtigen Fokus.</p>
            </div>
            <div className="card-service">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bewerbergarantie</h3>
              <p className="text-gray-600 text-sm">Mit unserer Bewerbergarantie garantieren wir Ihnen eine Vielzahl qualifizierter Kandidaten, die zu Ihrem Unternehmen passen.</p>
            </div>
            <div className="card-service">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Geld-zurück-Garantie</h3>
              <p className="text-gray-600 text-sm">Sollte unser Konzept nicht überzeugen, erhalten Sie Ihr Geld zurück – ohne Risiko für Sie.</p>
            </div>
            <div className="card-service">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vorqualifizierung</h3>
              <p className="text-gray-600 text-sm">Wir qualifizieren Ihre Kandidaten vor, denn wir nehmen Ihre Ressourcen nur in Anspruch, wenn Sie auch wirklich zu Ihnen passen.</p>
            </div>
            <div className="card-service">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vertragliche Absicherung</h3>
              <p className="text-gray-600 text-sm">Wir sichern die Bewerbergarantie, als auch unsere Geld-zurück-Garantie auch vertraglich mit Ihnen ab.</p>
            </div>
            <div className="card-service">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mehrfache Besetzung</h3>
              <p className="text-gray-600 text-sm">Bewerbungen erhalten Sie in Echtzeit. Sollten Sie mit einer unserer Anzeigen mehrfach Stellen besetzen, fallen keine doppelten Kosten an.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES (Dark Green Section) */}
      <section className="bg-green-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-300 border border-green-700 rounded-full px-3 py-1 mb-4">Features</span>
          <h2 className="text-4xl font-bold mb-6">Was macht Fachkrafthaus einzigartig?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-green-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">172+</h3>
              <p className="text-green-200">Aktive Kandidaten</p>
            </div>
            <div className="bg-green-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">283+</h3>
              <p className="text-green-200">Erfolgreiche Projekte</p>
            </div>
            <div className="bg-green-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">453+</h3>
              <p className="text-green-200">Zufriedene Kunden</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="kontakt" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-tag">Kontakt</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Werden Sie zu unserem Partner auf Augenhöhe
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Wir beantworten gerne Ihre Fragen und helfen Ihnen dabei, herauszufinden, welche unserer Dienstleistungen Ihren Bedürfnissen am besten entsprechen.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Die Benefits:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Kundenorientiert
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Unabhängig
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Zuverlässig
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Ergebnisorientiert
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-semibold text-gray-900 mb-4">Kostenfreies Erstgespräch</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500" />
                <input type="email" placeholder="E-Mail" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500" />
                <textarea placeholder="Ihre Nachricht" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"></textarea>
                <button type="submit" className="btn-primary w-full">Absenden</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="text-2xl font-bold mb-4 inline-block">
                <span className="text-white">fachkraft</span>
                <span className="text-green-500">haus</span>
              </Link>
              <p className="text-sm">Premium Recruiting Plattform für moderne Unternehmen.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#home" className="hover:text-green-400 transition">Home</Link></li>
                <li><Link href="/#about" className="hover:text-green-400 transition">Über uns</Link></li>
                <li><Link href="/#leistungen" className="hover:text-green-400 transition">Leistungen</Link></li>
                <li><Link href="/#kontakt" className="hover:text-green-400 transition">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/impressum" className="hover:text-green-400 transition">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-green-400 transition">Datenschutz</Link></li>
                <li><Link href="/agb" className="hover:text-green-400 transition">AGB</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Kontakt</h4>
              <p className="text-sm">E-Mail: kontakt@fachkrafthaus.de</p>
              <p className="text-sm">Telefon: +49 (0) 123 456789</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 Fachkrafthaus. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
