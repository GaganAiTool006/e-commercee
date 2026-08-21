import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
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
      <div className="bg-white px-8 py-3 text-sm text-gray-600 font-medium border-t border-b border-gray-200 mt-8 flex justify-between items-center">
        <span>Flipkart - Your go-to place for Online Shopping</span>
        <span className="text-xl">+</span>
      </div>
      <Footer />
    </div>
  );
}

export default App;
