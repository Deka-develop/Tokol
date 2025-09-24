import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard, Truck, Shield, Headphones } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-3 rounded-lg">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Gratis Ongkir</h3>
                <p className="text-sm text-gray-400">Untuk pembelian di atas 500rb</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-3 rounded-lg">
                <CreditCard size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Pembayaran Aman</h3>
                <p className="text-sm text-gray-400">Berbagai metode pembayaran</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-3 rounded-lg">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Garansi Kualitas</h3>
                <p className="text-sm text-gray-400">Produk original bergaransi</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-3 rounded-lg">
                <Headphones size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Customer Service</h3>
                <p className="text-sm text-gray-400">24/7 siap membantu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">TokoKu</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Toko online terpercaya dengan berbagai pilihan produk berkualitas. 
              Kami berkomitmen memberikan pengalaman belanja terbaik untuk Anda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cara Berbelanja</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Kategori</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fashion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Elektronik</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home & Living</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beauty & Health</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Semua Produk</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-400 text-sm">
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat, 10220
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-400 text-sm">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-400 text-sm">info@tokoku.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-3">
                Dapatkan info promo dan produk terbaru
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-r-md text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TokoKu. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Metode Pembayaran:</span>
              <div className="flex space-x-2">
                <div className="bg-white px-2 py-1 rounded text-xs font-semibold text-gray-800">VISA</div>
                <div className="bg-white px-2 py-1 rounded text-xs font-semibold text-gray-800">MC</div>
                <div className="bg-white px-2 py-1 rounded text-xs font-semibold text-gray-800">OVO</div>
                <div className="bg-white px-2 py-1 rounded text-xs font-semibold text-gray-800">DANA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
