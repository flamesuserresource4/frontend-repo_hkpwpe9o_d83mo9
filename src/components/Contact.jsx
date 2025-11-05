import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-[1] bg-gradient-to-b from-white via-white to-blue-50" aria-hidden />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
        >
          Hai un progetto? Costruiamolo insieme.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-gray-600"
        >
          Direzione creativa per campagne, identità e prodotti digitali. Disponibile per collaborazioni con brand e agenzie.
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@artdirector.studio"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-black transition-colors"
          >
            <Mail className="w-4 h-4" /> Scrivimi
          </a>
          <div className="flex items-center gap-3">
            <Social href="#" label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </Social>
            <Social href="#" label="Twitter">
              <Twitter className="w-4 h-4" />
            </Social>
            <Social href="#" label="GitHub">
              <Github className="w-4 h-4" />
            </Social>
          </div>
        </div>

        <div className="mt-12 text-xs text-gray-500">
          © {new Date().getFullYear()} Art Director — Crafted with care
        </div>
      </div>
    </section>
  );
}

function Social({ href, children, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  );
}
