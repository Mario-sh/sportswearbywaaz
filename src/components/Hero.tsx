import { ArrowDown, ArrowUpRight, Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotateS = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden flex items-center bg-brand-light">
      
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y: y1, rotate: rotateS }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl z-0"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/2 -left-24 w-64 h-64 bg-brand-dark/5 rounded-full blur-2xl z-0"
      />
      
      {/* Huge Background Text with Parallax */}
      <div className="absolute top-[18%] md:top-[15%] left-0 w-full flex justify-center z-0 pointer-events-none select-none overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ x: y2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[25vw] md:text-[14vw] font-extended leading-none text-brand-dark font-black whitespace-nowrap tracking-tighter opacity-[0.03] md:opacity-[0.05]"
        >
          SPORTSWEAR
        </motion.h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center mt-4 md:mt-24">
        
        {/* Left Column: Runner Image & +100 Box */}
        <div className="relative h-[300px] sm:h-[450px] md:h-[600px] lg:h-[700px] w-full lg:col-span-7 perspective-1000">
          
          {/* Runner Image with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 z-20 flex items-center justify-center -translate-x-0 md:-translate-x-12 lg:-translate-x-24 px-4 sm:px-0"
          >
             <motion.img 
               animate={{ 
                 y: [0, -10, 0],
               }}
               transition={{ 
                 duration: 6, 
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
               src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000&auto=format&fit=crop" 
               alt="Running Athlete" 
               className="w-full h-full max-w-[120%] md:max-w-[120%] object-contain object-center mix-blend-multiply opacity-95 grayscale"
             />
          </motion.div>

          {/* Floating +100 Info Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="absolute left-4 md:left-0 lg:left-12 top-1/2 -translate-y-1/2 z-30 group"
          >
            <div className="relative w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] md:w-[220px] md:h-[220px]">
              <div className="absolute -inset-2 md:-inset-8 bg-white/40 backdrop-blur-md shadow-2xl border border-white/60 rounded-full md:rounded-none group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative bg-brand-dark text-white w-full h-full flex flex-col justify-center items-center text-center p-2 md:p-8 rounded-full md:rounded-none shadow-2xl">
                <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-display font-medium mb-1 md:mb-2">+100</span>
                <p className="text-[8px] md:text-sm font-medium text-gray-400 leading-tight uppercase tracking-widest px-2">Global Stores</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Main Content */}
        <div className="relative z-30 flex flex-col lg:col-span-5 h-full justify-center pt-2 md:pt-12 lg:pt-0 pb-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-10 text-center md:text-left px-4 md:px-0"
          >
            <div className="inline-block px-4 py-1.5 bg-brand-yellow/30 rounded-full mb-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-dark">
              Season 2024 Collection
            </div>
            <h2 className="text-5xl md:text-5xl lg:text-7xl font-display font-bold mb-4 text-brand-dark tracking-tighter leading-[0.9] italic uppercase">
              POWER & <br className="hidden md:block" /> SPEED
            </h2>
            <p className="text-brand-dark/80 text-sm md:text-base lg:text-lg font-medium font-sans max-w-sm mx-auto md:mx-0 leading-relaxed">
              Elevate your performance with gear engineered for excellence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 mb-10 md:mb-20 px-4 md:px-0"
          >
            <Link 
              to="/store" 
              className="group relative bg-brand-yellow text-brand-dark px-10 md:px-12 py-4 md:py-5 font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all duration-300 overflow-hidden shadow-xl"
            >
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            
            <button className="flex items-center gap-4 text-[10px] md:text-sm font-black uppercase tracking-widest group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 md:w-5 md:h-5 fill-brand-dark stroke-brand-dark ml-0.5" />
              </div>
              <span className="group-hover:text-brand-yellow transition-colors">Showreel</span>
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end px-4 md:px-0">
            
            {/* Paragraph & Scroll Down */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col gap-6 md:gap-12 items-center md:items-start text-center md:text-left"
            >
              <p className="text-[12px] md:text-[14px] leading-relaxed text-brand-dark/60 font-medium italic max-w-xs">
                "Fashion is the armor to survive the reality of everyday life."
              </p>
              
              <div className="hidden sm:flex items-center gap-5 group cursor-pointer w-fit mt-auto shrink-0 animate-bounce-slow">
                <div className="w-12 h-12 rounded-full border-2 border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-yellow group-hover:border-brand-yellow transition-all">
                  <ArrowDown className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-dark opacity-40">Scroll</span>
              </div>
            </motion.div>

            {/* New Collection Sub-block */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative bg-white h-[200px] md:h-[240px] w-full group overflow-hidden shadow-2xl border border-gray-100 rounded-[2rem]"
            >
               <img 
                 src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop" 
                 alt="New Collection" 
                 className="absolute right-0 bottom-0 h-full w-full object-cover object-center opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 p-8 flex flex-col justify-between items-start">
                 <div className="bg-brand-yellow px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest">New Drop</div>
                 <div className="flex justify-between items-end w-full">
                    <h3 className="font-extended font-black text-2xl md:text-3xl leading-none uppercase text-brand-dark">
                      NEXT<br/>GEN
                    </h3>
                    <Link to="/store" className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all shadow-xl group/btn">
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </Link>
                 </div>
               </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
