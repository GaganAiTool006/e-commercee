import { Link } from 'react-router-dom';
import foryouIcon from '../assets/icons/foryou.svg';
import fashionIcon from '../assets/icons/fashion.svg';
import mobilesIcon from '../assets/icons/mobiles.svg';
import electronicsIcon from '../assets/icons/electronics.svg';
import beautyIcon from '../assets/icons/beauty.svg';
import homeIcon from '../assets/icons/home.svg';
import appliancesIcon from '../assets/icons/appliances.svg';
import toysIcon from '../assets/icons/toys.svg';
import foodIcon from '../assets/icons/food.svg';
import autoIcon from '../assets/icons/auto.svg';
import sportsIcon from '../assets/icons/sports.svg';
import furnitureIcon from '../assets/icons/furniture.svg';
import booksIcon from '../assets/icons/books.svg';
import wheelersIcon from '../assets/icons/wheelers.svg';

const categories = [
  { name: 'For You',      img: foryouIcon,      active: true },
  { name: 'Fashion',      img: fashionIcon },
  { name: 'Mobiles',      img: mobilesIcon },
  { name: 'Electronics',  img: electronicsIcon },
  { name: 'Beauty',       img: beautyIcon },
  { name: 'Home',         img: homeIcon },
  { name: 'Appliances',   img: appliancesIcon },
  { name: 'Toys, ba...',  img: toysIcon },
  { name: 'Food & H...',  img: foodIcon },
  { name: 'Auto Acc...', img: autoIcon },
  { name: 'Sports & ...', img: sportsIcon },
  { name: 'Furniture',    img: furnitureIcon },
  { name: 'Books & ...',  img: booksIcon },
  { name: '2 Wheele...', img: wheelersIcon },
];

export default function CategoryNav() {
  return (
    <nav className="cat-nav">
      <div className="cat-list">
        {categories.map((cat, i) => (
          <Link
            to="/shop"
            key={i}
            className={`cat-item${cat.active ? ' active' : ''}`}
          >
            <div className="cat-icon">
              <img src={cat.img} alt={cat.name} />
            </div>
            <span className="cat-label">{cat.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
