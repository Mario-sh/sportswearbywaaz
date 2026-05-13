import Header from '../components/Header';
import Hero from '../components/Hero';
import BrandsMarquee from '../components/BrandsMarquee';
import Collections from '../components/Collections';
import Story from '../components/Story';
import BestSellers from '../components/BestSellers';
import Sale from '../components/Sale';
import Quote from '../components/Quote';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans overflow-x-hidden selection:bg-brand-yellow selection:text-brand-dark">
      <Header />
      <main>
        <Hero />
        <BrandsMarquee />
        <Collections />
        <Story />
        <BestSellers />
        <Sale />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}
