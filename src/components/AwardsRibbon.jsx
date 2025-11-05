import React from 'react';
import { Award, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AwardsRibbon() {
  return (
    <div className="relative w-full">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto mt-6 mb-4 max-w-5xl rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md ring-1 ring-white/15 shadow-lg"
      >
        <div className="px-4 py-3 md:px-6 md:py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm md:text-base font-semibold">UX da premio</p>
              <p className="text-xs md:text-sm text-white/70">Microinterazioni, accessibilità e performance</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-amber-300">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>
        </div>
        <motion.div
          className="pointer-events-none absolute -bottom-6 right-10 text-fuchsia-300"
          animate={{ rotate: [0, 8, -6, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </div>
  );
}
