
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Star, Plus, Minus, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const product = {
    id: 1,
    name: "Naruto Hokage Cloak Premium Replica",
    price: 2999,
    originalPrice: 3999,
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    inStock: true,
    description: "Premium quality Hokage cloak replica made with authentic materials. Perfect for cosplay events, conventions, or just showing your love for Naruto!",
    features: [
      "100% Cotton blend fabric",
      "Screen printed designs",
      "Machine washable",
      "Officially licensed",
      "Available in multiple sizes"
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'Apparel',
    series: 'Naruto'
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Naruto Headband Metal",
      price: 599,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      rating: 4.7,
      reviewCount: 89
    },
    {
      id: 3,
      name: "Naruto Rasengan Lamp",
      price: 1299,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 4.6,
      reviewCount: 156
    },
    {
      id: 4,
      name: "Naruto Kunai Set",
      price: 899,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.5,
      reviewCount: 78
    },
    {
      id: 5,
      name: "Naruto Wall Scroll",
      price: 499,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      rating: 4.4,
      reviewCount: 203
    }
  ];

  const reviews = [
    {
      id: 1,
      user: "AnimeOtaku2024",
      rating: 5,
      comment: "Amazing quality! The fabric feels premium and the printing is perfect. Definitely worth the price!",
      date: "2024-01-15"
    },
    {
      id: 2,
      user: "CosplayKing",
      rating: 4,
      comment: "Great for cosplay events. Fits perfectly and looks authentic. Only wish it came with more accessories.",
      date: "2024-01-10"
    },
    {
      id: 3,
      user: "NarutoFan123",
      rating: 5,
      comment: "Best Hokage cloak I've ever bought! Fast shipping and excellent packaging.",
      date: "2024-01-05"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden glass-card p-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-neon-skyBlue glow-effect'
                      : 'border-transparent hover:border-sky-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-neon-skyBlue text-white anime-text">
                  {product.series}
                </Badge>
                {product.isNew && (
                  <Badge className="bg-green-500 text-white anime-text">
                    New
                  </Badge>
                )}
                {product.inStock && (
                  <Badge className="bg-emerald-500 text-white anime-text">
                    In Stock
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 neon-text text-neon-skyBlue anime-title">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-anime-textSecondary ml-2 anime-text">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-neon-skyBlue anime-title">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-anime-textSecondary line-through anime-text">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge className="bg-red-500 text-white anime-text">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-anime-text anime-text leading-relaxed">
                {product.description}
              </p>

              <div>
                <h3 className="font-semibold mb-2 text-anime-text anime-text">Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-anime-textSecondary anime-text">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold mb-2 anime-text text-anime-text">
                Size
              </label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full bg-white/80 border-sky-200 anime-text">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold mb-2 anime-text text-anime-text">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold anime-text text-anime-text">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-neon flex-1 h-12">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="glass-card p-4 space-y-3">
              <div className="flex items-center gap-3 text-anime-text anime-text">
                <Truck className="w-5 h-5 text-neon-skyBlue" />
                <span>Free shipping on orders above ₹999</span>
              </div>
              <div className="flex items-center gap-3 text-anime-text anime-text">
                <RotateCcw className="w-5 h-5 text-neon-skyBlue" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-3 text-anime-text anime-text">
                <Shield className="w-5 h-5 text-neon-skyBlue" />
                <span>Authentic merchandise guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 neon-text text-neon-skyBlue anime-title">
            Customer Reviews
          </h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="glass-card p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <h4 className="font-semibold anime-text text-anime-text">
                      {review.user}
                    </h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-anime-textSecondary anime-text">
                    {review.date}
                  </span>
                </div>
                <p className="text-anime-text anime-text">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-bold mb-8 neon-text text-neon-skyBlue anime-title">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
