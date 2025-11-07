import { MapPin, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Onde estamos</h2>
            <p className="text-white/70 mt-2">Faça uma visita ou entre em contato para agendar.</p>

            <div className="mt-6 space-y-3 text-white/80">
              <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-amber-300" /> Rua Exemplo, 123 - Centro, Sua Cidade</p>
              <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-amber-300" /> (00) 00000-0000</p>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white">
                <Instagram className="w-5 h-5 text-amber-300" /> @guappobarbearia
              </a>
            </div>

            <a
              href="tel:+550000000000"
              className="mt-6 inline-block rounded-full bg-amber-400 text-black px-6 py-3 font-semibold hover:bg-amber-300 transition-colors"
            >
              Agendar agora
            </a>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 h-[320px] bg-black">
            <iframe
              title="Mapa"
              src="https://maps.google.com/maps?q=Av.%20Paulista%2C%201000&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
