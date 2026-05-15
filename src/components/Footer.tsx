import { ArrowRight, Phone, MapPin, Mail, Clock, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer bg-brand-dark text-white pt-32 pb-12 px-6 md:px-12 lg:px-24 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-4">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-yellow transition-transform hover:rotate-12 duration-500">
                <path d="M4 16L16 4L28 16L16 28L4 16Z" fill="currentColor" />
                <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="#1A1A1A" />
              </svg>
              <span className="font-extended text-5xl font-black tracking-tighter italic">PLR</span>
            </div>
            <p className="text-white/40 text-lg font-medium max-w-sm leading-relaxed tracking-tight">
              Pushing the boundaries of human performance through innovative design and sustainable textiles. Join the movement.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Store</h4>
              <ul className="space-y-4">
                {['Collections', 'New Arrival', 'Best Sellers', 'On Sale'].map(item => (
                  <li key={item}><Link to="/store" className="text-sm font-bold text-white/60 hover:text-brand-yellow transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Company</h4>
              <ul className="space-y-4">
                {['Our Story', 'Lab Residencies', 'Contact', 'Press'].map((item) => (
                  <li key={item}><Link to={item === 'Contact' ? '/contact' : '#'} className="text-sm font-bold text-white/60 hover:text-brand-yellow transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 space-y-6">
              <h4 className="text-3xl font-extended font-black italic tracking-tighter">STAY AHEAD</h4>
              <p className="text-white/40 text-sm font-medium">Join our inner circle for exclusive drops and performance insights.</p>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="w-full bg-brand-dark border border-white/10 rounded-2xl px-6 py-5 text-sm font-bold placeholder:text-white/20 outline-none focus:border-brand-yellow transition-colors"
                  required
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center hover:bg-white transition-all">
                  <ArrowRight className="w-5 h-5 text-brand-dark" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-yellow" />
              <span className="text-[10px] font-black uppercase tracking-widest">+1 (555) 000-PLR</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-yellow" />
              <span className="text-[10px] font-black uppercase tracking-widest">hello@plr-sport.com</span>
            </div>
          </div>
          
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            © 2026 PLR CORPORATE. SYSTEM_BUILD_V2.0
          </p>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Shipment</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

