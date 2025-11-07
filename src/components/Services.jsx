import { Scissors, Sparkles, User, Clock } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Corte Premium',
    desc: 'Cortes clássicos e modernos com acabamento impecável.',
    price: 'R$ 60,00',
  },
  {
    icon: Sparkles,
    title: 'Barba e Toalha Quente',
    desc: 'Ritual completo com navalha e hidratação.',
    price: 'R$ 45,00',
  },
  {
    icon: User,
    title: 'Corte + Barba',
    desc: 'Combo completo para um visual autêntico.',
    price: 'R$ 95,00',
  },
  {
    icon: Clock,
    title: 'Plano Mensal',
    desc: 'Assinatura para manter o estilo sempre em dia.',
    price: 'A partir de R$ 149,00',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nossos serviços</h2>
          <p className="text-white/70 mt-2">Qualidade premium com preço justo</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-amber-400/20 border border-amber-300/30 flex items-center justify-center">
                <s.icon className="text-amber-300" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="text-white/70 text-sm mt-1">{s.desc}</p>
              <div className="mt-4 text-amber-300 font-bold">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
