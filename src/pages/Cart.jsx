import { ShieldCheck } from 'lucide-react';

export default function Cart() {
  return (
    <div className="cart-wrap">
      {/* Left */}
      <div className="cart-left">
        <div className="cart-header-bar">
          <h2>My Cart (1)</h2>
          <div className="deliver-tag">
            Deliver to: <strong>New Delhi – 110001</strong>
          </div>
        </div>

        <div className="cart-item">
          <div className="cart-img-col">
            <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80" alt="iPhone" />
            <div className="qty-row">
              <button className="qty-btn">-</button>
              <div className="qty-num">1</div>
              <button className="qty-btn">+</button>
            </div>
          </div>
          <div className="cart-detail">
            <div className="cart-item-name">Apple iPhone 15 Pro Max (Natural Titanium, 256 GB)</div>
            <div className="cart-seller">Seller: Apple Verified</div>
            <div className="cart-price-row">
              <span className="cart-curr">₹1,19,900</span>
              <span className="cart-orig">₹1,29,900</span>
              <span className="cart-disc">7% Off</span>
            </div>
            <div className="cart-actions">
              <button className="cart-act-btn">Save for later</button>
              <button className="cart-act-btn">Remove</button>
            </div>
          </div>
          <div className="cart-delivery">
            Delivery by Tomorrow | <span className="free">Free</span>
          </div>
        </div>

        <div className="cart-place-row">
          <button className="btn-place">PLACE ORDER</button>
        </div>
      </div>

      {/* Right */}
      <div className="cart-right">
        <div className="price-box">
          <div className="price-box-title">Price Details</div>
          <div className="price-rows">
            <div className="price-row">
              <span>Price (1 item)</span>
              <span>₹1,29,900</span>
            </div>
            <div className="price-row">
              <span>Discount</span>
              <span className="disc-amt">-₹10,000</span>
            </div>
            <div className="price-row">
              <span>Delivery Charges</span>
              <span className="disc-amt">Free</span>
            </div>
            <div className="price-total-row">
              <span>Total Amount</span>
              <span>₹1,19,900</span>
            </div>
          </div>
          <div className="savings-note">You will save ₹10,000 on this order</div>
        </div>
        <div className="safe-note">
          <ShieldCheck size={32} color="#9ca3af" />
          Safe and Secure Payments. Easy returns. 100% Authentic products.
        </div>
      </div>
    </div>
  );
}
