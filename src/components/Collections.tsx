import { Link } from 'react-router-dom';

export default function Collections() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* Men's Collection */}
        <div className="relative h-[450px] bg-brand-yellow overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" 
            alt="Men's Collection" 
            className="absolute right-0 bottom-0 h-[90%] object-cover object-center grayscale mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700 origin-bottom"
          />
          <div className="relative h-full p-12 flex flex-col justify-between z-10">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-dark max-w-[200px] leading-tight">
              Men's Collection
            </h2>
            <Link to="/store" className="bg-brand-dark text-white px-8 py-4 font-medium text-sm self-start hover:bg-black transition-colors block w-fit">
              Open Store
            </Link>
          </div>
        </div>

        {/* Woman Collection */}
        <div className="relative h-[450px] bg-brand-gray overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-gray/80 z-10"></div>
          {/* Abstract diagonal pattern for background (simplified with CSS diagonal lines) */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>
          
          <img 
            src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop" 
            alt="Woman Collection" 
            className="absolute right-0 top-0 h-full w-[60%] object-cover object-top grayscale opacity-70 group-hover:scale-105 transition-transform duration-700 origin-right"
          />
          <div className="relative h-full p-12 flex flex-col text-white z-20">
            <h2 className="text-4xl md:text-5xl font-display font-medium max-w-[200px] leading-tight">
              Woman Collection
            </h2>
            <div className="mt-auto">
               <Link to="/store" className="bg-white text-brand-dark px-8 py-4 font-medium text-sm hover:bg-gray-100 transition-colors block w-fit">
                 Open Store
               </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
