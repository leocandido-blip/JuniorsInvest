// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import logo from "./assets/JuniorFunds.png"; // bitte existiert EXAKT so (Groß-/Kleinschreibung)

const FORM_ACTION = "https://formsubmit.co/el/romecu";
const CONTACT_EMAIL = "info@juniorsinvest.com";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Juniors Invest Logo" className="w-16 h-16 object-contain rounded-md" />
            <div>
              <div className="text-lg font-semibold leading-none">Juniors Invest</div>
              <div className="text-xs text-slate-500">Learn · Invest · Grow</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:underline">Wie es funktioniert</a>
            <a href="#vision" className="hover:underline">Vision</a>
            <a href="#newsletter" className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200">Newsletter</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="px-4 py-2 rounded-full bg-emerald-600 text-white">Kontakt</a>
          </nav>

          <div className="md:hidden">
            <a href="#newsletter" className="px-3 py-2 rounded-full bg-emerald-600 text-white text-sm">Join</a>
          </div>
        </div>
      </header>

      <main className="pt-28">
        {/* HERO (Framer Motion) */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="bg-gradient-to-b from-white to-slate-50"
        >
          <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Learn. Invest. Grow.
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                Juniors Invest verbindet spielerische Finanzbildung mit realitätsnaher Praxis:
                eine gamifizierte Learning App heute — der sichere Weg zum eigenen Depot morgen.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#newsletter"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 text-white font-medium shadow hover:brightness-95 transition"
                >
                  Frühzugang sichern
                </a>
                <a
                  href="#vision"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-200 text-slate-700 bg-white"
                >
                  Unsere Vision
                </a>
              </div>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-500">
                <li>✅ Gamified Lessons & Quizzes</li>
                <li>✅ Simuliertes Investieren ohne echtes Geld</li>
                <li>✅ Pädagogisch geprüft & datenschutzbewusst</li>
                <li>✅ Roadmap: 2-Factor Auth Broker (Vision)</li>
              </ul>

              <p className="mt-6 text-xs text-slate-400">
                Investorenkontakt: <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>
              </p>
            </div>

            {/* visual mockup / card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-gradient-to-b from-white to-slate-50 rounded-2xl shadow-lg p-6 border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="app logo" className="w-12 h-12 rounded-md" />
                    <div>
                      <div className="text-sm font-semibold">Juniors Invest</div>
                      <div className="text-xs text-slate-400">Beta</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">Level 2</div>
                </div>

                <div className="rounded-lg p-6 bg-white border border-slate-100">
                  <div className="text-xs text-slate-500">Simuliertes Portfolio</div>
                  <div className="mt-2 text-2xl font-semibold">€ 12.450</div>
                  <div className="text-sm text-emerald-600 mt-1">+4.2% diese Woche</div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button className="py-2 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100">Play Challenge</button>
                  <button className="py-2 rounded-md bg-white border border-slate-200">View Lessons</button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold">Wie es funktioniert</h2>
            <p className="mt-2 text-slate-600 max-w-2xl mx-auto">Kombiniere Theorie mit Praxis: lerne in der App, simuliere Investments und wende Wissen später im echten Depot an.</p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <Feature title="Lernen" desc="Micro-Lessons, Quizzes & Guided Paths." emoji="📘" />
              <Feature title="Simulieren" desc="Realistische Portfolios ohne echtes Geld." emoji="🎮" />
              <Feature title="Anwenden" desc="Sicherer Übergang zum echten Investment (Vision)." emoji="🚀" />
            </div>
          </div>
        </section>

        {/* VISION / INVESTORS */}
        <section id="vision" className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Vision: Bildung + Verantwortung</h3>
              <p className="mt-4 text-slate-600">Unsere Mission: Jugendlichen Verantwortung in Finanzfragen beibringen und sie später sicher in den Markt führen — mit 2-Factor Auth und regulatorischer Sorgfalt.</p>

              <ul className="mt-4 text-slate-600 list-disc list-inside">
                <li>Skalierbares Produktmodell: Learning → Beta → Brokerage</li>
                <li>Monetarisierung: Premium, Schulpartnerschaften, B2B</li>
                <li>Klare Roadmap für Compliance & Sicherheit</li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a href={`mailto:${CONTACT_EMAIL}?subject=Pitch%20Deck%20Anfrage`} className="px-5 py-3 rounded-md bg-emerald-600 text-white">Pitch Deck anfragen</a>
                <a href="#newsletter" className="px-5 py-3 rounded-md border border-slate-200">Newsletter</a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm">
              <h4 className="font-semibold">Beispiel-KPIs (Prognose)</h4>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Kpi title="MAU" value="25k" />
                <Kpi title="Conversion" value="6%" />
                <Kpi title="ARPU" value="€3.50" />
                <Kpi title="LTV" value="€28" />
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section id="newsletter" className="py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold">Bleib informiert</h3>
            <p className="mt-2 text-slate-600">Trage dich ein, um Produktupdates, Beta-Einladungen und Investor-News zu erhalten.</p>

            <form
  action="https://formsubmit.co/el/romecu"
  method="POST"
  className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto mt-8"
>
  {/* Weiterleitung nach erfolgreichem Absenden */}
  <input type="hidden" name="_next" value="https://juniorsinvest.com/thank-you" />

  {/* SPAM-Schutz */}
  <input type="hidden" name="_captcha" value="false" />

  {/* Eingabefeld */}
  <input
    type="email"
    name="email"
    required
    placeholder="Deine E-Mail-Adresse"
    className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  {/* Absenden-Button */}
  <button
    type="submit"
    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
  >
    Jetzt anmelden
  </button>
</form>



            <p className="mt-3 text-xs text-slate-400">Datenschutz: Wir verwenden deine E-Mail nur für Produktupdates. Ergänze Impressum & Datenschutzerklärung für rechtliche Sicherheit.</p>
          </div>
        </section>

        {/* FOOTER (Impressum + Datenschutz als Details) */}
        <footer className="py-10 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex items-start gap-4">
              <img src={logo} alt="Juniors Invest Logo" className="w-14 h-14 object-contain" />
              <div>
                <div className="font-semibold">Juniors Invest</div>
                <div className="text-xs text-slate-400">© {new Date().getFullYear()}</div>
                <div className="text-sm mt-2">Kontakt: <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a></div>
              </div>
            </div>

            <div className="max-w-xl text-sm text-slate-600">
              <details className="mb-4">
                <summary className="cursor-pointer font-medium">Impressum</summary>
                <div className="mt-3">
                  <p><strong>Angaben gemäß § 5 TMG</strong><br />
                    JuniorsInvest (in Gründung)<br />
                    Verantwortlich: Leo Candido,
                    Til Kobald<br />
                    Im Mozartwinkel 24, 74523 Schwäbisch Hall<br />
                    Telefon: 0175 2988161<br />
                    E-Mail: {CONTACT_EMAIL}
                  </p>
                  <p className="mt-3 text-xs text-slate-500">Hinweis: Die Website dient Informationszwecken; kein tatsächlicher Finanzdienstleistungsbetrieb.</p>
                </div>
              </details>

              <details>
                <summary className="cursor-pointer font-medium">Datenschutzerklärung</summary>
                <div className="mt-3">
                  <p>Verantwortlich: JuniorsInvest (Schulprojekt / in Gründung), {CONTACT_EMAIL}</p>
                  <p className="mt-3">Newsletter: E-Mails werden über FormSubmit/Zapier an Google Sheets übertragen und ausschließlich für Produktupdates verwendet.</p>
                  <p className="mt-3">Rechte: Auskunft, Berichtigung und Löschung der Daten sind möglich – schreibe an {CONTACT_EMAIL}.</p>
                </div>
              </details>
            </div>
          </div>
          <footer className="text-center text-sm text-gray-500 py-6">
  <a href="/impressum" className="mx-2 hover:underline">Impressum</a> |
  <a href="/datenschutz" className="mx-2 hover:underline">Datenschutz</a>
</footer>

        </footer>
      </main>
    </div>
  );
}

/* ---------- helper components ---------- */
function Feature({ title, desc, emoji }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 text-left">
      <div className="flex items-center gap-4">
        <div className="text-3xl">{emoji}</div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-2 text-slate-600 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Kpi({ title, value }) {
  return (
    <div className="p-3 rounded-md bg-white border border-slate-100 text-center">
      <div className="text-xs text-slate-500">{title}</div>
      <div className="mt-1 font-bold text-lg">{value}</div>
    </div>
  );
}
