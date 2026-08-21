import ProductCard from '../components/ProductCard';
import mouseImg from '../assets/images/mouse.svg';
import phoneImg from '../assets/images/phone.svg';
import cleanserImg from '../assets/images/cleanser.svg';

const featuredProducts = [
  { id: 1, title: 'Ant Esports MP400R RGB Non Slip Base...', price: '595', originalPrice: '2,999', rating: '4.4', reviews: '250', image: mouseImg, basketOffer: '577' },
  { id: 2, title: 'Frontech Dual Connectivity Wireless Mou...', price: '261', originalPrice: '1,000', rating: '4.2', reviews: '958', image: mouseImg },
  { id: 3, title: 'vivo X200T (Stellar Black, 256 GB)', price: '59,999', originalPrice: '80,000', rating: '4.6', reviews: '8,308', image: phoneImg, basketOffer: '54,149' },
  { id: 4, title: 'The Plant Fix Plix Guava Juicy Mini Clean...', price: '179', originalPrice: '199', rating: '4.2', reviews: '7,200', image: cleanserImg, basketOffer: '161' },
];

export default function Home() {
  return (
    <div className="home-wrap">
      <div className="product-scroll-section">
        <div className="product-scroll-row">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-scroll-item">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
