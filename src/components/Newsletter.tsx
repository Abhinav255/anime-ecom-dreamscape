
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-naruto-gradient opacity-10" />
      <div className="absolute inset-0 bg-naruto-dark/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-naruto-gradient flex items-center justify-center animate-float">
              <Mail className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text text-white">
              Join the Anime Community
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get exclusive access to new drops, limited editions, and special offers. 
              Plus, receive a 10% discount on your first order!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-naruto-darkSecondary border-neon-blue/30 text-white placeholder-gray-400 h-12"
              />
              <Button type="submit" className="btn-neon h-12 px-8">
                Subscribe
              </Button>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              ✨ Early access to new collections
            </span>
            <span className="flex items-center gap-2">
              🎁 Exclusive member discounts
            </span>
            <span className="flex items-center gap-2">
              📧 Weekly anime news
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
