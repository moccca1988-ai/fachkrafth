'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-36 pb-24 lg:pt-48 lg:pb-36 bg-[var(--color-brand-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-accent)] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                <span>Kontakt</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tight text-[var(--color-brand-ink)] mb-10 leading-[0.9]">
                Lassen Sie uns <br />
                <span className="italic font-light text-[var(--color-brand-muted)]">sprechen</span>
              </h1>
              <p className="text-xl text-[var(--color-brand-muted)] mb-16 leading-relaxed max-w-lg">
                Haben Sie Fragen zu unserer Plattform oder benötigen Sie eine individuelle Beratung? Unser Team aus Experten ist für Sie da – diskret und lösungsorientiert.
              </p>
              
              <div className="space-y-12">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "E-Mail", value: "kontakt@fachkrafthaus.de" },
                  { icon: <Phone className="w-5 h-5" />, label: "Telefon", value: "+49 (0) 30 123 456 78" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Büro Berlin", value: "Friedrichstraße 123, 10117 Berlin" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 border border-[var(--color-brand-border)] flex items-center justify-center text-[var(--color-brand-ink)] group-hover:border-[var(--color-brand-accent)] group-hover:text-[var(--color-brand-accent)] transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-muted)] mb-1">{item.label}</p>
                      <p className="text-[var(--color-brand-ink)] font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 border border-[var(--color-brand-border)] translate-x-6 translate-y-6 -z-10" />
              <div className="glass-premium p-12 md:p-24 border border-[var(--color-brand-border)] relative overflow-hidden">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 border border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] flex items-center justify-center mb-8">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold font-display text-[var(--color-brand-ink)] mb-4 uppercase tracking-tight">Anfrage gesendet</h2>
                    <p className="text-[var(--color-brand-muted)] mb-10 leading-relaxed">Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[var(--color-brand-accent)] text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
                    >
                      Weitere Nachricht senden
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-muted)]">Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Ihr Name"
                          className="w-full px-0 py-4 bg-transparent border-b border-[var(--color-brand-border)] text-[var(--color-brand-ink)] placeholder:text-[var(--color-brand-muted)]/30 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-muted)]">E-Mail</label>
                        <input
                          required
                          type="email"
                          placeholder="ihre@email.de"
                          className="w-full px-0 py-4 bg-transparent border-b border-[var(--color-brand-border)] text-[var(--color-brand-ink)] placeholder:text-[var(--color-brand-muted)]/30 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-muted)]">Unternehmen</label>
                      <input
                        type="text"
                        placeholder="Name Ihres Unternehmens"
                        className="w-full px-0 py-4 bg-transparent border-b border-[var(--color-brand-border)] text-[var(--color-brand-ink)] placeholder:text-[var(--color-brand-muted)]/30 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-muted)]">Nachricht</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Wie können wir Ihnen helfen?"
                        className="w-full px-0 py-4 bg-transparent border-b border-[var(--color-brand-border)] text-[var(--color-brand-ink)] placeholder:text-[var(--color-brand-muted)]/30 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group relative w-full inline-flex items-center justify-center px-10 py-6 bg-[var(--color-brand-ink)] text-[var(--color-brand-bg)] text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <span className="relative z-10">Anfrage senden</span>
                      <Send className="relative z-10 ml-3 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <div className="absolute inset-0 bg-[var(--color-brand-accent)] translate-y-full transition-transform group-hover:translate-y-0" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
