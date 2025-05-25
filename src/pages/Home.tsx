import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;