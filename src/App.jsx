
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <CartProvider>
  <div className='App'>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/menu' exact Component={Menu}/>
      <Route path='/about' exact Component={About}/>
      <Route path='/contact' exact Component={Contact}/>
      <Route path='/cart' exact Component={Cart}/>
      <Route path='/checkout' exact Component={Checkout}/>
      <Route path='/order-confirmation' exact Component={OrderConfirmation}/>
    </Routes>
    <Footer />
    </Router>
  </div>
  </CartProvider>
  );

}

export default App;
