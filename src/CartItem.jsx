import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from './context/context';
import { subTotal } from './utils/getTotals';

const CartItem = ({ id, img, title, price, amount }) => {
  const { cart, handleIncreaseAmount, handleDecreaseAmount, handleRemoveItem } = useGlobalContext();

  // const xx = getTotal(cart.carts, id);
  // console.log(xx);

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${subTotal(cart.carts, id).toFixed(2)}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => handleDecreaseAmount(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => handleIncreaseAmount(id)}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => handleDecreaseAmount(id)}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
