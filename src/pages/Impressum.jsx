export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Impressum</h1>
        <p className="mb-4">Angaben gemäß § 5 TMG</p>
        <p className="mb-2 font-semibold">JuniorsInvest</p>
        <p>Vertreten durch: <strong>Leo Candido, Til Kobald</strong></p>
        <p>E-Mail: <a href="mailto:info@juniorsinvest.com" className="text-blue-600">info@juniorsinvest.com</a></p>
        <p>Web: <a href="https://juniorsinvest.com" className="text-blue-600">www.juniorsinvest.com</a></p>
        <p>Sitz: Schwäbisch Hall, Deutschland</p>
        <p className="text-sm mt-6 text-gray-500">
          Haftung für Inhalte: Wir übernehmen keine Gewähr für die Richtigkeit der Inhalte.
          <br />
          Haftung für Links: Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für externe Links.
        </p>
      </div>
    </div>
  );
}
