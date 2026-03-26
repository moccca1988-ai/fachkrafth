import Link from 'next/link';

export default function AGB() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Geltungsbereich</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die zwischen Fachkrafthaus und seinen Kunden geschlossen werden. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, ihrer Geltung wird ausdrücklich zugestimmt.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Vertragsgegenstand</h2>
            <p className="mb-4">Fachkrafthaus bietet Dienstleistungen im Bereich der Personalvermittlung und Recruiting an. Der genaue Leistungsumfang ergibt sich aus der jeweiligen Auftragsvereinbarung.</p>
            <p>Alle Angebote sind freibleibend und unverbindlich, sofern nicht ausdrücklich etwas anderes vereinbart wurde.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Vertragsschluss</h2>
            <p>Der Vertrag kommt durch die schriftliche Bestätigung des Auftrags durch Fachkrafthaus zustande. Die Präsentation von Leistungen auf der Website stellt kein bindendes Angebot dar.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Vergütung und Zahlungsbedingungen</h2>
            <p className="mb-4">Die Vergütung richtet sich nach der individuellen Vereinbarung zwischen Fachkrafthaus und dem Kunden. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.</p>
            <p>Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pflichten des Kunden</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bereitstellung vollständiger und korrekter Informationen</li>
              <li>Rechtzeitige Mitteilung von Änderungen</li>
              <li>Einhaltung gesetzlicher Vorschriften</li>
              <li>Zeitnahe Rückmeldung zu vorgeschlagenen Kandidaten</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Haftung</h2>
            <p className="mb-4">Fachkrafthaus haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht wesentliche Vertragspflichten verletzt werden.</p>
            <p>Die Haftung für mittelbare Schäden, insbesondere entgangenen Gewinn, ist ausgeschlossen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vertraulichkeit</h2>
            <p>Beide Vertragsparteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen vertraulichen Informationen geheim zu halten und nur für die vereinbarten Zwecke zu verwenden.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Anwendbares Recht</h2>
            <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Berlin, sofern der Kunde Kaufmann ist.</p>
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
