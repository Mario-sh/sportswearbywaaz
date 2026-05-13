import { ShoppingBag, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 lg:px-24 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 relative z-[210]">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16L16 4L28 16L16 28L4 16Z" fill="#0F0F0F" />
          <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="white" />
        </svg>
        <span className="font-extended text-2xl font-bold tracking-tighter text-brand-dark">PLR</span>
      </Link>
      
      {/* Nav */}
      <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8 text-sm font-medium text-brand-dark">
        <Link to="/" className="hover:opacity-60 transition-opacity">Home</Link>
        <a href="#" className="hover:opacity-60 transition-opacity">New</a>
        <a href="#" className="hover:opacity-60 transition-opacity">Woman</a>
        <Link to="/store" className="hover:opacity-60 transition-opacity">Store</Link>
        <a href="#" className="hover:opacity-60 transition-opacity">Contacts</a>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-8 relative z-[210]">
        <button 
          className="lg:hidden flex flex-col gap-1.5 hover:opacity-60 transition-opacity items-end"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8 text-brand-dark" />
          ) : (
            <>
              <div className="w-8 h-[2px] bg-brand-dark"></div>
              <div className="w-5 h-[2px] bg-brand-dark"></div>
            </>
          )}
        </button>
        <button className="hidden lg:flex flex-col gap-1.5 hover:opacity-60 transition-opacity items-end">
          <div className="w-8 h-[2px] bg-brand-dark"></div>
          <div className="w-5 h-[2px] bg-brand-dark"></div>
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center hover:scale-105 transition-transform"
        >
          <ShoppingBag className="w-5 h-5 stroke-[1.5] stroke-brand-dark" />
          {cartCount > 0 ? (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-dark text-white rounded-full text-[10px] flex items-center justify-center font-bold">
              {cartCount}
            </span>
          ) : (
            <span className="absolute top-[12px] right-[12px] w-1.5 h-1.5 bg-black rounded-full"></span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[200] pt-24 px-6 pb-6 flex flex-col lg:hidden">
          <nav className="flex flex-col gap-8 text-3xl font-display font-medium text-brand-dark mt-8 h-full">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>New</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Woman</a>
            <Link to="/store" onClick={() => setIsMobileMenuOpen(false)}>Store</Link>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Contacts</a>
          </nav>
        </div>
      )}
    </header>
  );
}

