import Link from 'next/link';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-gray-900">fachkraft</span>
            <span className="text-green-500">haus</span>
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition">← Zurück zur Startseite</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Wer ist verantwortlich für die Datenerfassung?</h3>
            <p className="mb-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Wie erfassen wir Ihre Daten?</h3>
            <p className="mb-4">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
            <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hosting</h2>
            <p className="mb-4">Diese Website wird bei Vercel gehostet. Der Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
            <p>Vercel erfasst in sog. Logfiles folgende Daten: IP-Adresse, Browsertyp, Betriebssystem, Referrer URL, Uhrzeit der Serveranfrage.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Ihre Rechte</h2>
            <p className="mb-4">Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
              <li>Berichtigung unrichtiger personenbezogener Daten</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten</li>
              <li>Einschränkung der Datenverarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerruf Ihrer Einwilligung zur Datenverarbeitung</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kontaktformular</h2>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
          </section>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">© 2026 Fachkrafthaus. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
