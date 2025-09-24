import { Grid3X3, Shirt, Smartphone, Home, Heart } from 'lucide-react';
import { categories } from '../data/products';

const CategoryFilter = ({ selectedCategory, onCategoryChange, productCounts }) => {
  const iconMap = {
    Grid3X3: Grid3X3,
    Shirt: Shirt,
    Smartphone: Smartphone,
    Home: Home,
    Heart: Heart
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Kategori Produk</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon];
          const count = productCounts[category.id] || 0;
          const isSelected = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
                isSelected
                  ? 'border-primary bg-primary text-white shadow-lg transform scale-105'
                  : 'border-gray-200 hover:border-primary hover:bg-primary/5'
              }`}
            >
              <div className={`p-3 rounded-full mb-2 transition-colors ${
                isSelected 
                  ? 'bg-white bg-opacity-20' 
                  : 'bg-gray-100'
              }`}>
                <IconComponent 
                  size={24} 
                  className={isSelected ? 'text-white' : 'text-primary'} 
                />
              </div>
              
              <span className={`font-medium text-sm text-center ${
                isSelected ? 'text-white' : 'text-gray-700'
              }`}>
                {category.name}
              </span>
              
              <span className={`text-xs mt-1 ${
                isSelected ? 'text-white text-opacity-80' : 'text-gray-500'
              }`}>
                {count} produk
              </span>
            </button>
          );
        })}
      </div>

      {/* Quick Filters */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Filter Cepat</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            Diskon
          </button>
          <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            Gratis Ongkir
          </button>
          <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            Rating 4+
          </button>
          <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            Stok Tersedia
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
