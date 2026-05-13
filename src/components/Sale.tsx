import { Link } from 'react-router-dom';

export default function Sale() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-7xl mx-auto overflow-hidden">
      <div className="relative bg-brand-yellow h-[500px] flex items-center">
        
        {/* White angle background on right */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white opacity-40 transform origin-bottom-right -skew-x-[20deg] z-0"></div>

        {/* Models Image */}
        <img 
          src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop" 
          alt="Models in Sportswear" 
          className="absolute left-0 bottom-0 h-[110%] w-auto max-w-[60%] object-cover object-bottom grayscale mix-blend-multiply opacity-90 z-10"
        />

        {/* Content Box */}
        <div className="relative z-20 ml-auto w-full md:w-1/2 p-8 md:p-16 flex flex-col items-start pr-12 lg:pr-24">
          
          <div className="bg-white px-8 py-4 transform -skew-x-12 mb-8 shadow-xl">
             <h2 className="text-4xl md:text-5xl font-extended font-bold text-brand-dark transform skew-x-12 whitespace-nowrap">
               SALE 50%
             </h2>
          </div>

          <p className="text-sm md:text-base font-medium text-brand-dark max-w-sm mb-10 leading-relaxed pl-4 border-l-2 border-brand-dark/20">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link to="/store" className="bg-brand-dark text-white px-8 py-4 font-medium text-sm hover:opacity-80 transition-opacity ml-4 block w-fit">
            Open Catalog
          </Link>

        </div>
      </div>
    </section>
  );
}
