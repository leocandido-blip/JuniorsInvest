export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Danke für deine Anmeldung!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Wir freuen uns, dass du Teil von <strong>JuniorsInvest</strong> wirst.
        Du erhältst bald spannende Finanzbildung direkt in dein Postfach.
      </p>
      <a
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all"
      >
        Zurück zur Startseite
      </a>
    </div>
  );
}
