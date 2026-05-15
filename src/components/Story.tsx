import { motion } from 'motion/react';

export default function Story() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-40 bg-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light -z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center max-w-7xl mx-auto relative z-10">
        
        {/* Left Column: Image with offset design */}
        <div className="lg:col-span-6 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop" 
              alt="Our Story" 
              className="w-full h-[500px] md:h-[650px] object-cover grayscale brightness-90 hover:brightness-100 hover:scale-105 transition-all duration-1000"
            />
          </motion.div>
          {/* Abstract geometric shapes behind image */}
          <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-brand-yellow -z-0 rounded-full blur-2xl opacity-20"></div>
          <div className="absolute -right-4 -top-4 w-64 h-64 bg-brand-dark -z-0 rounded-[2rem] opacity-5"></div>
        </div>

        {/* Right Column: Storytelling content */}
        <div className="lg:col-span-6 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-brand-dark/30 block mb-6">Our Legacy</span>
            <h2 className="text-6xl md:text-8xl font-extended font-black text-brand-dark tracking-tighter leading-none italic uppercase">
              PURE<br/>DRIVE
            </h2>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="space-y-8 text-sm md:text-base text-brand-dark/70 font-medium leading-relaxed max-w-md"
          >
            <p className="border-l-4 border-brand-yellow pl-6 italic">
              "We didn't start PLR to just sell clothes. we started it to redefine how you feel when you move."
            </p>
            <p>
              Founded in 2018, PLR was born from a simple observation: high-performance gear lacked soul, and stylish gear lacked performance. We bridged that gap.
            </p>
            <p>
              Today, our laboratory in New York continues to experiment with sustainable textiles and ergonomic cuts that follow the natural flow of the human body.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap items-center gap-10 pt-4"
          >
            {/* Logo Mark with pulse effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-dark rounded-full animate-ping opacity-10"></div>
              <svg width="80" height="80" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-dark relative z-10 transition-transform hover:rotate-12 duration-500 cursor-pointer">
                <path d="M4 16L16 4L28 16L16 28L4 16Z" fill="currentColor" />
                <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="white" />
              </svg>
            </div>

            {/* Quote Credit */}
            <div>
              <p className="font-extended font-bold text-lg uppercase tracking-tight text-brand-dark">Marcus Thorne</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Founder & Creative Director</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

