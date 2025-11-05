import { motion } from 'framer-motion';
import { ArrowUpRight, PenTool, Camera, Megaphone } from 'lucide-react';

const projects = [
  {
    title: 'Launch Campaign — NeoWear',
    tag: 'Integrated Campaign',
    color: 'from-fuchsia-500 to-indigo-500',
    icon: Megaphone,
  },
  {
    title: 'Luxury Fragrance — AURA',
    tag: 'Art Direction & Film',
    color: 'from-amber-500 to-rose-500',
    icon: Camera,
  },
  {
    title: 'Brand System — Atelier Lune',
    tag: 'Identity & Guidelines',
    color: 'from-cyan-500 to-blue-600',
    icon: PenTool,
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Progetti selezionati</h2>
            <p className="mt-2 text-gray-600">Una collezione di lavori che fondono insight strategici e craft visivo.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-gray-900 hover:text-black font-medium">
            Parliamo <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.06 * i }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all"
            >
              <div className={`h-44 bg-gradient-to-br ${p.color}`} />
              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wider">
                  <p.icon className="w-4 h-4" />
                  <span>{p.tag}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 leading-tight">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-gray-600 text-sm">Case study, teaser, key visuals</p>
                  <button className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white group-hover:scale-105 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-transparent via-transparent to-black/10" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
