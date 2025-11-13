import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ThankYou() {
  const navigate = useNavigate();

  // Automatische Weiterleitung nach 5 Sekunden
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 text-center px-6">
      {/* Check Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="bg-green-500 text-white w-20 h-20 flex items-center justify-center rounded-full shadow-lg mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      {/* Text */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold mb-4"
      >
        Danke für dein Interesse an JuniorsInvest!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg text-gray-600 max-w-md"
      >
        Wir haben deine Anfrage erhalten.  
        Du erhältst in Kürze eine E-Mail mit weiteren Informationen zum Pitchdeck.  
        <br />
        <br />
        Du wirst automatisch zur Startseite weitergeleitet.
      </motion.p>

      {/* Manuelle Zurück-Schaltfläche */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Zurück zur Startseite
      </motion.button>
    </div>
  );
}
