import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fachkrafthaus | Premium Recruiting Platform',
  description: 'Die digitale Brücke für Fachkräfte und Unternehmen im DACH-Raum. Intelligent, diskret, effizient.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${geist.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased selection:bg-brand-accent/20 selection:text-brand-accent">
        {children}
      </body>
    </html>
  );
}
