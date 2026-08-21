import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="container mx-auto px-2 lg:px-4 pb-8 flex flex-col md:flex-row gap-4">
      {/* Left: Cart Items */}
      <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col gap-4">
        <div className="bg-white shadow-sm rounded-sm p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">My Cart (1)</h2>
          <div className="text-sm bg-gray-100 px-3 py-1 rounded">
            Deliver to: <span className="font-bold">New York - 10012</span>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-sm border-t p-4 flex gap-4 md:gap-8">
          <div className="w-24 h-24 shrink-0 flex flex-col items-center gap-4">
            <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80" alt="iPhone" className="w-full h-full object-contain" />
            <div className="flex items-center gap-2">
              <button className="w-7 h-7 rounded-full border bg-white flex items-center justify-center font-bold text-gray-600">-</button>
              <span className="w-8 h-7 border bg-white flex items-center justify-center font-bold text-sm">1</span>
              <button className="w-7 h-7 rounded-full border bg-white flex items-center justify-center font-bold text-gray-600">+</button>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-800 text-sm md:text-base mb-1">Apple iPhone 15 Pro Max (Natural Titanium, 256 GB)</h3>
            <p className="text-xs text-gray-500 mb-4">Seller: Apple Verified</p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-lg font-bold text-gray-900">$1199</span>
              <span className="text-sm text-gray-500 line-through mb-0.5">$1299</span>
              <span className="text-sm font-bold text-green-600 mb-0.5">7% Off</span>
            </div>
            <div className="flex gap-6 text-sm font-bold text-gray-800 uppercase">
              <button className="hover:text-primary transition">Save for later</button>
              <button className="hover:text-primary transition">Remove</button>
            </div>
          </div>
          <div className="hidden md:block text-sm text-gray-800 whitespace-nowrap">
            Delivery by Tomorrow | <span className="text-green-600">Free</span>
          </div>
        </div>
        
        <div className="bg-white shadow-sm rounded-sm p-4 flex justify-end">
          <button className="bg-[#fb641b] text-white px-10 py-3 rounded-sm font-bold shadow hover:bg-[#e05915]">
            PLACE ORDER
          </button>
        </div>
      </div>

      {/* Right: Price Details */}
      <div className="w-full md:w-1/3 lg:w-1/4">
        <div className="bg-white shadow-sm rounded-sm sticky top-20">
          <h2 className="text-gray-500 font-bold uppercase p-4 border-b text-sm">Price Details</h2>
          <div className="p-4 space-y-4 border-b">
            <div className="flex justify-between text-sm">
              <span>Price (1 item)</span>
              <span>$1299.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Discount</span>
              <span className="text-green-600">-$100.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-bold text-base border-t border-dashed pt-4">
              <span>Total Amount</span>
              <span>$1199.00</span>
            </div>
          </div>
          <div className="p-4 text-green-600 font-bold text-sm">
            You will save $100 on this order
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 font-medium px-2">
          <ShieldCheck className="w-8 h-8 text-gray-400" />
          Safe and Secure Payments. Easy returns. 100% Authentic products.
        </div>
      </div>
    </div>
  );
}
