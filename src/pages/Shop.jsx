import { ChevronDown, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const shopProducts = [
  { id: 1, title: 'Apple iPhone 15 Pro Max (Natural Titanium, 256 GB)', price: '1199', originalPrice: '1299', discount: '7', rating: '4.7', reviews: '1,234', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80', tag: 'Mobile' },
  { id: 2, title: 'Sony Alpha ILCE-7M4 Full-Frame Hybrid Camera', price: '2498', originalPrice: '2699', discount: '7', rating: '4.8', reviews: '456', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80', tag: 'Camera' },
  { id: 3, title: 'MacBook Air M2 (8GB RAM, 256GB SSD)', price: '999', originalPrice: '1199', discount: '16', rating: '4.9', reviews: '8,901', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80', tag: 'Laptop' },
  { id: 4, title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones', price: '348', originalPrice: '399', discount: '12', rating: '4.6', reviews: '3,456', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80', tag: 'Audio' },
  { id: 5, title: 'Samsung 55" Class QLED 4K Smart TV', price: '697', originalPrice: '799', discount: '12', rating: '4.5', reviews: '2,100', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80', tag: 'Television' },
  { id: 6, title: 'Nike Air Max 270 Sneakers', price: '150', originalPrice: '180', discount: '16', rating: '4.4', reviews: '567', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', tag: 'Fashion' },
  { id: 7, title: 'Dyson V15 Detect Cordless Vacuum Cleaner', price: '649', originalPrice: '749', discount: '13', rating: '4.8', reviews: '890', image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&q=80', tag: 'Home' },
  { id: 8, title: 'Logitech MX Master 3S Wireless Mouse', price: '99', originalPrice: '109', discount: '9', rating: '4.9', reviews: '4,567', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80', tag: 'Accessories' },
];

export default function Shop() {
  return (
    <div className="container mx-auto px-2 lg:px-4 pb-8 flex flex-col md:flex-row gap-2">
      {/* Sidebar Filters */}
      <div className="w-full md:w-1/4 lg:w-1/5 bg-white shadow-sm p-4 h-fit sticky top-20 hidden md:block">
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <h2 className="text-lg font-bold">Filters</h2>
          <span className="text-xs text-primary font-medium cursor-pointer hover:underline">CLEAR ALL</span>
        </div>
        
        {/* Price Filter */}
        <div className="border-b pb-4 mb-4">
          <h3 className="font-semibold text-sm mb-3 uppercase flex items-center justify-between cursor-pointer">
            Price <ChevronDown className="w-4 h-4" />
          </h3>
          <input type="range" className="w-full accent-primary" />
          <div className="flex items-center justify-between mt-2">
            <select className="border rounded px-2 py-1 text-xs">
              <option>Min</option>
              <option>₹500</option>
              <option>₹1000</option>
            </select>
            <span className="text-gray-500 text-xs">to</span>
            <select className="border rounded px-2 py-1 text-xs">
              <option>Max</option>
              <option>₹2000</option>
              <option>₹5000+</option>
            </select>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="border-b pb-4 mb-4">
          <h3 className="font-semibold text-sm mb-3 uppercase flex items-center justify-between cursor-pointer">
            Brand <ChevronDown className="w-4 h-4" />
          </h3>
          <div className="space-y-2">
            {['Apple', 'Samsung', 'Sony', 'Nike'].map(brand => (
              <label key={brand} className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" className="accent-primary" /> {brand}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="w-full md:w-3/4 lg:w-4/5 bg-white shadow-sm">
        {/* Sort & Breadcrumbs */}
        <div className="p-4 border-b">
          <div className="text-xs text-gray-500 mb-2">Home {'>'} Shop {'>'} All Products</div>
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold">All Products <span className="text-sm font-normal text-gray-500">(Showing 1 – 8 of 8 products)</span></h1>
            <div className="hidden md:flex items-center gap-4 text-sm font-medium">
              <span className="font-bold">Sort By</span>
              <span className="text-primary border-b-2 border-primary pb-1 cursor-pointer">Relevance</span>
              <span className="text-gray-600 hover:text-primary cursor-pointer">Popularity</span>
              <span className="text-gray-600 hover:text-primary cursor-pointer">Price -- Low to High</span>
              <span className="text-gray-600 hover:text-primary cursor-pointer">Price -- High to Low</span>
            </div>
            <button className="md:hidden flex items-center gap-1 border px-2 py-1 rounded text-sm"><Filter className="w-4 h-4"/> Filter</button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l">
          {shopProducts.map((product) => (
            <div key={product.id} className="border-r border-b hover:shadow-xl transition relative z-0 hover:z-10 bg-white">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
