import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  { id: 1, title: 'Apple iPhone 15 Pro Max (Natural Titanium, 256 GB)', price: '1199', originalPrice: '1299', discount: '7', rating: '4.7', reviews: '1,234', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80', tag: 'Mobile' },
  { id: 2, title: 'Sony Alpha ILCE-7M4 Full-Frame Hybrid Camera', price: '2498', originalPrice: '2699', discount: '7', rating: '4.8', reviews: '456', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80', tag: 'Camera' },
  { id: 3, title: 'MacBook Air M2 (8GB RAM, 256GB SSD)', price: '999', originalPrice: '1199', discount: '16', rating: '4.9', reviews: '8,901', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80', tag: 'Laptop' },
  { id: 4, title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones', price: '348', originalPrice: '399', discount: '12', rating: '4.6', reviews: '3,456', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80', tag: 'Audio' },
  { id: 5, title: 'Samsung 55" Class QLED 4K Smart TV', price: '697', originalPrice: '799', discount: '12', rating: '4.5', reviews: '2,100', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80', tag: 'Television' },
];

export default function Home() {
  return (
    <div className="container mx-auto px-2 lg:px-4 pb-8 space-y-4">
      {/* Hero Banner (Static representation) */}
      <div className="bg-white p-2 rounded shadow-sm relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80" 
          alt="Sale Banner" 
          className="w-full h-[200px] md:h-[300px] object-cover rounded"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 shadow-black drop-shadow-lg">End of Season Sale</h2>
          <p className="text-xl text-white font-medium mb-6 drop-shadow-md">Up to 70% off on top brands</p>
          <Link to="/shop" className="bg-primary hover:bg-secondary text-white px-6 py-2 w-max rounded shadow-lg font-bold transition">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Deals of the Day Row */}
      <div className="bg-white shadow-sm flex flex-col">
        <div className="px-6 py-4 flex items-center justify-between border-b">
          <h2 className="text-xl font-bold text-gray-800">Deals of the Day</h2>
          <Link to="/shop" className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition shadow">
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="p-4 overflow-x-auto no-scrollbar flex gap-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="min-w-[220px] w-[220px]">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Suggested for You */}
      <div className="bg-white shadow-sm flex flex-col">
        <div className="px-6 py-4 flex items-center justify-between border-b">
          <h2 className="text-xl font-bold text-gray-800">Suggested for You</h2>
          <Link to="/shop" className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition shadow">
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="p-4 overflow-x-auto no-scrollbar flex gap-4">
          {[...featuredProducts].reverse().map((product) => (
            <div key={product.id} className="min-w-[220px] w-[220px]">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
