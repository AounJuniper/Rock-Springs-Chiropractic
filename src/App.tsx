import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FrequentlyAskedQuestions from './components/FaqSection';
import OfferSection from './components/OfferSection';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <Services />
        <Benefits />
        <HowItWorks />
        <About />
        <Testimonials />
        <FrequentlyAskedQuestions />
        <OfferSection />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}


