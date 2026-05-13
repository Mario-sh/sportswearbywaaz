import { ArrowDown, ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden flex items-center bg-brand-light">

      
      {/* Huge Background Text */}
      <div className="absolute top-[15%] md:top-[12%] left-0 w-full flex justify-center z-0 pointer-events-none select-none">
        <h1 className="text-[17vw] md:text-[12vw] font-extended leading-none text-brand-dark font-extrabold whitespace-nowrap tracking-tighter" style={{letterSpacing: '-0.02em'}}>
          SPORTSWEAR
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center mt-12 md:mt-24">
        
        {/* Left Column: Runner Image & +100 Box */}
        <div className="relative h-[350px] md:h-[600px] lg:h-[700px] w-full lg:col-span-7">
          
          {/* Runner Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-20 flex items-center justify-center -translate-x-4 md:-translate-x-12 lg:-translate-x-24"
          >
             <img 
               src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000&auto=format&fit=crop" 
               alt="Running Athlete" 
               className="w-full h-full max-w-[150%] md:max-w-[120%] object-contain object-center mix-blend-multiply opacity-95 grayscale"
             />
          </motion.div>

          {/* Box left side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-2 md:left-0 lg:left-12 top-1/2 -translate-y-1/2 z-30"
          >
            <div className="relative w-[140px] h-[140px] md:w-[220px] md:h-[220px]">
              {/* Glossy/White offset background */}
              <div className="absolute -inset-4 md:-inset-8 bg-white/40 backdrop-blur-md shadow-sm border border-white/60"></div>
              {/* Main Black Box */}
              <div className="relative bg-brand-dark text-white w-full h-full flex flex-col justify-center items-center text-center p-4 md:p-8">
                <span className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-display font-medium mb-1 md:mb-2">+100</span>
                <p className="text-[10px] md:text-sm font-medium text-gray-400 leading-tight">stores around<br/>the world</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Main Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-30 flex flex-col lg:col-span-5 h-full justify-center pt-8 md:pt-12 lg:pt-0"
        >
          <div className="mb-6 md:mb-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-2 md:mb-4 text-brand-dark tracking-tight">Men's & Woman</h2>
            <p className="text-brand-dark/80 text-[13px] md:text-[15px] lg:text-base font-medium font-sans">
              Online store selling high-quality sportswear
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 mb-12 md:mb-16">
            <Link to="/store" className="bg-brand-yellow text-brand-dark px-8 md:px-10 py-3 md:py-4 font-medium text-xs md:text-sm hover:bg-yellow-400 transition-colors">
              Buy Now
            </Link>
            <button className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-medium hover:opacity-60 transition-opacity">
              Watch Video
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgb(0,0,0,0.06)]">
                <Play className="w-3 h-3 md:w-4 md:h-4 fill-brand-dark stroke-brand-dark ml-0.5" />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">
            
            {/* Paragraph & Scroll Down */}
            <div className="flex flex-col gap-6 md:gap-10 items-center md:items-start text-center md:text-left">
              <p className="text-[12px] md:text-[13px] leading-[1.8] text-brand-dark/70 font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              
              <div className="hidden md:flex items-center gap-4 group cursor-pointer w-fit mt-auto shrink-0 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                  <ArrowDown className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-brand-dark">Scroll Down</span>
              </div>
            </div>

            {/* New Collection Sub-block */}
            <div className="relative bg-[#EAEAEA] h-[220px] sm:h-[190px] w-full group overflow-hidden shadow-sm">
               <img 
                 src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop" 
                 alt="New Collection" 
                 className="absolute right-0 bottom-0 h-full w-[80%] object-cover object-right mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 p-6 flex flex-col justify-between">
                 <h3 className="font-extended font-bold text-lg leading-tight uppercase text-brand-dark relative z-10 max-w-[120px]">
                   NEW<br/>COLLECTION
                 </h3>
                 <Link to="/store" className="w-10 h-10 bg-white text-brand-dark rounded-full flex items-center justify-center self-start hover:bg-brand-yellow hover:scale-110 transition-all z-10 shadow-sm relative overflow-hidden">
                   <ArrowUpRight className="w-4 h-4 relative z-10" />
                 </Link>
               </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
