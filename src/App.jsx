// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import logo from "./assets/JuniorFunds.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 flex flex-col items-center justify-center px-6 py-12">
      {/* SEO / Meta */}
      <head>
        <title>JuniorsInvest – Learn. Invest. Grow.</title>
        <meta
          name="description"
          content="JuniorsInvest – Die erste Plattform, die Finanzbildung und Investieren für Jugendliche kombiniert. Lerne. Investiere. Wachse."
        />
        <meta property="og:title" content="JuniorsInvest – Learn. Invest. Grow." />
        <meta
          property="og:description"
          content="Die Zukunft der Jugend-Finanzbildung: Theorie trifft auf Praxis. Entwickelt für die Investoren von morgen."
        />
        <meta property="og:image" content="https://juniorsinvest.com/JuniorFunds.png" />
        <meta property="og:url" content="https://juniorsinvest.com" />
      </head>

      {/* Logo */}
      <motion.img
        src={logo}
        alt="JuniorsInvest Logo"
        className="w-32 sm:w-44 md:w-52 mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Claim */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Learn. Invest. Grow.
      </motion.h1>

      {/* Unterzeile */}
      <motion.p
        className="text-lg sm:text-xl text-gray-600 text-center mt-4 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        JuniorsInvest kombiniert Finanzbildung mit praxisnahem Investieren –
        für die nächste Generation verantwortungsvoller Anleger.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="mailto:info@juniorsinvest.com?subject=Pitchdeck Anfrage JuniorsInvest"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-lg font-semibold shadow-lg"
        >
          Pitchdeck anfragen
        </a>
        <a
          href="#newsletter"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition text-lg font-semibold"
        >
          Newsletter abonnieren
        </a>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        id="newsletter"
        className="mt-16 w-full max-w-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Werde Teil der Finanzbildungsbewegung.
        </h2>
        <p className="text-gray-500 mb-6">
          Erhalte Updates zu unserem Start, spannenden Inhalten und exklusiven Insights.
        </p>

        {/* 💌 Newsletter-Formular */}
        <form
          action="https://formsubmit.co/el/romecu"
          method="POST"
          className="flex flex-col sm:flex-row gap-3 w-full"
        >
          {/* Unsichtbare Felder */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/thank-you" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value="Neue Newsletter-Anmeldung auf JuniorsInvest"
          />
          <input type="hidden" name="_replyto" value="info@juniorsinvest.com" />

          {/* Eingabefeld */}
          <input
            type="email"
            name="email"
            required
            placeholder="Deine E-Mail-Adresse"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Absenden */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            Jetzt anmelden
          </button>
        </form>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="mt-20 text-gray-500 text-sm text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p>
          © {new Date().getFullYear()} JuniorsInvest. Alle Rechte vorbehalten. |
          <a
            href="/impressum"
            className="text-blue-600 hover:underline ml-1"
          >
            Impressum
          </a>{" "}
          |{" "}
          <a
            href="/datenschutz"
            className="text-blue-600 hover:underline"
          >
            Datenschutz
          </a>
        </p>
      </motion.footer>
    </div>
  );
}
