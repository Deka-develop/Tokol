import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ onShopNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Fashion Terbaru 2024",
      subtitle: "Koleksi Eksklusif",
      description: "Temukan gaya terbaru dengan koleksi fashion eksklusif kami. Kualitas premium dengan harga terjangkau.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      cta: "Belanja Sekarang",
      discount: "Diskon hingga 50%"
    },
    {
      id: 2,
      title: "Teknologi Terdepan",
      subtitle: "Gadget & Elektronik",
      description: "Upgrade lifestyle Anda dengan teknologi terbaru. Smartphone, laptop, dan gadget pilihan.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      cta: "Jelajahi Produk",
      discount: "Cashback 10%"
    },
    {
      id: 3,
      title: "Rumah Impian Anda",
      subtitle: "Home & Living",
      description: "Ciptakan rumah impian dengan koleksi furniture dan dekorasi berkualitas tinggi.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      cta: "Lihat Koleksi",
      discount: "Gratis Ongkir"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  {/* Discount Badge */}
                  <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
                    <Star size={16} className="mr-2 fill-current" />
                    {slide.discount}
                  </div>

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl text-gray-200 mb-2 font-medium">
                    {slide.subtitle}
                  </p>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <Button 
                    onClick={onShopNow}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    {slide.cta}
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Features Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <ShoppingBag size={20} className="text-primary" />
              <span className="text-sm font-medium text-gray-800">Gratis Ongkir Rp 500k+</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star size={20} className="text-primary fill-current" />
              <span className="text-sm font-medium text-gray-800">Produk Original</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">24</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Customer Service 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
