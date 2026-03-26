'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Leistungen', href: '/unternehmen' },
  { name: 'Kontakt', href: '/kontakt' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'glass-premium py-4' 
          : 'bg-transparent py-8'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="text-2xl font-display font-black tracking-tight text-[var(--color-brand-ink)]">
                fachkraft<span className="text-[var(--color-brand-accent)]">haus</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold text-[var(--color-brand-ink)]/70 hover:text-[var(--color-brand-accent)] transition-colors duration-200 uppercase tracking-[0.2em]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="px-8 py-3 bg-[var(--color-brand-accent)] text-[var(--color-brand-bg)] text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300"
            >
              Jetzt starten
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-brand-ink)] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-premium border-t border-black/5 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-[var(--color-brand-ink)] hover:text-[var(--color-brand-accent)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/kontakt"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-[var(--color-brand-accent)] text-[var(--color-brand-bg)] text-center font-bold rounded-full"
              >
                Jetzt starten
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
