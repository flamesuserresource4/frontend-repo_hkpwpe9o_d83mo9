import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-white/40 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="flex items-center gap-2 font-semibold tracking-tight text-gray-900"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-5 h-5 text-blue-600" />
          <span>Art Director Portfolio</span>
        </motion.a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            { id: 'work', label: 'Progetti' },
            { id: 'about', label: 'Approccio' },
            { id: 'contact', label: 'Contatti' },
          ].map((item, i) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-700 hover:text-gray-900 transition-colors"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1), duration: 0.5 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-black transition-colors"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Parliamo <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>
    </div>
  );
}
