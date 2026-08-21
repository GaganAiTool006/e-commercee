import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ id, title, image, price, originalPrice, rating, reviews, basketOffer }) {
  return (
    <Link to={`/product/${id}`} className="p-card">
      <div className="p-card-img">
        <img src={image} alt={title} />
        <div className="rating-chip">
          {rating}
          <Star size={11} className="star" fill="currentColor" />
          <span className="rev">({reviews})</span>
        </div>
      </div>
      <div className="p-card-body">
        <div className="p-title">{title}</div>
        <div className="p-prices">
          {originalPrice && <span className="p-orig">₹{originalPrice}</span>}
          <span className="p-curr">₹{price}</span>
        </div>
        {basketOffer && (
          <div className="p-basket">₹{basketOffer} with Basket offer</div>
        )}
      </div>
    </Link>
  );
}
