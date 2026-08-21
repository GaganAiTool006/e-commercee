import { Link } from 'react-router-dom';

const categories = [
  { name: 'Top Offers', img: 'https://images.unsplash.com/photo-1607083206968-13611e3d76ba?w=150&q=80' },
  { name: 'Mobiles & Tablets', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&q=80' },
  { name: 'Electronics', img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=150&q=80' },
  { name: 'TVs & Appliances', img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=150&q=80' },
  { name: 'Fashion', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=150&q=80' },
  { name: 'Beauty', img: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=150&q=80' },
  { name: 'Home & Kitchen', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=150&q=80' },
  { name: 'Furniture', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&q=80' },
  { name: 'Grocery', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=150&q=80' },
];

export default function CategoryNav() {
  return (
    <div className="bg-white shadow-sm mb-2 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between overflow-x-auto no-scrollbar gap-6 lg:gap-8">
        {categories.map((cat, i) => (
          <Link to="/shop" key={i} className="flex flex-col items-center min-w-[70px] group">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2 bg-gray-100 group-hover:shadow-md transition">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
            </div>
            <span className="text-xs font-semibold text-gray-800 text-center whitespace-nowrap group-hover:text-primary transition">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
