import { ShoppingCart, Zap, Star } from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();

  const product = {
    title: 'Apple iPhone 15 Pro Max (Natural Titanium, 256 GB)',
    price: '1,19,900',
    originalPrice: '1,29,900',
    discount: '7',
    rating: '4.7',
    reviews: '1,234 Ratings & 123 Reviews',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
    description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.',
    highlights: [
      '256 GB ROM',
      '17.02 cm (6.7 inch) Super Retina XDR Display',
      '48MP + 12MP + 12MP | 12MP Front Camera',
      'A17 Pro Chip, 6 Core Processor',
    ],
  };

  return (
    <div className="product-wrap">
      <div className="product-main">
        {/* Left */}
        <div className="prod-left">
          <div className="prod-img-box">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="prod-btns">
            <button className="btn-cart">
              <ShoppingCart size={18} /> ADD TO CART
            </button>
            <button className="btn-buy">
              <Zap size={18} /> BUY NOW
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="prod-right">
          <div className="prod-bread">Home &gt; Mobiles &gt; Apple</div>
          <h1 className="prod-name">{product.title}</h1>
          <div className="prod-rating-row">
            <div className="rating-tag">
              {product.rating} <Star size={12} fill="currentColor" />
            </div>
            <span style={{ fontSize: 13, color: '#878787' }}>{product.reviews}</span>
          </div>
          <div className="prod-price-row">
            <span className="prod-price">₹{product.price}</span>
            <span className="prod-orig">₹{product.originalPrice}</span>
            <span className="prod-disc">{product.discount}% off</span>
          </div>
          <div className="offers-title">Available offers</div>
          <ul className="offers-list">
            <li className="offer-item">
              <Zap size={16} />
              <span><strong>Bank Offer:</strong> 5% Cashback on ShopNova Bank Card</span>
            </li>
            <li className="offer-item">
              <Zap size={16} />
              <span><strong>Special Price:</strong> Get extra 10% off (price inclusive of cashback/coupon)</span>
            </li>
          </ul>
          <div className="highlights-row">
            <span className="hl-label">Highlights</span>
            <ul className="hl-list">
              {product.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
          <div className="desc-row">
            <span className="desc-label">Description</span>
            <p className="desc-text">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
