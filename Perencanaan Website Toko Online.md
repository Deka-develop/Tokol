# Perencanaan Website Toko Online

## Fitur Utama

### 1. Halaman Beranda
- Hero section dengan banner promosi
- Kategori produk unggulan
- Produk terlaris/terbaru
- Testimoni pelanggan
- Footer dengan informasi kontak

### 2. Katalog Produk
- Grid layout untuk menampilkan produk
- Filter berdasarkan kategori, harga, rating
- Search functionality
- Pagination untuk navigasi produk
- Quick view produk

### 3. Detail Produk
- Gambar produk dengan zoom
- Deskripsi lengkap produk
- Harga dan diskon
- Pilihan varian (ukuran, warna)
- Tombol add to cart
- Review dan rating produk

### 4. Keranjang Belanja
- Daftar produk yang dipilih
- Update quantity
- Remove item
- Total harga
- Promo code input
- Checkout button

### 5. Halaman Checkout
- Form data pembeli
- Pilihan metode pembayaran
- Pilihan pengiriman
- Summary order
- Konfirmasi pembelian

### 6. Halaman Lainnya
- About Us
- Contact
- FAQ
- Terms & Conditions
- Privacy Policy

## Teknologi yang Digunakan
- React.js untuk frontend
- Tailwind CSS untuk styling
- Lucide React untuk icons
- Local Storage untuk data persistence
- Responsive design untuk mobile

## Struktur Komponen
```
src/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── ProductCard.js
│   ├── ProductGrid.js
│   ├── Cart.js
│   ├── Checkout.js
│   └── ...
├── pages/
│   ├── Home.js
│   ├── Products.js
│   ├── ProductDetail.js
│   ├── Cart.js
│   └── Checkout.js
├── data/
│   └── products.js
└── App.js
```

## Data Produk Sample
Akan menggunakan data produk contoh dengan kategori:
- Fashion (Pakaian, Sepatu, Aksesoris)
- Elektronik (Smartphone, Laptop, Gadget)
- Home & Living (Furniture, Dekorasi)
- Beauty & Health (Skincare, Makeup, Suplemen)
