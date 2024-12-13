import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../Styles/Cart.css';

function Cart() {
    const { cart, dispatch } = useCart();

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    };

    const updateQuantity = (id, quantity) => {
        if (quantity > 0) {
            dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
        }
    };

    const calculateTotal = () =>
        cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>${item.price}</p>
                            <div>
                                <button className='minus'
                                    onClick={() =>
                                        updateQuantity(item.id, item.quantity - 1)
                                    }
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button className='plus'
                                    onClick={() =>
                                        updateQuantity(item.id, item.quantity + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>
                            <button className='btn1' onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h2>Total: ${calculateTotal()}</h2>
                    <Link to='/checkout'>
                    <button className='btn2'>Proceed to Checkout</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
