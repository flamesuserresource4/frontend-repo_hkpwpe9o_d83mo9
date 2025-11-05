import React, { useState } from 'react';
import AwardsRibbon from './components/AwardsRibbon';
import GlassCatScene from './components/GlassCatScene';
import ControlsPanel from './components/ControlsPanel';
import ExperienceSections from './components/ExperienceSections';

export default function App() {
  const [theme, setTheme] = useState('aurora');
  const [glow, setGlow] = useState(0.7);

  return (
    <div id="top" className="min-h-screen w-full bg-slate-950 text-white selection:bg-white/80 selection:text-slate-900">
      {/* Decorative page background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(800px_400px_at_90%_10%,rgba(244,114,182,0.22),transparent_60%),radial-gradient(1000px_500px_at_10%_0%,rgba(34,197,94,0.18),transparent_60%)]" />
      </div>

      <ControlsPanel theme={theme} setTheme={setTheme} glow={glow} setGlow={setGlow} />

      <main className="relative z-0">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <header className="pt-10 md:pt-14">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white/90">
                Gatto Traslucido 3D
              </h1>
              <span className="text-white/60 text-sm">Esperienza interattiva</span>
            </div>
          </header>
        </div>

        <AwardsRibbon />

        <div className="mx-auto max-w-6xl px-4 md:px-6 mt-4 md:mt-6">
          <GlassCatScene theme={theme} glow={glow} />
        </div>

        <ExperienceSections />

        <footer className="mt-10 md:mt-16 pb-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6 text-center text-white/60 text-sm">
            Progettato per stupire: una UX da premio.
          </div>
        </footer>
      </main>
    </div>
  );
}
