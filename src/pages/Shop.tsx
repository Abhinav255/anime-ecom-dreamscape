
import { useState } from 'react';
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);

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

  const filters = {
    series: ['Naruto', 'One Piece', 'Attack on Titan', 'Demon Slayer', 'Jujutsu Kaisen', 'Dragon Ball Z'],
    categories: ['Apparel', 'Collectibles', 'Accessories', 'Cosplay', 'Wall Art'],
    priceRanges: ['Under ₹1000', '₹1000 - ₹3000', '₹3000 - ₹5000', 'Above ₹5000'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text text-neon-skyBlue anime-title">
            Shop All Products
          </h1>
          <p className="text-xl text-anime-text anime-text">
            Discover our complete collection of anime merchandise
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 glass-card p-6 h-fit">
            <h3 className="text-xl font-bold mb-6 neon-text text-neon-skyBlue anime-title">
              Filters
            </h3>

            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 anime-text text-anime-text">
                Search Products
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anime-textSecondary w-4 h-4" />
                <Input
                  placeholder="Search..."
                  className="pl-10 bg-white/80 border-sky-200 anime-text"
                />
              </div>
            </div>

            {/* Series Filter */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 anime-text text-anime-text">
                Anime Series
              </label>
              <Select>
                <SelectTrigger className="bg-white/80 border-sky-200 anime-text">
                  <SelectValue placeholder="All Series" />
                </SelectTrigger>
                <SelectContent>
                  {filters.series.map((series) => (
                    <SelectItem key={series} value={series.toLowerCase()}>
                      {series}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 anime-text text-anime-text">
                Category
              </label>
              <Select>
                <SelectTrigger className="bg-white/80 border-sky-200 anime-text">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {filters.categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 anime-text text-anime-text">
                Price Range
              </label>
              <Select>
                <SelectTrigger className="bg-white/80 border-sky-200 anime-text">
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  {filters.priceRanges.map((range) => (
                    <SelectItem key={range} value={range.toLowerCase()}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button className="btn-neon w-full">
              Apply Filters
            </Button>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 glass-card p-4">
              <p className="text-anime-text anime-text">
                Showing 1-12 of 156 products
              </p>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select>
                  <SelectTrigger className="w-48 bg-white/80 border-sky-200 anime-text">
                    <SelectValue placeholder="Sort by: Featured" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Toggle */}
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' ? 'btn-neon' : ''}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'btn-neon' : ''}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={`grid gap-6 mb-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? 'btn-neon' : ''}
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
