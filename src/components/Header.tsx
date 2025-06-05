
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' }
  ];

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-sky-200/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-anime-gradient rounded-lg flex items-center justify-center glow-effect">
              <span className="text-xl font-bold anime-title text-white">A</span>
            </div>
            <span className="text-xl font-bold neon-text text-neon-skyBlue anime-title">
              AnimeVerse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-anime-text hover:text-neon-skyBlue transition-colors duration-300 anime-text font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anime-textSecondary w-4 h-4" />
              <Input
                placeholder="Search anime merchandise..."
                className="pl-10 bg-white/80 border-sky-200 text-anime-text placeholder-anime-textSecondary anime-text"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-anime-text hover:text-neon-skyBlue">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-anime-text hover:text-neon-white">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-anime-text hover:text-neon-skyBlue">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-neon-skyBlue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse font-orbitron">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-anime-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anime-textSecondary w-4 h-4" />
            <Input
              placeholder="Search anime merchandise..."
              className="pl-10 bg-white/80 border-sky-200 text-anime-text placeholder-anime-textSecondary anime-text"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-sky-200/60 animate-slide-up">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-anime-text hover:text-neon-skyBlue transition-colors duration-300 py-2 anime-text font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
