
import { useState } from 'react';
import { CreditCard, Truck, Shield, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Checkout = () => {
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const cartItems = [
    {
      id: 1,
      name: "Naruto Hokage Cloak Premium Replica",
      price: 2999,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
      quantity: 1,
      size: "L"
    },
    {
      id: 2,
      name: "Demon Slayer Light-Up Katana",
      price: 4499,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
      quantity: 1,
      size: "One Size"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <CheckCircle className="w-24 h-24 mx-auto text-green-500 mb-6" />
            <h1 className="text-3xl font-bold mb-4 neon-text text-neon-skyBlue anime-title">
              Order Confirmed!
            </h1>
            <p className="text-anime-text mb-4 anime-text">
              Thank you for your purchase! Your order #ANM-2024-001 has been confirmed.
            </p>
            <p className="text-anime-textSecondary mb-8 anime-text">
              You'll receive an email confirmation shortly with tracking details.
            </p>
            <div className="space-y-4">
              <Button className="btn-neon w-full">
                Track Your Order
              </Button>
              <Button variant="outline" className="w-full anime-text">
                Continue Shopping
              </Button>
            </div>
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
          Checkout
        </h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${step === 'shipping' ? 'text-neon-skyBlue' : 'text-anime-textSecondary'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'shipping' ? 'bg-neon-skyBlue text-white' : 'bg-gray-200'
              }`}>
                1
              </div>
              <span className="anime-text">Shipping</span>
            </div>
            <div className="w-12 h-px bg-gray-300" />
            <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-neon-skyBlue' : 'text-anime-textSecondary'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'payment' ? 'bg-neon-skyBlue text-white' : 'bg-gray-200'
              }`}>
                2
              </div>
              <span className="anime-text">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 'shipping' && (
              <div className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-6 neon-text text-neon-skyBlue anime-title">
                  Shipping Information
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="anime-text text-anime-text">First Name</Label>
                      <Input id="firstName" className="bg-white/80 border-sky-200 anime-text" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="anime-text text-anime-text">Last Name</Label>
                      <Input id="lastName" className="bg-white/80 border-sky-200 anime-text" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="anime-text text-anime-text">Email</Label>
                    <Input id="email" type="email" className="bg-white/80 border-sky-200 anime-text" />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="anime-text text-anime-text">Phone</Label>
                    <Input id="phone" type="tel" className="bg-white/80 border-sky-200 anime-text" />
                  </div>

                  <div>
                    <Label htmlFor="address" className="anime-text text-anime-text">Address</Label>
                    <Input id="address" className="bg-white/80 border-sky-200 anime-text" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="anime-text text-anime-text">City</Label>
                      <Input id="city" className="bg-white/80 border-sky-200 anime-text" />
                    </div>
                    <div>
                      <Label htmlFor="state" className="anime-text text-anime-text">State</Label>
                      <Select>
                        <SelectTrigger className="bg-white/80 border-sky-200 anime-text">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="karnataka">Karnataka</SelectItem>
                          <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="pincode" className="anime-text text-anime-text">Pincode</Label>
                      <Input id="pincode" className="bg-white/80 border-sky-200 anime-text" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="billing-same" />
                    <Label htmlFor="billing-same" className="anime-text text-anime-text">
                      Billing address same as shipping
                    </Label>
                  </div>

                  <Button 
                    className="btn-neon w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setStep('payment');
                    }}
                  >
                    Continue to Payment
                  </Button>
                </form>
              </div>
            )}

            {step === 'payment' && (
              <div className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-6 neon-text text-neon-skyBlue anime-title">
                  Payment Method
                </h2>

                <div className="space-y-6">
                  {/* Payment Methods */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        paymentMethod === 'card' 
                          ? 'border-neon-skyBlue bg-sky-50' 
                          : 'border-gray-200 hover:border-sky-200'
                      }`}
                    >
                      <CreditCard className="w-8 h-8 mx-auto mb-2 text-neon-skyBlue" />
                      <span className="anime-text text-anime-text">Card</span>
                    </button>
                    
                    <button
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        paymentMethod === 'upi' 
                          ? 'border-neon-skyBlue bg-sky-50' 
                          : 'border-gray-200 hover:border-sky-200'
                      }`}
                    >
                      <div className="w-8 h-8 mx-auto mb-2 bg-neon-skyBlue rounded text-white flex items-center justify-center font-bold">
                        U
                      </div>
                      <span className="anime-text text-anime-text">UPI</span>
                    </button>

                    <button
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        paymentMethod === 'cod' 
                          ? 'border-neon-skyBlue bg-sky-50' 
                          : 'border-gray-200 hover:border-sky-200'
                      }`}
                    >
                      <Truck className="w-8 h-8 mx-auto mb-2 text-neon-skyBlue" />
                      <span className="anime-text text-anime-text">COD</span>
                    </button>
                  </div>

                  {/* Payment Form */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber" className="anime-text text-anime-text">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="bg-white/80 border-sky-200 anime-text" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="anime-text text-anime-text">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" className="bg-white/80 border-sky-200 anime-text" />
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="anime-text text-anime-text">CVV</Label>
                          <Input id="cvv" placeholder="123" className="bg-white/80 border-sky-200 anime-text" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName" className="anime-text text-anime-text">Cardholder Name</Label>
                        <Input id="cardName" className="bg-white/80 border-sky-200 anime-text" />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'upi' && (
                    <div>
                      <Label htmlFor="upiId" className="anime-text text-anime-text">UPI ID</Label>
                      <Input id="upiId" placeholder="yourname@paytm" className="bg-white/80 border-sky-200 anime-text" />
                    </div>
                  )}

                  {paymentMethod === 'cod' && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-anime-text anime-text">
                        Cash on Delivery available. Pay when your order arrives.
                      </p>
                    </div>
                  )}

                  <Button 
                    className="btn-neon w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setStep('confirmation');
                    }}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="glass-card p-6 h-fit">
            <h3 className="text-xl font-bold mb-6 neon-text text-neon-skyBlue anime-title">
              Order Summary
            </h3>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm anime-text text-anime-text">
                      {item.name}
                    </p>
                    <p className="text-xs text-anime-textSecondary anime-text">
                      Size: {item.size} | Qty: {item.quantity}
                    </p>
                    <p className="font-semibold text-neon-skyBlue anime-text">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between anime-text text-anime-text">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between anime-text text-anime-text">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
              </div>
              <hr className="border-sky-200" />
              <div className="flex justify-between font-bold text-lg anime-text text-anime-text">
                <span>Total</span>
                <span className="text-neon-skyBlue">₹{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-anime-text anime-text">
                <Shield className="w-4 h-4 text-neon-skyBlue" />
                <span>Secure payment</span>
              </div>
              <div className="flex items-center gap-2 text-anime-text anime-text">
                <Truck className="w-4 h-4 text-neon-skyBlue" />
                <span>Free shipping</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
