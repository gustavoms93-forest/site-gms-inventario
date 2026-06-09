import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Metrics } from './components/sections/Metrics';
import { GeographicScope } from './components/sections/GeographicScope';
import { Features } from './components/sections/Features';
import { AppCallout } from './components/sections/AppCallout';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans selection:bg-brand-200 selection:text-brand-500 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Metrics />
        <GeographicScope />
        <Features />
        <AppCallout />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
