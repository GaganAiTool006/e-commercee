import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ id, title, image, price, originalPrice, rating, reviews, basketOffer }) {
  return (
    <Link to={`/product/${id}`} className="block bg-white hover:shadow-lg transition group relative border border-transparent hover:border-gray-200 h-full flex flex-col rounded-md overflow-hidden pb-3">
      <div className="h-48 w-full flex items-center justify-center relative overflow-hidden bg-white">
        <img src={image} alt={title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300" />
        {/* Rating Badge */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1 shadow-sm text-[11px] font-bold text-gray-800 border border-gray-100">
          {rating} <Star className="w-3 h-3 text-green-600" fill="currentColor" /> <span className="text-gray-500 font-medium">({reviews})</span>
        </div>
      </div>
      
      <div className="px-3 pt-3 flex-1 flex flex-col">
        <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 truncate mb-1">{title}</h3>
        
        <div className="flex items-center gap-2 mb-1">
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
          )}
          <span className="text-base font-bold text-gray-900">₹{price}</span>
        </div>
        
        {basketOffer && (
          <div className="text-xs font-semibold text-blue-600">
            ₹{basketOffer} with Basket offer
          </div>
        )}
      </div>
    </Link>
  );
}
