import { motion } from 'motion/react';

export default function BrandsMarquee() {
  const brands = [
    "NIKE", "AIR FORCE", "JORDAN", "ANTA", "BALENCIAGA", 
    "ADIDAS", "PUMA", "REEBOK", "NEW BALANCE", "ASICS"
  ];

  return (
    <div className="w-full overflow-hidden bg-brand-dark py-10 md:py-16 border-y border-white/5 flex items-center relative z-20">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap"
      >
        {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center px-10 md:px-16">
            <span className="text-3xl md:text-5xl lg:text-6xl font-extended font-black text-transparent hover:text-brand-yellow transition-colors duration-500 cursor-default" 
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}>
              {brand}
            </span>
            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-brand-yellow ml-20 md:ml-32 shadow-[0_0_15px_rgba(255,240,0,0.4)]"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

