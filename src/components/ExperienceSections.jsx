import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceSections() {
  const items = [
    {
      title: 'Interazione Naturale',
      text: 'Rotazione fluida, zoom controllato e feedback visivi morbidi: ti senti subito a casa.',
    },
    {
      title: 'Estetica in Vetro',
      text: 'Traslucenze, riflessi e gradienti aurorali per un look premium e senza tempo.',
    },
    {
      title: 'Accessibilità Curata',
      text: 'Contrasto leggibile, hit-area generose e contenuto sempre navigabile da tastiera.',
    },
  ];

  return (
    <section id="experience" className="relative z-0 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-6 shadow-lg"
            >
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 md:mt-14 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 ring-1 ring-white/10 backdrop-blur-xl p-6 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-white text-xl md:text-2xl font-semibold">Un viaggio micro-interattivo</h4>
              <p className="text-white/70 mt-2 max-w-2xl">
                Animazioni di livello, tempi curati, e focus sugli stati: ogni dettaglio lavora per la
                meraviglia e la comprensibilità.
              </p>
            </div>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-xl bg-white/90 text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-white transition"
            >
              Torna su
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
