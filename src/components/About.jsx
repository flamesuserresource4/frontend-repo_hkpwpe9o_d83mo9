export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-blue-50/60 to-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Un approccio creativo guidato dai dati</h2>
          <p className="mt-4 text-gray-700">
            Dall’idea alla messa in strada, dirigo team e produzioni per campagne omnicanale, identità e prodotti digitali.
            Ogni progetto nasce da insight concreti e si traduce in esperienze visive coinvolgenti.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Art Direction & Concept</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Brand Identity</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Campaign & Production</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Digital & Interactive</li>
          </ul>
        </div>
        <div className="relative h-72 md:h-full">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500" />
          <div className="absolute inset-4 rounded-2xl bg-white shadow-xl border border-black/5" />
        </div>
      </div>
    </section>
  );
}
