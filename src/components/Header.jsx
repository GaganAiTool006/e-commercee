import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start w-28 shrink-0 italic font-bold">
          <span className="text-xl tracking-wide">EmeraldShop</span>
          <span className="text-[10px] text-gray-200 hover:underline flex items-center -mt-1">
            Explore <span className="text-yellow-300 font-bold ml-1">Plus</span>
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search for products, brands and more" 
            className="w-full py-2 px-4 pr-10 rounded-sm text-black focus:outline-none shadow-inner"
          />
          <Search className="absolute right-3 top-2 text-primary w-5 h-5" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <div className="relative group cursor-pointer">
            <button className="bg-white text-primary px-8 py-1 rounded-sm font-bold shadow hover:bg-gray-100 transition">
              Login
            </button>
            {/* Dropdown would go here */}
          </div>
          
          <div className="hidden md:flex items-center gap-1 cursor-pointer font-semibold hover:text-gray-200">
            More <ChevronDown className="w-4 h-4" />
          </div>
          
          <Link to="/cart" className="flex items-center gap-2 font-semibold hover:text-gray-200">
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                2
              </span>
            </div>
            <span>Cart</span>
          </Link>
        </div>
      </div>
      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="w-full py-2 px-4 pr-10 rounded-sm text-black focus:outline-none"
          />
          <Search className="absolute right-3 top-2 text-primary w-5 h-5" />
        </div>
      </div>
    </header>
  );
}
