
"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="h-screen flex flex-col justify-center items-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold text-center"
        >
          Welcome Home
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-300 text-center max-w-2xl"
        >
          A modern church platform designed for worship,
          livestreams, events, sermons and digital engagement.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold"
        >
          Watch Live
        </motion.button>
      </section>
    </main>
  );
}
