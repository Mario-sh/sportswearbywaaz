import { QuoteIcon } from 'lucide-react';

export default function Quote() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-16 md:pt-24 pb-0 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
      
      {/* Abstract background shapes */}
      <div className="absolute right-0 bottom-0 text-[300px] font-extended font-bold text-gray-200 leading-none select-none opacity-50 z-0 tracking-tighter mix-blend-multiply">
        M
      </div>

      {/* Quote Content */}
      <div className="flex-1 max-w-xl z-10 space-y-8 lg:ml-12">
        <div className="flex gap-2 text-brand-dark">
          {/* Custom double slash quote icon */}
          <div className="w-5 h-16 bg-brand-dark transform skew-x-[20deg]"></div>
          <div className="w-5 h-16 bg-brand-dark transform skew-x-[20deg]"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-brand-dark leading-tight">
          Nothing exhausts and destroys the human body like physical inactivity.
        </h2>
        
        <p className="font-extended font-bold text-sm tracking-widest text-brand-dark uppercase">
          ARISTOTLE
        </p>
      </div>

      {/* Image */}
      <div className="flex-1 right-0 bottom-0 flex justify-end z-10 self-end">
        <img 
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop" 
          alt="Athlete with ball" 
          className="w-[80%] max-w-[500px] object-contain grayscale mix-blend-multiply"
        />
      </div>

    </section>
  );
}
