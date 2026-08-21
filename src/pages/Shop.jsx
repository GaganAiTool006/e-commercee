import { ChevronDown, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const shopProducts = [
  { id: 1, title: 'Apple iPhone 15 Pro Max (256 GB)', price: '1,19,900', originalPrice: '1,29,900', rating: '4.7', reviews: '1,234', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80' },
  { id: 2, title: 'Sony Alpha ILCE-7M4 Full-Frame Camera', price: '2,49,800', originalPrice: '2,69,900', rating: '4.8', reviews: '456', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80' },
  { id: 3, title: 'MacBook Air M2 (8GB RAM, 256GB SSD)', price: '99,900', originalPrice: '1,19,900', rating: '4.9', reviews: '8,901', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80' },
  { id: 4, title: 'Sony WH-1000XM5 Noise Cancelling Headphones', price: '34,800', originalPrice: '39,900', rating: '4.6', reviews: '3,456', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80' },
  { id: 5, title: 'Samsung 55" QLED 4K Smart TV', price: '69,700', originalPrice: '79,900', rating: '4.5', reviews: '2,100', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80' },
  { id: 6, title: 'Nike Air Max 270 Sneakers', price: '15,000', originalPrice: '18,000', rating: '4.4', reviews: '567', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' },
  { id: 7, title: 'Dyson V15 Detect Cordless Vacuum Cleaner', price: '64,900', originalPrice: '74,900', rating: '4.8', reviews: '890', image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&q=80' },
  { id: 8, title: 'Logitech MX Master 3S Wireless Mouse', price: '9,900', originalPrice: '10,900', rating: '4.9', reviews: '4,567', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80' },
];

export default function Shop() {
  return (
    <div className="shop-wrap">
      {/* Sidebar */}
      <aside className="shop-sidebar">
        <div className="sidebar-title-row">
          <h2>Filters</h2>
          <span className="clear-all">CLEAR ALL</span>
        </div>

        <div className="filter-section">
          <div className="filter-title">
            Price <ChevronDown size={16} />
          </div>
          <input type="range" className="price-range" />
          <div className="price-selects">
            <select>
              <option>Min</option>
              <option>₹500</option>
              <option>₹1000</option>
            </select>
            <span>to</span>
            <select>
              <option>Max</option>
              <option>₹20,000</option>
              <option>₹50,000+</option>
            </select>
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-title">
            Brand <ChevronDown size={16} />
          </div>
          <div className="brand-list">
            {['Apple', 'Samsung', 'Sony', 'Nike'].map(brand => (
              <label key={brand} className="brand-label">
                <input type="checkbox" /> {brand}
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="shop-main">
        <div className="shop-header">
          <div className="breadcrumb">Home &gt; Shop &gt; All Products</div>
          <div className="shop-title-row">
            <h1 className="shop-title">All Products <span>(Showing 1–8 of 8)</span></h1>
            <div className="sort-bar">
              <span className="sort-label">Sort By</span>
              <span className="sort-opt active">Relevance</span>
              <span className="sort-opt">Popularity</span>
              <span className="sort-opt">Price – Low to High</span>
              <span className="sort-opt">Price – High to Low</span>
            </div>
          </div>
        </div>

        <div className="shop-grid">
          {shopProducts.map((product) => (
            <div key={product.id} className="shop-grid-item">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
