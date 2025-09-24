import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ cartItems = [], onCartClick, onSearchChange, searchQuery = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold text-primary">TokoKu</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Beranda</a>
            <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Produk</a>
            <a href="#categories" className="text-gray-700 hover:text-primary transition-colors">Kategori</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">Tentang</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Kontak</a>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search Toggle */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={toggleSearch}
            >
              <Search size={20} />
            </button>

            {/* Wishlist */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Heart size={20} />
            </button>

            {/* Cart */}
            <button 
              onClick={onCartClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* User Account */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors py-2">Beranda</a>
              <a href="#products" className="text-gray-700 hover:text-primary transition-colors py-2">Produk</a>
              <a href="#categories" className="text-gray-700 hover:text-primary transition-colors py-2">Kategori</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors py-2">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors py-2">Kontak</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
