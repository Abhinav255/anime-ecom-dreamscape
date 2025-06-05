
import { useState } from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isLimited?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviewCount, 
  isNew, 
  isLimited 
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group product-card">
      <div className="relative overflow-hidden rounded-xl mb-4">
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-anime-lightSecondary to-anime-lightAccent">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="px-2 py-1 bg-anime-gradient text-white text-xs font-bold rounded-full font-orbitron glow-effect">
              NEW
            </span>
          )}
          {isLimited && (
            <span className="px-2 py-1 bg-neon-skyBlue text-white text-xs font-bold rounded-full animate-pulse font-orbitron">
              LIMITED
            </span>
          )}
          {discount > 0 && (
            <span className="px-2 py-1 bg-destructive text-white text-xs font-bold rounded-full font-orbitron">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 w-10 h-10 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${
              isWishlisted ? 'fill-neon-skyBlue text-neon-skyBlue' : 'text-anime-text hover:text-neon-skyBlue'
            }`} 
          />
        </button>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Button className="w-full btn-neon flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-anime-text group-hover:text-neon-skyBlue transition-colors line-clamp-2 anime-text">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-anime-textSecondary anime-text">{rating}</span>
          </div>
          <span className="text-anime-textSecondary/60 anime-text">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-neon-skyBlue font-orbitron">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-anime-textSecondary/60 line-through font-orbitron">₹{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
