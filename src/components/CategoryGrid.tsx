
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: 'Apparel',
      description: 'T-shirts, Hoodies & More',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
      itemCount: '500+ items',
      gradient: 'from-neon-skyBlue to-neon-white'
    },
    {
      id: 2,
      name: 'Collectibles',
      description: 'Figures & Models',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      itemCount: '200+ items',
      gradient: 'from-neon-lightBlue to-neon-skyBlue'
    },
    {
      id: 3,
      name: 'Accessories',
      description: 'Bags, Keychains & More',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      itemCount: '300+ items',
      gradient: 'from-neon-white to-neon-lightBlue'
    },
    {
      id: 4,
      name: 'Cosplay',
      description: 'Costumes & Props',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      itemCount: '150+ items',
      gradient: 'from-neon-skyBlue to-neon-lightBlue'
    },
    {
      id: 5,
      name: 'Wall Art',
      description: 'Posters & Tapestries',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      itemCount: '400+ items',
      gradient: 'from-neon-lightBlue to-neon-white'
    },
    {
      id: 6,
      name: 'Special Items',
      description: 'Limited Editions',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      itemCount: '50+ items',
      gradient: 'from-neon-skyBlue to-neon-white'
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text text-neon-skyBlue anime-title">
          Shop by Category
        </h2>
        <p className="text-xl text-anime-text max-w-2xl mx-auto anime-text">
          Explore our vast collection of anime merchandise across different categories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.name.toLowerCase()}`}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] product-card"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${category.image})` }}
            />
            
            <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-70`} />
            
            <div className="absolute inset-0 bg-gradient-to-t from-anime-text/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-white transition-colors anime-title">
                {category.name}
              </h3>
              <p className="text-white/90 mb-2 anime-text">{category.description}</p>
              <span className="text-sm text-neon-white font-semibold anime-text">
                {category.itemCount}
              </span>
            </div>

            <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              <ChevronRight className="w-6 h-6 text-neon-skyBlue" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
