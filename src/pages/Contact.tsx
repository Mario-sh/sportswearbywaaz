import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans selection:bg-brand-yellow selection:text-brand-dark flex flex-col">
      <Header />
      
      <main className="flex-1 pt-40 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="relative mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <span className="text-xs font-black uppercase tracking-[0.5em] text-brand-dark/30 block mb-6">Get in touch</span>
              <h1 className="text-7xl md:text-[10rem] font-extended font-black text-brand-dark tracking-tighter leading-[0.8] italic uppercase">
                LET'S<br/>TALK
              </h1>
            </motion.div>
            
            {/* Background decoration text */}
            <div className="absolute top-0 right-0 text-[20vw] font-black text-brand-dark/5 leading-none -z-0 select-none">
              PLR
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Contact Details */}
            <div className="lg:col-span-4 space-y-16">
              <div className="space-y-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-1.5 h-6 bg-brand-yellow"></div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-brand-dark/40">Inquiries</h3>
                  </div>
                  <p className="text-2xl font-black group-hover:text-brand-yellow transition-colors">hello@plr-sport.com</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-1.5 h-6 bg-brand-yellow"></div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-brand-dark/40">Assistance</h3>
                  </div>
                  <p className="text-2xl font-black group-hover:text-brand-yellow transition-colors">+1 (555) 000-0000</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-1.5 h-6 bg-brand-yellow"></div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-brand-dark/40">Headquarters</h3>
                  </div>
                  <p className="text-2xl font-black group-hover:text-brand-yellow transition-colors leading-tight">
                    123 Sport Avenue,<br/>New York, NY 10001
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-10 border-t border-brand-dark/10"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-dark/30 mb-4">Social</h4>
                    <ul className="space-y-2">
                      {['Instagram', 'Dribbble', 'Behance'].map(s => (
                        <li key={s}><a href="#" className="text-sm font-bold hover:text-brand-yellow transition-colors">{s}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-dark/30 mb-4">Career</h4>
                    <p className="text-sm font-bold">join-us@plr.com</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Dramatic Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/30 block group-focus-within:text-brand-yellow transition-colors">Your Identity</label>
                    <input 
                      type="text" 
                      placeholder="NAME OR COMPANY"
                      className="w-full bg-transparent border-b-2 border-brand-dark/10 focus:border-brand-yellow p-4 text-xl font-black uppercase placeholder:text-brand-dark/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-4 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/30 block group-focus-within:text-brand-yellow transition-colors">Communication Channel</label>
                    <input 
                      type="email" 
                      placeholder="EMAIL@ADDRESS.COM"
                      className="w-full bg-transparent border-b-2 border-brand-dark/10 focus:border-brand-yellow p-4 text-xl font-black uppercase placeholder:text-brand-dark/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-4 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/30 block group-focus-within:text-brand-yellow transition-colors">The Subject</label>
                  <div className="flex flex-wrap gap-4 pt-2">
                    {['Inquiry', 'Support', 'Partnership', 'Feedback'].map(s => (
                      <button 
                        key={s} 
                        type="button"
                        className="px-6 py-3 border-2 border-brand-dark/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-brand-yellow hover:text-brand-yellow transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/30 block group-focus-within:text-brand-yellow transition-colors">Broaden the vision</label>
                  <textarea 
                    rows={4}
                    placeholder="DESCRIBE YOUR PROJECT..."
                    className="w-full bg-transparent border-b-2 border-brand-dark/10 focus:border-brand-yellow p-4 text-xl font-black uppercase placeholder:text-brand-dark/10 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit"
                    className="group relative bg-brand-dark text-brand-yellow px-12 py-8 rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] flex items-center gap-8 hover:bg-black transition-all shadow-2xl overflow-hidden"
                  >
                    <span className="relative z-10">Initialize Connection</span>
                    <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center relative z-10 transition-transform group-hover:scale-110">
                       <Send className="w-5 h-5 text-brand-dark transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </button>
                </div>
              </form>
            </motion.div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

