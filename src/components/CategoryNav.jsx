import { Link } from 'react-router-dom';

const categories = [
  { name: 'For You', img: 'https://images.unsplash.com/photo-1607083206968-13611e3d76ba?w=150&q=80', active: true },
  { name: 'Fashion', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=150&q=80' },
  { name: 'Mobiles', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&q=80' },
  { name: 'Electronics', img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=150&q=80' },
  { name: 'Beauty', img: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=150&q=80' },
  { name: 'Home', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=150&q=80' },
  { name: 'Appliances', img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=150&q=80' },
  { name: 'Toys, ba...', img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=150&q=80' },
  { name: 'Food & H...', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=150&q=80' },
  { name: 'Auto Acc...', img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=150&q=80' },
  { name: 'Sports & ...', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=150&q=80' },
  { name: 'Furniture', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&q=80' },
  { name: 'Books & ...', img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=150&q=80' },
  { name: '2 Wheele...', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=150&q=80' },
];

export default function CategoryNav() {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center overflow-x-auto no-scrollbar gap-8">
        {categories.map((cat, i) => (
          <Link to="/shop" key={i} className={`flex flex-col items-center min-w-max group ${cat.active ? 'border-b-2 border-blue-500 pb-1 -mb-4' : ''}`}>
            <div className="w-12 h-12 overflow-hidden mb-1">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-contain" />
            </div>
            <span className={`text-xs font-semibold ${cat.active ? 'text-blue-600' : 'text-gray-800'} whitespace-nowrap group-hover:text-blue-600 transition`}>{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
