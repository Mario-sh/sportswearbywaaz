import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Tag } from 'lucide-react';

export default function Sale() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-24 py-24 md:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative h-[600px] md:h-[650px] bg-brand-yellow rounded-[4rem] overflow-hidden shadow-2xl shadow-brand-yellow/30">
        
        {/* Dynamic Background Patterns */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white/20 -skew-x-12 translate-x-1/2"></div>
        
        {/* Animated Badge */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-12 -right-12 w-40 h-40 bg-brand-dark/5 border border-brand-dark/10 rounded-full flex items-center justify-center -z-0"
        >
          <div className="text-[8px] font-black uppercase tracking-[0.3em] text-brand-dark/20 text-center">
            Limited Time • Flash Sale • Limited Time • 
          </div>
        </motion.div>

        {/* Content Container */}
        <div className="relative h-full w-full flex flex-col md:flex-row items-center">
          
          {/* Models Image with Parallax */}
          <div className="relative w-full h-1/2 md:h-full md:w-1/2 flex items-end justify-center md:justify-start">
            <motion.img 
              style={{ x: imageX }}
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop" 
              alt="Models in Sportswear" 
              className="relative bottom-0 h-[120%] w-auto object-cover grayscale mix-blend-multiply opacity-90 z-10 origin-bottom"
            />
          </div>

          {/* Info Content */}
          <motion.div 
            style={{ y: textY }}
            className="flex-1 p-10 md:p-20 flex flex-col items-center md:items-start text-center md:text-left z-20"
          >
            <div className="flex items-center gap-3 mb-6 bg-brand-dark text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
               <Tag className="w-3 h-3 text-brand-yellow" />
               Seasonal Offer
            </div>

            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-extended font-black text-brand-dark tracking-tighter leading-[0.8] italic uppercase mb-8">
              SALE<br/><span className="text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">50%</span>
            </h2>

            <p className="text-sm md:text-lg font-bold text-brand-dark/80 max-w-sm mb-12 leading-relaxed">
              Unlock your potential without breaking the bank. Our semi-annual clearance is now live.
            </p>

            <Link to="/store" className="group/btn relative bg-brand-dark text-white pl-10 pr-8 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <span className="relative z-10">Open Catalog</span>
              <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center group-hover/btn:translate-x-2 transition-transform">
                 <ArrowRight className="w-5 h-5 text-brand-dark" />
              </div>
              <div className="absolute inset-0 bg-brand-yellow rounded-2xl opacity-0 scale-90 group-hover/btn:opacity-10 transition-all"></div>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

