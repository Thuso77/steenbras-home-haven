
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Amenities from '@/components/Amenities';
import ApplicationForm from '@/components/ApplicationForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Amenities />
        <ApplicationForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
