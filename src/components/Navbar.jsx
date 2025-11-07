import { useState } from 'react';
import { Menu, X, Scissors, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400/30">
              <Scissors className="w-5 h-5 text-amber-300" />
            </span>
            <span className="font-semibold tracking-wide">Guappo Barbearia</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="tel:+550000000000"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-black px-4 py-2 font-medium hover:bg-amber-300 transition-colors"
            >
              <PhoneCall className="w-4 h-4" /> Agendar
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-white/90">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href="tel:+550000000000"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-black px-4 py-2 font-medium w-max"
              onClick={() => setOpen(false)}
            >
              <PhoneCall className="w-4 h-4" /> Agendar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
