import Link from 'next/link';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-gray-900">fachkraft</span>
            <span className="text-green-500">haus</span>
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition">← Zurück zur Startseite</Link>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-700 mb-4">
            Fachkrafthaus<br />
            Musterstraße 1<br />
            10115 Berlin<br />
            Deutschland
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vertreten durch</h2>
          <p className="text-gray-700 mb-4">
            Geschäftsführer: Max Mustermann
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontakt</h2>
          <p className="text-gray-700 mb-4">
            E-Mail: kontakt@fachkrafthaus.de<br />
            Telefon: +49 (0) 123 456789
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p className="text-gray-700 mb-4">
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            DE123456789
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Haftungsausschluss</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Haftung für Inhalte</h3>
          <p className="text-gray-700 mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Haftung für Links</h3>
          <p className="text-gray-700 mb-4">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">© 2026 Fachkrafthaus. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
