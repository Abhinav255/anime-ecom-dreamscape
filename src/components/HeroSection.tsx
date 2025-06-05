
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "New Jujutsu Kaisen Collection",
      subtitle: "Sukuna's Limited Edition Merchandise",
      description: "Get your hands on exclusive JJK merch featuring your favorite characters",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
      cta: "Shop Now",
      badge: "Limited Edition"
    },
    {
      id: 2,
      title: "Demon Slayer Katana Collection",
      subtitle: "Light-Up Wooden Replicas",
      description: "Premium wooden katanas with LED lighting effects",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
      cta: "Explore Collection",
      badge: "Best Seller"
    },
    {
      id: 3,
      title: "One Piece Adventure Gear",
      subtitle: "Straw Hat Crew Essentials",
      description: "Sail the Grand Line with authentic pirate merchandise",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
      cta: "Join Crew",
      badge: "New Arrival"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-anime-dark/80 to-transparent z-10" />
      
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-anime-dark via-anime-dark/60 to-transparent" />
        </div>
      ))}

      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-neon-gradient rounded-full text-sm font-semibold animate-pulse">
              {slides[currentSlide].badge}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text text-white leading-tight">
            {slides[currentSlide].title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-neon-cyan mb-6 font-semibold">
            {slides[currentSlide].subtitle}
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-neon text-lg px-8 py-4">
              {slides[currentSlide].cta}
            </Button>
            <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white text-lg px-8 py-4">
              View Collections
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full glass-card hover:bg-neon-purple/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full glass-card hover:bg-neon-purple/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-neon-purple scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
