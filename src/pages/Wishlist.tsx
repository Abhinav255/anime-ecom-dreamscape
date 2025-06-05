
import { useState } from 'react';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Naruto Hokage Cloak Premium Replica",
      price: 2999,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      rating: 4.8,
      reviewCount: 124,
      isNew: true,
      inStock: true
    },
    {
      id: 2,
      name: "Demon Slayer Light-Up Katana",
      price: 4499,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 4.9,
      reviewCount: 89,
      isLimited: true,
      inStock: true
    },
    {
      id: 3,
      name: "Attack on Titan Survey Corps Jacket",
      price: 3499,
      originalPrice: 4299,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.7,
      reviewCount: 156,
      inStock: false
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <Heart className="w-24 h-24 mx-auto text-anime-textSecondary mb-6" />
            <h1 className="text-3xl font-bold mb-4 neon-text text-neon-skyBlue anime-title">
              Your Wishlist is Empty
            </h1>
            <p className="text-anime-text mb-8 anime-text">
              Start adding your favorite anime merchandise to your wishlist!
            </p>
            <Link to="/shop">
              <Button className="btn-neon">
                Explore Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl md:text-5xl font-bold neon-text text-neon-skyBlue anime-title">
            My Wishlist
          </h1>
          <p className="text-anime-text anime-text">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="relative">
              <ProductCard {...item} />
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-white/90 hover:bg-red-50 text-red-500 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                {item.inStock && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/90 hover:bg-green-50 text-green-600"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                )}
              </div>
              {!item.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-lg anime-text font-semibold">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/shop">
            <Button className="btn-neon">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
