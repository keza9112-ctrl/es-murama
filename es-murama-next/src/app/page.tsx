import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Academics from '@/components/Academics';
import Admissions from '@/components/Admissions';
import Staff from '@/components/Staff';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Admissions />
      <Staff />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
