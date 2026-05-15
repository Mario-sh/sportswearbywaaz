import { Settings2, Plus, ArrowRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'bs-1',
    name: "Men's tight tracksuit",
    price: 419,
    category: "Professional",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=600&auto=format&fit=crop",
    offset: "lg:mt-0"
  },
  {
    id: 'bs-2',
    name: "Women's Sports Deuce",
    price: 289,
    category: "Performance",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
    offset: "lg:mt-24"
  },
  {
    id: 'bs-3',
    name: "Men's Sports Hoodie",
    price: 199,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    offset: "lg:mt-0"
  },
  {
    id: 'bs-4',
    name: "Women's Sports T-shirt",
    price: 159,
    category: "Training",
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=600&auto=format&fit=crop",
    offset: "lg:mt-24"
  }
];

export default function BestSellers() {
  const { addToCart } = useCart();

  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
        <div className="space-y-3 md:space-y-4">
           <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-dark/30">Most Wanted</span>
           <h2 className="text-5xl md:text-8xl font-extended font-black text-brand-dark tracking-tighter leading-none italic uppercase">
             BEST<br/>SELLERS
           </h2>
        </div>
        
        <div className="flex items-center gap-6 self-start md:self-auto">
          <Link to="/store" className="group flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-widest hover:text-brand-yellow transition-colors">
            View All Products
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-yellow group-hover:border-brand-yellow transition-all">
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8">
        {products.map((product, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
            key={product.id} 
            className={`group relative ${product.offset}`}
          >
            <div className="relative bg-white aspect-[3/4] overflow-hidden mb-6 rounded-[2rem] shadow-xl shadow-black/5 group-hover:shadow-2xl transition-all duration-500">
              
              <div className="absolute top-4 right-4 z-20">
                <button className="w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-brand-yellow transition-colors shadow-sm">
                  <Heart className="w-4 h-4 text-brand-dark" />
                </button>
              </div>

              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center grayscale mix-blend-multiply opacity-90 group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000"
              />
              
              <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Quick Add Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <button 
                   onClick={() => addToCart({
                     id: product.id,
                     name: product.name,
                     price: product.price,
                     image: product.image
                   })}
                   className="whitespace-nowrap px-8 py-4 bg-brand-dark text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-dark transition-all flex items-center gap-3 shadow-2xl"
                >
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="px-2">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 mb-1">{product.category}</p>
                  <h3 className="text-sm font-bold text-brand-dark group-hover:text-brand-yellow transition-colors">{product.name}</h3>
                </div>
                <p className="text-lg font-black text-brand-dark italic">${product.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

