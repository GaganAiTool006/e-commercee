import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const deals = [
  { id: 1, title: 'Ant Esports MP400R RGB Non Slip Gaming Mousepad', price: '595', originalPrice: '2,999', rating: '4.4', reviews: '250', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80', basketOffer: '577' },
  { id: 2, title: 'Frontech Dual Connectivity Wireless Mouse', price: '261', originalPrice: '1,000', rating: '4.2', reviews: '958', image: 'https://images.unsplash.com/photo-1561020028-bc5f83da8f59?w=400&q=80' },
  { id: 3, title: 'vivo X200T (Stellar Black, 256 GB)', price: '59,999', originalPrice: '80,000', rating: '4.6', reviews: '8,308', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80', basketOffer: '54,149' },
  { id: 4, title: 'The Plant Fix Plix Guava Juicy Mini Cleanser', price: '179', originalPrice: '199', rating: '4.2', reviews: '7,200', image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b47d06?w=400&q=80', basketOffer: '161' },
  { id: 5, title: 'Samsung 55" Class QLED 4K Smart TV', price: '69,700', originalPrice: '79,900', rating: '4.5', reviews: '2,100', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80' },
  { id: 6, title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones', price: '34,800', originalPrice: '39,900', rating: '4.6', reviews: '3,456', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80' },
];

const suggested = [
  { id: 7, title: 'Apple MacBook Air M2 (8GB, 256GB SSD)', price: '99,900', originalPrice: '1,19,900', rating: '4.9', reviews: '8,901', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80' },
  { id: 8, title: 'Logitech MX Master 3S Wireless Mouse', price: '9,900', originalPrice: '10,900', rating: '4.9', reviews: '4,567', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80' },
  { id: 9, title: 'Nike Air Max 270 Running Shoes', price: '15,000', originalPrice: '18,000', rating: '4.4', reviews: '567', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' },
  { id: 10, title: 'Dyson V15 Detect Cordless Vacuum Cleaner', price: '64,900', originalPrice: '74,900', rating: '4.8', reviews: '890', image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&q=80' },
  { id: 11, title: 'Sony Alpha ILCE-7M4 Full-Frame Camera', price: '2,49,800', originalPrice: '2,69,900', rating: '4.8', reviews: '456', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80' },
  { id: 12, title: 'boAt Rockerz 450 Bluetooth Headphone', price: '999', originalPrice: '3,990', rating: '4.1', reviews: '12,340', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80' },
];

const trending = [
  { id: 13, title: 'OnePlus 12R (Iron Grey, 128 GB)', price: '34,999', originalPrice: '39,999', rating: '4.4', reviews: '5,200', image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80' },
  { id: 14, title: 'Prestige Iris 750W Mixer Grinder', price: '1,999', originalPrice: '4,500', rating: '4.3', reviews: '3,100', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80' },
  { id: 15, title: 'Levi\'s Men\'s Slim Fit Jeans', price: '1,349', originalPrice: '2,699', rating: '4.2', reviews: '1,800', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80' },
  { id: 16, title: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker', price: '8,499', originalPrice: '12,000', rating: '4.6', reviews: '9,800', image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80' },
  { id: 17, title: 'Fire-Boltt Phoenix Smart Watch', price: '999', originalPrice: '5,999', rating: '4.0', reviews: '22,000', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80' },
  { id: 18, title: 'Fujifilm Instax Mini 12 Instant Camera', price: '7,499', originalPrice: '9,000', rating: '4.7', reviews: '4,400', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80' },
];

function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <Link to="/shop" className="section-view-all">View All →</Link>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-wrap">

      {/* Hero Banner */}
      <div className="hero-banner">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80"
          alt="Sale Banner"
          className="hero-img"
        />
        <div className="hero-overlay">
          <h2 className="hero-title">End of Season Sale</h2>
          <p className="hero-sub">Up to 70% off on top brands</p>
          <Link to="/shop" className="hero-btn">Shop Now</Link>
        </div>
      </div>

      {/* Deals of the Day */}
      <div className="home-section">
        <SectionHeader title="🔥 Deals of the Day" />
        <div className="home-grid">
          {deals.map((product) => (
            <div key={product.id} className="home-grid-item">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Suggested for You */}
      <div className="home-section">
        <SectionHeader title="✨ Suggested for You" />
        <div className="home-grid">
          {suggested.map((product) => (
            <div key={product.id} className="home-grid-item">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Trending Now */}
      <div className="home-section">
        <SectionHeader title="📈 Trending Now" />
        <div className="home-grid">
          {trending.map((product) => (
            <div key={product.id} className="home-grid-item">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
