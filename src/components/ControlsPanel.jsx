import React from 'react';
import { Sun, Moon, Sliders } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ControlsPanel({ theme, setTheme, glow, setGlow }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="fixed right-4 top-4 z-10"
    >
      <div className="pointer-events-auto rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20 shadow-xl p-3 md:p-4 flex flex-col gap-3 w-64">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-white/90 font-semibold">
            <Sliders className="h-4 w-4" />
            Controlli
          </div>
          <div className="text-xs text-white/60">Live</div>
        </div>

        {/* Themes */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { key: 'aurora', label: 'Aurora' },
            { key: 'sunset', label: 'Sunset' },
            { key: 'midnight', label: 'Midnight' },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTheme(t.key)}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition ring-1 hover:ring-white/40 ${
                theme === t.key
                  ? 'bg-white/80 text-slate-900 ring-white/60'
                  : 'bg-white/10 text-white/80 ring-white/20'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Glow control */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-white/80 text-sm">
            <span>Glow</span>
            <span className="tabular-nums">{Math.round(glow * 100)}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-amber-200" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={glow}
              onChange={(e) => setGlow(parseFloat(e.target.value))}
              className="w-full accent-white/90"
              aria-label="Glow intensity"
            />
            <Moon className="h-4 w-4 text-blue-200" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
