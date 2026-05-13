import { ArrowRight, Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-gray text-white pt-20 pb-10 px-6 md:px-12 lg:px-24 font-sans text-sm">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-4 gap-12 border-b border-white/10 pb-20">
          
          {/* Logo */}
          <div className="flex items-start gap-3 col-span-1">
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M4 16L16 4L28 16L16 28L4 16Z" fill="currentColor" />
              <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="#1A1A1A" />
            </svg>
            <span className="font-extended text-3xl font-bold tracking-tighter pt-1">PLR</span>
          </div>

          {/* Links col 1 */}
          <div className="flex flex-col space-y-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">New</a>
            <a href="#" className="hover:text-white transition-colors">Woman</a>
            <a href="#" className="hover:text-white transition-colors">Store</a>
            <a href="#" className="hover:text-white transition-colors">Contacts</a>
          </div>

          {/* Links col 2 */}
          <div className="flex flex-col space-y-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Linkedin</a>
            <a href="#" className="hover:text-white transition-colors">Contacts</a>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-extended font-bold text-2xl mb-4">NEWSLETTER</h3>
            <p className="text-gray-400 mb-6">Want to know about our offers first?</p>
            <form className="flex border-b border-gray-600 pb-2 flex-wrap">
              <input 
                type="email" 
                placeholder="example@gmail.com" 
                className="bg-transparent outline-none flex-1 font-medium text-white placeholder-gray-500 py-1"
                required
              />
              <button type="submit" className="bg-white text-brand-gray w-8 h-8 flex items-center justify-center hover:bg-brand-yellow transition-colors shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-400 border-b border-white/10 pb-16">
          <div className="flex gap-4">
            <Phone className="w-5 h-5 text-white shrink-0" />
            <div>
              <p className="text-white mb-1">0(550)123-45-67</p>
              <p className="text-xs">Round the clock</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="w-5 h-5 text-white shrink-0" />
            <div>
              <p className="text-white mb-1">320 North Cambridge St.</p>
              <p className="text-xs">Mankato, MN 56001</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Mail className="w-5 h-5 text-white shrink-0" />
            <div>
              <p className="text-white mb-1">info@plr.com</p>
              <p className="text-xs">support@plr.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="w-5 h-5 text-white shrink-0" />
            <div>
              <p className="text-white mb-1">Mo-Sa: 07:00-23:00</p>
              <p className="text-xs">Su: 07:00 - 16:00</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>Copyright © 2026 PLR. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy & Cookies</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Ts&Cs</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
