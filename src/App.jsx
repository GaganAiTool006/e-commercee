import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-gray-800">
      <Header />
      <CategoryNav />
      <div className="pt-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
