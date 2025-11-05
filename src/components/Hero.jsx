import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section id="hero" ref={ref} className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/39S4-yiOEgysmb86/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white/80" />

      <motion.div style={{ y, opacity }} className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="pointer-events-none select-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900"
         >
            Direzione creativa, chiavi d’accesso al futuro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-700"
          >
            Un linguaggio visivo moderno: superfici traslucide, riflessi cromatici e un’estetica digitale pensata per brand tecnologici.
          </motion.p>
          <div className="mt-8 flex items-center gap-3">
            <motion.a
              href="#work"
              className="pointer-events-auto inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-black transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Esplora i progetti
            </motion.a>
            <motion.a
              href="#contact"
              className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur-sm text-gray-900 hover:bg-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contattami
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
