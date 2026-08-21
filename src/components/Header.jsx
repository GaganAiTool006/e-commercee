import { Search, ShoppingCart, ChevronDown, Plane, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Top Row */}
        <div className="header-top">
          <div className="header-left">
            <Link to="/" className="logo-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              ShopNova
            </Link>
            <div className="travel-btn">
              <Plane size={15} />
              Travel
            </div>
          </div>

          <div className="header-right">
            <div className="location-text">
              <MapPin size={14} />
              Location not set &nbsp;
              <span className="location-link">Select delivery location &gt;</span>
            </div>
            <div className="coin-btn">
              <div className="coin-icon">S</div>
              0
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="header-bottom">
          <div className="search-wrap">
            <Search size={18} className="s-icon" />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="search-input"
            />
          </div>

          <div className="header-actions">
            <div className="action-btn">
              <User size={18} />
              Gagan
              <ChevronDown size={15} />
            </div>
            <div className="action-btn">
              More
              <ChevronDown size={15} />
            </div>
            <Link to="/cart" className="action-btn">
              <div className="cart-wrap">
                <ShoppingCart size={18} />
                <span className="cart-badge">2</span>
              </div>
              Cart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
