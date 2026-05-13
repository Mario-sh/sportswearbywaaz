import { Plus } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const DUMMY_PRODUCTS = [
  {
    id: 'prod-1',
    name: "Men's tight tracksuit",
    price: 419,
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=600&auto=format&fit=crop",
    category: "Men"
  },
  {
    id: 'prod-2',
    name: "Women's Sports Deuce",
    price: 289,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
    category: "Women"
  },
  {
    id: 'prod-3',
    name: "Men's Sports Hoodie",
    price: 199,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    category: "Men"
  },
  {
    id: 'prod-4',
    name: "Women's Sports T-shirt",
    price: 159,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=600&auto=format&fit=crop",
    category: "Women"
  },
  {
    id: 'prod-5',
    name: "Pro Running Shoes",
    price: 249,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    category: "Unisex"
  },
  {
    id: 'prod-6',
    name: "Compression Tights",
    price: 89,
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=600&auto=format&fit=crop",
    category: "Women"
  },
  {
    id: 'prod-7',
    name: "Training Backpack",
    price: 129,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
    category: "Accessories"
  },
  {
    id: 'prod-8',
    name: "Windbreaker Jacket",
    price: 349,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    category: "Men"
  }
];

export default function Store() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans overflow-x-hidden selection:bg-brand-yellow selection:text-brand-dark flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-extended font-bold text-brand-dark mb-4">STORE</h1>
            <p className="text-brand-dark/70 max-w-md text-sm md:text-base font-medium">
              Explore our latest collection of premium sportswear designed for maximum performance and style.
            </p>
          </div>

          <div className="flex gap-4 mb-8 overflow-x-auto pb-4 hide-scrollbar">
            {['All', 'Men', 'Women', 'Accessories', 'New Arrival'].map((cat, i) => (
              <button 
                key={cat} 
                className={`shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0 ? 'bg-brand-dark text-white' : 'bg-gray-200 text-brand-dark hover:bg-brand-yellow'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DUMMY_PRODUCTS.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-[#EAEAEA] aspect-[3/4] relative overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                  />
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-brand-dark/80 mb-1">{product.name}</h3>
                    <p className="text-lg font-bold text-brand-dark">${product.price}</p>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors shrink-0 shadow-sm"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
