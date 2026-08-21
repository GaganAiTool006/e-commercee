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
  { name: 'For You', img: foryouIcon, active: true },
  { name: 'Fashion', img: fashionIcon },
  { name: 'Mobiles', img: mobilesIcon },
  { name: 'Electronics', img: electronicsIcon },
  { name: 'Beauty', img: beautyIcon },
  { name: 'Home', img: homeIcon },
  { name: 'Appliances', img: appliancesIcon },
  { name: 'Toys, ba...', img: toysIcon },
  { name: 'Food & H...', img: foodIcon },
  { name: 'Auto Acc...', img: autoIcon },
  { name: 'Sports & ...', img: sportsIcon },
  { name: 'Furniture', img: furnitureIcon },
  { name: 'Books & ...', img: booksIcon },
  { name: '2 Wheele...', img: wheelersIcon },
];

export default function CategoryNav() {
  return (
    <div className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center overflow-x-auto no-scrollbar gap-8 max-w-7xl">
        {categories.map((cat, i) => (
          <Link to="/shop" key={i} className={`flex flex-col items-center min-w-max group ${cat.active ? 'border-b-2 border-purple-600 pb-1 -mb-4' : ''}`}>
            <div className="w-12 h-12 overflow-hidden mb-1 flex items-center justify-center p-2">
              <img src={cat.img} alt={cat.name} className={`w-full h-full object-contain ${cat.active ? 'text-purple-600' : 'text-gray-600 group-hover:text-purple-500'} transition-colors`} />
            </div>
            <span className={`text-xs font-semibold ${cat.active ? 'text-purple-700' : 'text-gray-700'} whitespace-nowrap group-hover:text-purple-600 transition`}>{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
