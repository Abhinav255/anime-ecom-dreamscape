
import { useState } from 'react';
import { Search, Package, Truck, CheckCircle, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const OrderTracking = () => {
  const [trackingData, setTrackingData] = useState({
    orderId: '',
    email: ''
  });
  const [orderInfo, setOrderInfo] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order tracking
    setOrderInfo({
      orderId: 'ANM-2024-001',
      status: 'shipped',
      items: [
        {
          name: 'Naruto Hokage Cloak Premium Replica',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop',
          quantity: 1,
          price: 2999
        }
      ],
      timeline: [
        {
          status: 'confirmed',
          title: 'Order Confirmed',
          description: 'Your order has been confirmed and is being prepared',
          date: '2024-01-15 10:30 AM',
          completed: true
        },
        {
          status: 'packed',
          title: 'Order Packed',
          description: 'Your order has been packed and ready for pickup',
          date: '2024-01-16 02:15 PM',
          completed: true
        },
        {
          status: 'shipped',
          title: 'Order Shipped',
          description: 'Your order is on the way to you',
          date: '2024-01-17 09:45 AM',
          completed: true
        },
        {
          status: 'out-for-delivery',
          title: 'Out for Delivery',
          description: 'Your order is out for delivery',
          date: 'Expected: 2024-01-19',
          completed: false
        },
        {
          status: 'delivered',
          title: 'Delivered',
          description: 'Your order has been delivered',
          date: 'Expected: 2024-01-19 by 6:00 PM',
          completed: false
        }
      ],
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2024-01-19'
    });
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    const iconClass = `w-6 h-6 ${completed ? 'text-green-500' : 'text-anime-textSecondary'}`;
    
    switch (status) {
      case 'confirmed':
        return <CheckCircle className={iconClass} />;
      case 'packed':
        return <Package className={iconClass} />;
      case 'shipped':
        return <Truck className={iconClass} />;
      case 'out-for-delivery':
        return <MapPin className={iconClass} />;
      case 'delivered':
        return <CheckCircle className={iconClass} />;
      default:
        return <Package className={iconClass} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 neon-text text-neon-skyBlue anime-title text-center">
          Track Your Order
        </h1>

        {!orderInfo ? (
          <div className="max-w-md mx-auto glass-card p-8">
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <Label htmlFor="orderId" className="anime-text text-anime-text">Order ID</Label>
                <Input
                  id="orderId"
                  placeholder="Enter your order ID (e.g., ANM-2024-001)"
                  value={trackingData.orderId}
                  onChange={(e) => setTrackingData({ ...trackingData, orderId: e.target.value })}
                  className="bg-white/80 border-sky-200 anime-text"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="anime-text text-anime-text">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={trackingData.email}
                  onChange={(e) => setTrackingData({ ...trackingData, email: e.target.value })}
                  className="bg-white/80 border-sky-200 anime-text"
                  required
                />
              </div>

              <Button type="submit" className="btn-neon w-full">
                <Search className="w-4 h-4 mr-2" />
                Track Order
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-anime-textSecondary anime-text mb-2">
                Need help? Contact our support team
              </p>
              <Button variant="outline" className="anime-text">
                Contact Support
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Order Summary */}
            <div className="glass-card p-8">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold neon-text text-neon-skyBlue anime-title">
                    Order #{orderInfo.orderId}
                  </h2>
                  <p className="text-anime-textSecondary anime-text">
                    Tracking Number: {orderInfo.trackingNumber}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-anime-text anime-text">Estimated Delivery</p>
                  <p className="font-bold text-neon-skyBlue anime-text">
                    {orderInfo.estimatedDelivery}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-4">
                {orderInfo.items.map((item: any, index: number) => (
                  <div key={index} className="flex items-center gap-4 bg-white/50 p-4 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold anime-text text-anime-text">
                        {item.name}
                      </h3>
                      <p className="text-anime-textSecondary anime-text">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold text-neon-skyBlue anime-text">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 neon-text text-neon-skyBlue anime-title">
                Order Timeline
              </h3>
              
              <div className="space-y-6">
                {orderInfo.timeline.map((step: any, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${
                      step.completed ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {getStatusIcon(step.status, step.completed)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-semibold anime-title ${
                          step.completed ? 'text-green-600' : 'text-anime-textSecondary'
                        }`}>
                          {step.title}
                        </h4>
                        <span className={`text-sm anime-text ${
                          step.completed ? 'text-green-600' : 'text-anime-textSecondary'
                        }`}>
                          {step.date}
                        </span>
                      </div>
                      <p className="text-anime-textSecondary anime-text text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-neon"
                onClick={() => setOrderInfo(null)}
              >
                Track Another Order
              </Button>
              <Button variant="outline" className="anime-text">
                Contact Support
              </Button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default OrderTracking;
