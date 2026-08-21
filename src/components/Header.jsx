import { Search, ShoppingCart, ChevronDown, Plane, MapPin, User, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 py-2 max-w-7xl">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-3 text-sm">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center bg-purple-600 px-3 py-1.5 rounded-md cursor-pointer hover:bg-purple-700 transition">
              {/* New Custom Logo SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="font-bold text-white text-xs italic tracking-wide">ShopNova</span>
            </Link>
            <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-200 transition text-gray-700">
              <Plane className="w-4 h-4 text-purple-600 mr-2" />
              <span className="font-medium text-xs">Travel</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-1 text-gray-800" />
              <span>Location not set <span className="text-purple-600 font-semibold cursor-pointer">Select delivery location &gt;</span></span>
            </div>
            <div className="bg-purple-50 px-2 py-1 rounded-full flex items-center gap-1 cursor-pointer border border-purple-100">
              <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center text-[8px] font-bold text-white">S</div>
              <span className="text-purple-700 font-bold">0</span>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center gap-6 pb-2">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for Products, Brands and More" 
              className="w-full py-2.5 pl-10 pr-4 bg-purple-50/30 border border-purple-300 rounded-md text-black focus:outline-none focus:bg-white focus:border-purple-600 transition shadow-sm"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-8 text-sm font-medium">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-purple-50 py-2 px-3 rounded-md transition text-gray-800 hover:text-purple-700">
              <User className="w-5 h-5" />
              <span>Gagan</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            
            <div className="flex items-center gap-1 cursor-pointer hover:bg-purple-50 py-2 px-3 rounded-md transition text-gray-800 hover:text-purple-700">
              <span>More</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            
            <Link to="/cart" className="flex items-center gap-2 cursor-pointer hover:bg-purple-50 py-2 px-3 rounded-md transition text-gray-800 hover:text-purple-700">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-white">
                  2
                </span>
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
