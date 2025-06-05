
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const AnimeCollections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const collections = [
    {
      id: 1,
      name: 'Naruto',
      itemCount: 150,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
      bgColor: 'from-orange-500 to-neon-blue'
    },
    {
      id: 2,
      name: 'One Piece',
      itemCount: 200,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
      bgColor: 'from-neon-blue to-neon-lightBlue'
    },
    {
      id: 3,
      name: 'Attack on Titan',
      itemCount: 89,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
      bgColor: 'from-neon-red to-emerald-700'
    },
    {
      id: 4,
      name: 'Demon Slayer',
      itemCount: 120,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
      bgColor: 'from-neon-blue to-neon-red'
    },
    {
      id: 5,
      name: 'Jujutsu Kaisen',
      itemCount: 95,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
      bgColor: 'from-indigo-600 to-neon-blue'
    },
    {
      id: 6,
      name: 'Dragon Ball Z',
      itemCount: 180,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
      bgColor: 'from-neon-orange to-neon-red'
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, collections.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text text-white">
              Anime Collections
            </h2>
            <p className="text-xl text-gray-300">
              Shop by your favorite anime series
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3 rounded-full glass-card hover:bg-neon-blue/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="p-3 rounded-full glass-card hover:bg-neon-blue/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="flex-none w-1/4 px-3"
              >
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${collection.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${collection.bgColor} opacity-60 group-hover:opacity-80 transition-opacity`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-lightBlue transition-colors">
                        {collection.name}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {collection.itemCount} items
                      </p>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-lg text-white font-semibold hover:bg-white/30 transition-all">
                        Explore Collection
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeCollections;
