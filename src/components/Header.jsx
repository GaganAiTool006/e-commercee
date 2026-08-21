import { Search, ShoppingCart, ChevronDown, Plane, MapPin, User, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-2">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-3 text-sm">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center bg-yellow-400 px-3 py-1.5 rounded-md cursor-pointer hover:bg-yellow-500 transition">
              {/* Dummy SVG for Flipkart Logo */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M11 2.5L5 9H8L7 14L13 7.5H10L11 2.5Z" fill="#2874F0"/>
              </svg>
              <span className="font-bold text-blue-800 text-xs italic tracking-wide">Flipkart</span>
            </Link>
            <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-200 transition">
              <Plane className="w-4 h-4 text-gray-500 mr-2" />
              <span className="font-medium text-gray-700 text-xs">Travel</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-1 text-gray-800" />
              <span>Location not set <span className="text-blue-600 font-semibold cursor-pointer">Select delivery location &gt;</span></span>
            </div>
            <div className="bg-yellow-100 px-2 py-1 rounded-full flex items-center gap-1 cursor-pointer">
              <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-[8px] font-bold text-white">F</div>
              <span>0</span>
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
              className="w-full py-2.5 pl-10 pr-4 bg-blue-50/50 border border-gray-200 rounded-md text-black focus:outline-none focus:bg-white focus:border-blue-500 transition"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-8 text-sm font-medium">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-md transition">
              <User className="w-5 h-5 text-gray-700" />
              <span>Gagan</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            
            <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-md transition">
              <span>More</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            
            <Link to="/cart" className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-md transition">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
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
