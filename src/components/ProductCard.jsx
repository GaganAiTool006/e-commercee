import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ id, title, image, price, originalPrice, rating, reviews, discount, tag }) {
  return (
    <Link to={`/product/${id}`} className="block bg-white p-4 hover:shadow-lg transition group relative border border-transparent hover:border-gray-200 h-full flex flex-col">
      <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 z-10">
        <Heart fill="currentColor" className="w-5 h-5 opacity-0 group-hover:opacity-100 transition" />
      </button>
      
      <div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden">
        <img src={image} alt={title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300" />
      </div>
      
      <div className="flex-1 flex flex-col">
        {tag && <div className="text-xs text-gray-500 font-bold uppercase mb-1">{tag}</div>}
        <h3 className="text-sm font-medium text-gray-800 hover:text-primary line-clamp-2 mb-2">{title}</h3>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            {rating} <Star className="w-3 h-3 ml-0.5" fill="currentColor" />
          </div>
          <span className="text-xs text-gray-500 font-medium">({reviews})</span>
        </div>
        
        <div className="mt-auto flex items-end gap-2">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through mb-0.5">${originalPrice}</span>
          )}
          {discount && (
            <span className="text-sm font-bold text-green-600 mb-0.5">{discount}% off</span>
          )}
        </div>
      </div>
    </Link>
  );
}
