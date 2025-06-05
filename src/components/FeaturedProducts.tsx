
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Naruto Hokage Cloak Premium Replica",
      price: 2999,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      rating: 4.8,
      reviewCount: 124,
      isNew: true
    },
    {
      id: 2,
      name: "Demon Slayer Light-Up Katana",
      price: 4499,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      rating: 4.9,
      reviewCount: 89,
      isLimited: true
    },
    {
      id: 3,
      name: "Attack on Titan Survey Corps Jacket",
      price: 3499,
      originalPrice: 4299,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 4.7,
      reviewCount: 156
    },
    {
      id: 4,
      name: "One Piece Straw Hat Luffy Figure",
      price: 1999,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      rating: 4.6,
      reviewCount: 78,
      isNew: true
    },
    {
      id: 5,
      name: "Jujutsu Kaisen Sukuna Fingers Set",
      price: 899,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      rating: 4.5,
      reviewCount: 203,
      isLimited: true
    },
    {
      id: 6,
      name: "Dragon Ball Z Saiyan Armor",
      price: 5999,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      rating: 4.8,
      reviewCount: 92
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text text-neon-orange anime-title">
          Featured Products
        </h2>
        <p className="text-xl text-anime-text max-w-2xl mx-auto anime-text">
          Discover our most popular anime merchandise that fans can't get enough of
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="text-center">
        <button className="btn-neon px-8 py-3">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
