import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/U0bqUsWyuWnO8zK0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Elegância e atitude em cada corte
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Experiência premium de barbearia com profissionais especializados em cortes clássicos e modernos.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#servicos" className="rounded-full bg-amber-400 text-black px-6 py-3 font-semibold hover:bg-amber-300 transition-colors">
            Ver serviços
          </a>
          <a href="#contato" className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-white/40 transition-colors">
            Fale conosco
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  );
}
