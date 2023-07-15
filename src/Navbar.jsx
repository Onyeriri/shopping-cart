import { FaCartPlus } from 'react-icons/fa';
import { useGlobalContext } from './context/context';
const Navbar = () => {
  const { cart } = useGlobalContext();

  const cartItems = [...cart?.carts];

  let totalAmount = 0;

  for (let [key, {amount}] of cartItems) {
    totalAmount += amount;
  }

  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
