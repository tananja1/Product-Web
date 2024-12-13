import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; 
import '../Styles/Checkout.css';


function Checkout() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('Credit Card'); 

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch({ type: 'CLEAR_CART' });  
    navigate('/order-confirmation');  
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                </li>
              ))}
            </ul>
            <h3>Total: ${calculateTotal()}</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="shipping-info">
              <h2>Shipping Information</h2>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={shippingInfo.name}
                  onChange={handleShippingChange}
                  required
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleShippingChange}
                  required
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleShippingChange}
                  required
                />
              </label>
              <label>
                Zip Code:
                <input
                  type="text"
                  name="zip"
                  value={shippingInfo.zip}
                  onChange={handleShippingChange}
                  required
                />
              </label>
            </div>

            <div className="payment-method">
              <h2>Payment Method</h2>
              <select value={paymentMethod} onChange={handlePaymentChange}>
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>

            <button type="submit" className='orderbtn'>Place Order</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Checkout;