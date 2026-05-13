import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[110] shadow-2xl flex flex-col transform transition-transform duration-300">
        
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-brand-dark" />
            <h2 className="text-xl font-display font-medium text-brand-dark">Your Cart</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-4">
              <ShoppingBag className="w-12 h-12 opacity-20" />
              <p>Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-brand-dark text-white px-6 py-3 font-medium text-sm hover:opacity-80 transition-opacity mt-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 bg-brand-light p-4 rounded-lg relative">
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm"
                >
                  <X className="w-3 h-3" />
                </button>
                <div className="w-20 h-24 bg-gray-200 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply grayscale" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-brand-dark text-sm pr-4 line-clamp-2">{item.name}</h3>
                    <p className="text-brand-dark font-bold mt-1">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-gray-300 bg-white">
                      <button 
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between mb-2 text-sm text-gray-500">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-6 text-lg font-bold text-brand-dark">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-brand-yellow text-brand-dark py-4 font-medium hover:bg-yellow-400 transition-colors uppercase tracking-wider text-sm shadow-sm"
              onClick={() => {
                alert('Checkout implemented! Proceeding to payment...');
                setIsCartOpen(false);
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
