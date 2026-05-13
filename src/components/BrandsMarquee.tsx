export default function BrandsMarquee() {
  const brands = [
    "NIKE", "AIR FORCE", "JORDAN", "ANTA", "BALENCIAGA", 
    "ADIDAS", "PUMA", "REEBOK", "NEW BALANCE", "ASICS"
  ];

  return (
    <div className="w-full overflow-hidden bg-brand-dark py-8 border-y border-white/10 flex items-center relative z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Render the list twice for seamless infinite scrolling loops */}
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center px-8 sm:px-12">
            <span className="text-2xl md:text-3xl font-extended font-bold text-transparent" 
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>
              {brand}
            </span>
            <div className="w-2 h-2 rounded-full bg-brand-yellow ml-16 sm:ml-24"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
