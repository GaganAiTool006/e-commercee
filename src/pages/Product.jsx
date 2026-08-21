import { ShoppingCart, Zap, Star } from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();
  
  // Dummy product data
  const product = {
    title: 'Apple iPhone 15 Pro Max (Natural Titanium, 256 GB)',
    price: '1199',
    originalPrice: '1299',
    discount: '7',
    rating: '4.7',
    reviews: '1,234 Ratings & 123 Reviews',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
    description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.',
    highlights: ['256 GB ROM', '17.02 cm (6.7 inch) Super Retina XDR Display', '48MP + 12MP + 12MP | 12MP Front Camera', 'A17 Pro Chip, 6 Core Processor Processor'],
  };

  return (
    <div className="container mx-auto px-2 lg:px-4 pb-8">
      <div className="bg-white shadow-sm flex flex-col md:flex-row p-4 lg:p-6 min-h-[600px]">
        {/* Left: Images */}
        <div className="w-full md:w-2/5 flex flex-col gap-4 border-r pr-0 md:pr-6">
          <div className="border rounded p-4 flex items-center justify-center h-[400px]">
            <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
          </div>
          <div className="flex gap-2 h-14">
            <button className="flex-1 bg-[#ff9f00] text-white font-bold rounded shadow flex items-center justify-center gap-2 hover:bg-[#e68f00]">
              <ShoppingCart className="w-5 h-5" /> ADD TO CART
            </button>
            <button className="flex-1 bg-[#fb641b] text-white font-bold rounded shadow flex items-center justify-center gap-2 hover:bg-[#e05915]">
              <Zap className="w-5 h-5" /> BUY NOW
            </button>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-3/5 pl-0 md:pl-6 pt-6 md:pt-0">
          <div className="text-xs text-gray-500 mb-2">Home {'>'} Mobiles {'>'} Apple</div>
          <h1 className="text-xl font-medium text-gray-800 mb-2">{product.title}</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded">
              {product.rating} <Star className="w-3 h-3 ml-0.5" fill="currentColor" />
            </div>
            <span className="text-sm text-gray-500 font-medium">{product.reviews}</span>
          </div>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            <span className="text-base text-gray-500 line-through mb-1">${product.originalPrice}</span>
            <span className="text-base font-bold text-green-600 mb-1">{product.discount}% off</span>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Available offers</h3>
            <ul className="text-sm space-y-2">
              <li className="flex gap-2 items-start"><Zap className="w-4 h-4 text-green-600 shrink-0 mt-0.5"/> <span className="font-medium text-gray-800">Bank Offer:</span> 5% Cashback on Emerald Bank Card</li>
              <li className="flex gap-2 items-start"><Zap className="w-4 h-4 text-green-600 shrink-0 mt-0.5"/> <span className="font-medium text-gray-800">Special Price:</span> Get extra 10% off (price inclusive of cashback/coupon)</li>
            </ul>
          </div>

          <div className="flex gap-8 mb-6">
            <div className="w-24 text-sm text-gray-500 font-medium">Highlights</div>
            <ul className="list-disc pl-4 text-sm text-gray-800 space-y-1 font-medium">
              {product.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>

          <div className="flex gap-8 border-t pt-6">
            <div className="w-24 text-sm text-gray-500 font-medium">Description</div>
            <div className="text-sm text-gray-800 leading-relaxed font-medium flex-1">
              {product.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
