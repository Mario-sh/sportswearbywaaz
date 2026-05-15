import { Plus, Filter, Search, Heart, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

const DUMMY_PRODUCTS = [
  {
    id: 'prod-1',
    name: "Men's tight tracksuit",
    price: 419,
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1000&auto=format&fit=crop",
    category: "Men",
    tag: "Best Seller"
  },
  {
    id: 'prod-2',
    name: "Women's Sports Deuce",
    price: 289,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    category: "Women",
    tag: "New"
  },
  {
    id: 'prod-3',
    name: "Men's Sports Hoodie",
    price: 199,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
    category: "Men",
    tag: "Premium"
  },
  {
    id: 'prod-4',
    name: "Women's Sports T-shirt",
    price: 159,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=1000&auto=format&fit=crop",
    category: "Women",
    tag: "Essential"
  },
  {
    id: 'prod-5',
    name: "Pro Running Shoes",
    price: 249,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    category: "Unisex",
    tag: "Pro"
  },
  {
    id: 'prod-6',
    name: "Compression Tights",
    price: 89,
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1000&auto=format&fit=crop",
    category: "Women",
    tag: "Training"
  },
  {
    id: 'prod-7',
    name: "Training Backpack",
    price: 129,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
    tag: "Eco"
  },
  {
    id: 'prod-8',
    name: "Windbreaker Jacket",
    price: 349,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
    category: "Men",
    tag: "Limited"
  }
];

export default function Store() {
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory('All');
    }
  }, [searchParams]);

  const updateCategory = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = activeCategory === 'All' 
    ? DUMMY_PRODUCTS 
    : DUMMY_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans selection:bg-brand-yellow selection:text-brand-dark flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="space-y-4"
            >
              <h1 className="text-6xl md:text-8xl font-extended font-black text-brand-dark tracking-tighter leading-none uppercase italic">
                STORE
              </h1>
              <p className="text-brand-dark/50 max-w-sm text-sm font-bold uppercase tracking-widest leading-relaxed">
                Elevate your training signature <br/> with our core collection.
              </p>
            </motion.div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative flex-1 md:w-64">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/30" />
                 <input 
                   type="text" 
                   placeholder="Search products..."
                   className="w-full bg-white border border-gray-200 rounded-full pl-12 pr-6 py-4 text-sm font-bold focus:outline-none focus:border-brand-yellow transition-colors"
                 />
               </div>
               <button className="w-14 h-14 bg-brand-dark text-brand-yellow rounded-full flex items-center justify-center hover:bg-black transition-colors shrink-0 shadow-xl">
                 <Filter className="w-5 h-5" />
               </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 mb-16 overflow-x-auto pb-4 hide-scrollbar"
          >
            {['All', 'Men', 'Women', 'Accessories', 'Unisex'].map((cat) => (
              <button 
                key={cat} 
                onClick={() => updateCategory(cat)}
                className={`shrink-0 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-brand-yellow text-brand-dark shadow-xl shadow-brand-yellow/30' 
                    : 'bg-white text-brand-dark/40 hover:bg-gray-100 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={product.id} 
                  className="group relative"
                >
                  <div className="relative bg-white aspect-[3/4] overflow-hidden mb-6 rounded-[2.5rem] shadow-xl shadow-black/5 group-hover:shadow-2xl transition-all duration-500">
                    
                    <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
                      <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-brand-yellow transition-colors shadow-sm">
                        <Heart className="w-4 h-4 text-brand-dark" />
                      </button>
                    </div>

                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center grayscale mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-1000"
                    />
                    
                    {/* Floating Info Tag */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-3 py-1 bg-brand-dark text-white text-[9px] font-black uppercase tracking-widest rounded-lg">
                        {product.tag}
                      </span>
                    </div>

                    {/* Quick Action Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-8 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                       <button 
                         onClick={() => addToCart(product)}
                         className="w-full bg-brand-dark text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-yellow hover:text-brand-dark transition-all shadow-2xl"
                       >
                         <ShoppingBag className="w-4 h-4" />
                         Add to Basket
                       </button>
                    </div>
                  </div>

                  <div className="px-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/30">{product.category}</p>
                        <h3 className="text-sm font-black text-brand-dark group-hover:text-brand-yellow transition-colors leading-tight">{product.name}</h3>
                      </div>
                      <p className="text-xl font-black text-brand-dark italic leading-none">${product.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

