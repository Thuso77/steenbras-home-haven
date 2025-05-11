
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80"
  ];

  return (
    <section id="home" className="relative bg-olive-dark min-h-[600px] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="carousel-container h-full">
          <div className="carousel-track flex h-full animate-carousel">
            {images.map((src, index) => (
              <div key={index} className="carousel-slide min-w-full h-full relative">
                <div className="absolute inset-0 bg-olive/70 z-10"></div>
                <img
                  src={src}
                  alt={`Steenbras Properties Interior ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Welcome to Steenbras Properties
          </h1>
          <p className="text-xl mb-6 text-white/90">
            Serviced Communal Living Hostels – Comfort. Community. Affordability.
          </p>
          <p className="mb-8 text-white/80">
            Experience affordable communal living with all the amenities you need for a comfortable stay.
            Our hostels provide a clean, safe environment for low-income individuals seeking quality accommodation in Cape Town.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="btn-primary">
              <a href="#apply">Apply Now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
