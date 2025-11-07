export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1622286342621-4bd786c2447a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616394584738-fc6e612c64b9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1622286342621-4bd786c2447a?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <section id="galeria" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Nosso trabalho</h2>
          <p className="text-white/70 mt-2">Alguns registros do nosso dia a dia</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden rounded-lg border border-white/10">
              <img
                src={src}
                alt="Corte de cabelo"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
