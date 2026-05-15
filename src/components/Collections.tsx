import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Collections() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark/40">Categories</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-dark tracking-tighter">
              DISCOVER OUR <br/> UNIVERSE
            </h2>
          </div>
          <p className="text-brand-dark/60 font-medium max-w-sm text-sm md:text-base leading-relaxed">
            From professional athletes to weekend warriors, we provide the gear you need to push your limits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          
          {/* Men's Collection */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative h-[450px] md:h-[600px] bg-brand-yellow overflow-hidden group rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl shadow-brand-yellow/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" 
              alt="Men's Collection" 
              className="absolute right-0 bottom-0 h-[92%] w-full object-cover object-center grayscale mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-1000 origin-bottom"
            />
            <div className="relative h-full p-8 md:p-14 flex flex-col justify-between z-10">
              <div className="space-y-1 md:space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-brand-dark text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-full">Explore</span>
                <h2 className="text-5xl md:text-7xl font-display font-black text-brand-dark leading-none uppercase tracking-tighter">
                  Men
                </h2>
              </div>
              <Link to="/store?category=Men" className="group/btn bg-brand-dark text-white pl-8 pr-6 py-4 md:py-5 font-bold text-[10px] uppercase tracking-widest self-center md:self-start hover:bg-black transition-all flex items-center gap-4 rounded-xl md:rounded-2xl">
                Open Catalog
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center group-hover/btn:translate-x-2 transition-transform">
                  <ArrowRight className="w-4 h-4 text-brand-dark" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Woman Collection */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="relative h-[450px] md:h-[600px] bg-brand-dark overflow-hidden group rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl shadow-black/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop" 
              alt="Woman Collection" 
              className="absolute inset-0 h-full w-full object-cover grayscale opacity-50 group-hover:scale-110 transition-transform duration-1000"
            />
            
            <div className="relative h-full p-8 md:p-14 flex flex-col justify-between text-white z-20">
              <div className="space-y-1 md:space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-brand-yellow text-brand-dark text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-full">New Arrivals</span>
                <h2 className="text-5xl md:text-7xl font-display font-black leading-none uppercase tracking-tighter">
                  Women
                </h2>
              </div>
              <Link to="/store?category=Women" className="group/btn bg-white text-brand-dark pl-8 pr-6 py-4 md:py-5 font-bold text-[10px] uppercase tracking-widest self-center md:self-start hover:bg-gray-100 transition-all flex items-center gap-4 rounded-xl md:rounded-2xl">
                Open Catalog
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center group-hover/btn:translate-x-2 transition-transform">
                  <ArrowRight className="w-4 h-4 text-brand-dark" />
                </div>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
