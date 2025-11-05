import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const DEFAULT_SCENE = 'https://prod.spline.design/8t7f5dQMXnuxb9xw/scene.splinecode';

export default function GlassCatScene({ theme = 'aurora', glow = 0.7, sceneUrl = DEFAULT_SCENE }) {
  const gradientMap = {
    aurora: {
      from: 'from-cyan-400/40',
      via: 'via-fuchsia-400/30',
      to: 'to-emerald-300/40',
      ring: 'ring-cyan-300/30',
      glow: 'bg-cyan-300/20',
    },
    sunset: {
      from: 'from-rose-400/40',
      via: 'via-orange-400/30',
      to: 'to-yellow-300/40',
      ring: 'ring-rose-300/30',
      glow: 'bg-rose-300/20',
    },
    midnight: {
      from: 'from-indigo-400/40',
      via: 'via-sky-400/20',
      to: 'to-purple-300/40',
      ring: 'ring-indigo-300/30',
      glow: 'bg-indigo-300/20',
    },
  };

  const g = gradientMap[theme] || gradientMap.aurora;
  const glowScale = Math.max(0, Math.min(1, glow));

  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden rounded-3xl shadow-2xl ring-1 backdrop-blur-xl bg-white/5 ring-white/10">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradients above the scene (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className={`absolute -top-24 -left-24 h-96 w-96 bg-gradient-to-br ${g.from} ${g.via} ${g.to} blur-3xl rounded-full opacity-60`}
          animate={{ x: [0, 20, -10, 0], y: [0, -10, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute bottom-[-4rem] right-[-4rem] h-[28rem] w-[28rem] ${g.glow} blur-[110px] rounded-full`}
          animate={{ opacity: [0.15, 0.35 * glowScale + 0.15, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Frosted glass frame hint */}
        <div className={`absolute inset-0 rounded-3xl ring-1 ${g.ring}`} />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 via-transparent to-white/10" />
      </div>

      {/* CTA overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <div className="pointer-events-auto mx-auto max-w-xl rounded-2xl backdrop-blur-md bg-white/10 ring-1 ring-white/20 p-4 md:p-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-white/90 text-sm md:text-base font-medium">
              Gatto 3D traslucido. Interagisci: ruota, zooma, esplora.
            </p>
            <p className="text-white/60 text-xs md:text-sm">Un tocco di vetro, luce morbida e microinterazioni.</p>
          </div>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-xl bg-white/90 text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-white transition"
          >
            Scopri
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
