
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Naruto Hokage Cloak Premium Replica",
      price: 2999,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      quantity: 1,
      size: "L",
      inStock: true
    },
    {
      id: 2,
      name: "Demon Slayer Light-Up Katana",
      price: 4499,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
      quantity: 1,
      size: "One Size",
      inStock: true
    },
    {
      id: 3,
      name: "Attack on Titan Survey Corps Jacket",
      price: 3499,
      originalPrice: 4299,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
      quantity: 2,
      size: "M",
      inStock: true
    }
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const discount = promoCode === 'ANIME10' ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="w-24 h-24 mx-auto text-anime-textSecondary mb-6" />
            <h1 className="text-3xl font-bold mb-4 neon-text text-neon-skyBlue anime-title">
              Your Cart is Empty
            </h1>
            <p className="text-anime-text mb-8 anime-text">
              Looks like you haven't added any items to your cart yet.
            </p>
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
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 neon-text text-neon-skyBlue anime-title">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="glass-card p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-anime-text anime-title">
                      {item.name}
                    </h3>
                    <p className="text-sm text-anime-textSecondary anime-text">
                      Size: {item.size}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-neon-skyBlue anime-text">
                        ₹{item.price.toLocaleString()}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-anime-textSecondary line-through anime-text">
                          ₹{item.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold anime-text text-anime-text">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="h-8 w-8 text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="font-bold text-anime-text anime-text">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="glass-card p-6 h-fit">
            <h2 className="text-xl font-bold mb-6 neon-text text-neon-skyBlue anime-title">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between anime-text text-anime-text">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between anime-text text-anime-text">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between anime-text text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}

              <hr className="border-sky-200" />
              
              <div className="flex justify-between font-bold text-lg anime-text text-anime-text">
                <span>Total</span>
                <span className="text-neon-skyBlue">₹{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 anime-text text-anime-text">
                Promo Code
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="bg-white/80 border-sky-200 anime-text"
                />
                <Button variant="outline" className="anime-text">
                  Apply
                </Button>
              </div>
              {promoCode === 'ANIME10' && (
                <p className="text-sm text-green-600 mt-1 anime-text">
                  10% discount applied!
                </p>
              )}
            </div>

            {/* Free Shipping Notice */}
            {shipping > 0 && (
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 mb-6">
                <p className="text-sm text-anime-text anime-text">
                  Add ₹{(999 - subtotal).toLocaleString()} more to get free shipping!
                </p>
              </div>
            )}

            {/* Checkout Button */}
            <Link to="/checkout">
              <Button className="btn-neon w-full h-12">
                Proceed to Checkout
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>

            {/* Continue Shopping */}
            <Link to="/shop">
              <Button variant="outline" className="w-full mt-4 anime-text">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
