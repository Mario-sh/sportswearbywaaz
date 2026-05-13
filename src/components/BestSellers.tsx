import { Settings2, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 'bs-1',
    name: "Men's tight tracksuit",
    price: 419,
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=600&auto=format&fit=crop",
    offset: "lg:mt-0"
  },
  {
    id: 'bs-2',
    name: "Women's Sports Deuce",
    price: 289,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
    offset: "lg:mt-24"
  },
  {
    id: 'bs-3',
    name: "Men's Sports Hoodie",
    price: 199,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    offset: "lg:mt-0"
  },
  {
    id: 'bs-4',
    name: "Women's Sports T-shirt",
    price: 159,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=600&auto=format&fit=crop",
    offset: "lg:mt-24"
  }
];

export default function BestSellers() {
  const { addToCart } = useCart();

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-6xl font-extended font-bold text-brand-dark">BEST<br className="md:hidden"/> SELLERS</h2>
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
          <div className="w-12 h-12 bg-gray-200 flex items-center justify-center group-hover:bg-brand-yellow transition-colors">
            <Settings2 className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium text-brand-dark/60">Settings</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            key={product.id} 
            className={`group ${product.offset}`}
          >
            <div className="bg-[#EAEAEA] aspect-[3/4] relative overflow-hidden mb-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center grayscale mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-brand-dark/80 mb-1">{product.name}</p>
                <p className="text-lg font-bold text-brand-dark">${product.price}</p>
              </div>
              <button 
                onClick={() => addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image
                })}
                className="w-8 h-8 bg-brand-yellow flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors"
                aria-label={`Add ${product.name} to cart`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
