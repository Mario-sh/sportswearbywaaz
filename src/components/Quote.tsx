import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Quote() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const letterX = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="px-6 md:px-12 lg:px-24 pt-24 md:pt-40 pb-0 overflow-hidden bg-brand-light">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 relative">
        
        {/* Huge Ghost Text with Animation */}
        <motion.div 
          style={{ x: letterX, opacity }}
          className="absolute -right-24 -bottom-10 text-[35vw] font-extended font-black text-brand-dark/5 leading-none select-none z-0 tracking-tighter"
        >
          GO
        </motion.div>

        {/* Quote Content */}
        <div className="flex-1 max-w-2xl z-10 space-y-12 pb-24 text-center md:text-left">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="flex gap-3 justify-center md:justify-start"
          >
            <div className="w-4 h-20 bg-brand-yellow transform skew-x-[25deg]"></div>
            <div className="w-1.5 h-20 bg-brand-dark transform skew-x-[25deg]"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-brand-dark leading-[1.1] tracking-tight"
          >
            Nothing exhausts and destroys the human body like <span className="italic font-black text-brand-yellow drop-shadow-[1px_1px_0_rgba(0,0,0,0.1)]">physical inactivity.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-2"
          >
            <div className="w-12 h-1 bg-brand-dark mx-auto md:mx-0"></div>
            <p className="font-extended font-black text-xl tracking-[0.2em] text-brand-dark uppercase italic">
              ARISTOTLE
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40">The Philosopher</p>
          </motion.div>
        </div>

        {/* Image with container clipping */}
        <motion.div 
          initial={{ opacity: 0, rotate: 5, y: 50 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="flex-1 right-0 bottom-0 flex justify-end z-10 self-end"
        >
          <img 
            src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop" 
            alt="Athlete with ball" 
            className="w-full max-w-[550px] object-contain grayscale mix-blend-multiply opacity-90 brightness-110 contrast-125"
          />
        </motion.div>

      </div>
    </section>
  );
}

