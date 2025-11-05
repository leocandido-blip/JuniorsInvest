// src/App.jsx
import logo from "./assets/JuniorFunds.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col">
      {/* NAVBAR */}
      <nav className="w-full flex justify-between items-center px-8 py-4 shadow-sm bg-white/70 backdrop-blur-md fixed top-0 z-50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Juniors Invest Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-xl font-semibold tracking-tight">Juniors Invest</h1>
        </div>
        <a
          href="#newsletter"
          className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
        >
          Join Waitlist
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Gamified Learning für <span className="text-blue-600">Finanzen</span> & Investieren
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Lerne Geld, Aktien und Wirtschaft auf die spielerische Art – gebaut für Jugendliche, die
          mehr wollen als nur Theorie.
        </p>
        <a
          href="#newsletter"
          className="px-8 py-3 bg-blue-600 text-white text-lg rounded-full font-medium hover:bg-blue-700 transition"
        >
          Newsletter abonnieren
        </a>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-8 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">📈 Lernen wie die Profis</h3>
          <p className="text-gray-600">
            Interaktive Lektionen zu Aktien, ETFs und Wirtschaft – spielerisch, verständlich,
            effektiv.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">🎮 Gamification mit Impact</h3>
          <p className="text-gray-600">
            Erreiche Level, unlocke Achievements und wachse mit jedem Investment-Quiz.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">🚀 Next Step: Juniors Broker</h3>
          <p className="text-gray-600">
            Unsere Vision: Der erste Broker für Minderjährige – sicher, legal, mit Lernfaktor.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        id="newsletter"
        className="bg-blue-600 text-white py-16 flex flex-col items-center px-6 text-center"
      >
        <h3 className="text-3xl font-semibold mb-4">Bleib auf dem Laufenden</h3>
        <p className="text-blue-100 max-w-lg mb-6">
          Erfahre als Erster, wenn Juniors Invest startet – und sichere dir frühen Zugang zur Beta.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            placeholder="Deine E-Mail"
            className="flex-1 px-5 py-3 rounded-full text-gray-900 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition"
          >
            Anmelden
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Juniors Invest – Building the Future of Financial Education
      </footer>
    </div>
  );
}
