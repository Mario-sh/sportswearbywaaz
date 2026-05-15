import { ShoppingBag, X, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'py-4 px-6 md:px-12 lg:px-24 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'py-8 px-6 md:px-12 lg:px-24 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 relative z-[210] group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="relative">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:rotate-12 transition-transform duration-300">
              <path d="M4 16L16 4L28 16L16 28L4 16Z" fill="#0F0F0F" />
              <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="white" />
            </svg>
          </div>
          <span className="font-extended text-2xl font-bold tracking-tighter text-brand-dark">PLR</span>
        </Link>
        
        {/* Nav */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-brand-dark">
          {[
            { name: 'Home', path: '/' },
            { name: 'New', path: '/store' },
            { name: 'Women', path: '/store?category=Women' },
            { name: 'Store', path: '/store' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`hover:text-brand-yellow transition-colors relative group py-2`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-8 relative z-[210]">
          <button 
            className="lg:hidden flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-dark" />
            ) : (
              <Menu className="w-6 h-6 text-brand-dark" />
            )}
          </button>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5] stroke-brand-dark transition-transform group-hover:-translate-y-0.5" />
            {cartCount > 0 ? (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-6 h-6 bg-brand-dark text-white rounded-full text-[10px] flex items-center justify-center font-bold border-2 border-brand-yellow"
              >
                {cartCount}
              </motion.span>
            ) : (
              <span className="absolute top-[12px] right-[12px] w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed inset-0 bg-white z-[200] flex flex-col lg:hidden"
          >
            <div className="flex-1 flex flex-col justify-center items-center gap-8 px-6 text-center">
              {[
                { name: 'Home', path: '/' },
                { name: 'New', path: '/store' },
                { name: 'Women', path: '/store?category=Women' },
                { name: 'Store', path: '/store' },
                { name: 'Contact', path: '/contact' }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link 
                    to={item.path}
                    className="text-4xl sm:text-5xl font-display font-bold text-brand-dark hover:text-brand-yellow transition-colors uppercase tracking-tight"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="p-8 border-t border-gray-100 bg-brand-light flex justify-center gap-8">
              {['IG', 'TW', 'FB'].map((social) => (
                <a key={social} href="#" className="text-sm font-bold tracking-widest text-brand-dark/50 hover:text-brand-dark transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

