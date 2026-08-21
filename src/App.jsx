import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <CategoryNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <div className="footer-tagline">
        <span>ShopNova – Your go-to place for Online Shopping</span>
        <span>+</span>
      </div>
      <Footer />
    </div>
  );
}

export default App;
