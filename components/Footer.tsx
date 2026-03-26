import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-bg)] text-[var(--color-brand-ink)] pt-32 pb-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center mb-8 group">
              <div className="text-2xl font-display font-black tracking-tight text-[var(--color-brand-ink)]">
                fachkraft<span className="text-[var(--color-brand-accent)]">haus</span>
              </div>
            </Link>
            <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed max-w-sm mb-8">
              Die führende Plattform für intelligentes Recruiting in Deutschland, Österreich und der Schweiz. Wir verbinden Talente mit Visionen durch Präzision und technologische Exzellenz.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full glass-premium flex items-center justify-center hover:bg-[var(--color-brand-accent)] hover:text-[var(--color-brand-bg)] transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-ink)] mb-8">Navigation</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[var(--color-brand-muted)] hover:text-[var(--color-brand-accent)] text-sm transition-colors">Home</Link></li>
              <li><Link href="/ueber-uns" className="text-[var(--color-brand-muted)] hover:text-[var(--color-brand-accent)] text-sm transition-colors">Über uns</Link></li>
              <li><Link href="/unternehmen" className="text-[var(--color-brand-muted)] hover:text-[var(--color-brand-accent)] text-sm transition-colors">Leistungen</Link></li>
              <li><Link href="/kontakt" className="text-[var(--color-brand-muted)] hover:text-[var(--color-brand-accent)] text-sm transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-ink)] mb-8">Quick Link</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[var(--color-brand-muted)] hover:text-[var(--color-brand-accent)] text-sm transition-colors">Impressum</Link></li>
              <li><Link href="#" className="text-[var(--color-brand-muted)] hover:text-[var(--color-brand-accent)] text-sm transition-colors">Datenschutz</Link></li>
              <li><Link href="#" className="text-[var(--color-brand-muted)] hover:text-[var(--color-brand-accent)] text-sm transition-colors">AGB</Link></li>
              <li><Link href="#" className="text-[var(--color-brand-muted)] hover:text-[var(--color-brand-accent)] text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-ink)] mb-8">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 glass-accent rounded-lg flex items-center justify-center text-[var(--color-brand-accent)] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[var(--color-brand-ink)]/40 text-[10px] uppercase tracking-widest mb-1">Telefon</p>
                  <a href="tel:+493012345678" className="text-[var(--color-brand-ink)] font-bold hover:text-[var(--color-brand-accent)] transition-colors">+49 (0) 30 123 456 78</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 glass-accent rounded-lg flex items-center justify-center text-[var(--color-brand-accent)] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[var(--color-brand-ink)]/40 text-[10px] uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:info@fachkrafthaus.de" className="text-[var(--color-brand-ink)] font-bold hover:text-[var(--color-brand-accent)] transition-colors">info@fachkrafthaus.de</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 glass-accent rounded-lg flex items-center justify-center text-[var(--color-brand-accent)] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[var(--color-brand-ink)]/40 text-[10px] uppercase tracking-widest mb-1">Adresse</p>
                  <p className="text-[var(--color-brand-ink)] font-bold">Musterstraße 123, 10115 Berlin</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[var(--color-brand-ink)]/40 text-xs">
            © {new Date().getFullYear()} Fachkrafthaus GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[var(--color-brand-ink)]/40 text-xs uppercase tracking-widest font-bold">Made with precision in DACH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
