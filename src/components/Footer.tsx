
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Shop': [
      { name: 'All Products', href: '/products' },
      { name: 'New Arrivals', href: '/new-arrivals' },
      { name: 'Best Sellers', href: '/best-sellers' },
      { name: 'Sale', href: '/sale' }
    ],
    'Categories': [
      { name: 'Apparel', href: '/category/apparel' },
      { name: 'Collectibles', href: '/category/collectibles' },
      { name: 'Accessories', href: '/category/accessories' },
      { name: 'Cosplay', href: '/category/cosplay' }
    ],
    'Customer Care': [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'Size Guide', href: '/size-guide' }
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-300' },
    { icon: Youtube, href: '#', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="bg-anime-lightSecondary border-t border-sky-200/60">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-anime-gradient rounded-lg flex items-center justify-center glow-effect">
                <span className="text-2xl font-bold anime-title text-white">A</span>
              </div>
              <span className="text-2xl font-bold neon-text text-neon-skyBlue anime-title">
                AnimeVerse
              </span>
            </Link>
            
            <p className="text-anime-text mb-6 max-w-sm anime-text">
              Your ultimate destination for authentic anime merchandise. 
              From collectibles to cosplay, we bring your favorite anime to life.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 rounded-full glass-card text-anime-textSecondary ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-anime-text font-semibold mb-4 text-lg anime-title">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-anime-textSecondary hover:text-neon-skyBlue transition-colors duration-300 anime-text"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-sky-200/60 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-anime-text font-semibold mb-2 text-xl anime-title">
                Stay Updated with Latest Drops
              </h3>
              <p className="text-anime-textSecondary anime-text">
                Subscribe to get notified about new collections and exclusive offers
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-white/80 border border-sky-200 rounded-lg text-anime-text placeholder-anime-textSecondary focus:outline-none focus:border-neon-skyBlue w-full lg:w-80 anime-text"
              />
              <button className="btn-neon px-6 py-3 whitespace-nowrap">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-sky-200/60 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-anime-textSecondary text-sm text-center lg:text-left anime-text">
              <p>© 2024 AnimeVerse. All rights reserved.</p>
              <p className="mt-1">
                Made with <Heart className="w-4 h-4 inline text-neon-skyBlue fill-current" /> for anime fans worldwide
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link to="/privacy" className="text-anime-textSecondary hover:text-neon-skyBlue transition-colors anime-text">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-anime-textSecondary hover:text-neon-skyBlue transition-colors anime-text">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-anime-textSecondary hover:text-neon-skyBlue transition-colors anime-text">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
