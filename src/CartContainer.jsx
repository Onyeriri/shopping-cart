import CartItem from './CartItem';
import { useGlobalContext } from './context/context';

const CartContainer = () => {
  const { cart, handleClearCart } = useGlobalContext();
  let totalPrice = 0;
  let newId = ''

  // const cartArray = [...cartItems];
  const cartItems = [...cart.carts]

  // for(let [key, {id, img, price, title}] of cartItems2)
  // console.log(key, id, img, price, title);

  if (cartItems.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  };

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((cartItem) => {
          const [key, { id, img, price, title, amount }] = cartItem;

          totalPrice += (+price * 100) * amount;
          return <CartItem
            amount={amount}
            key={key}
            id={id}
            img={img}
            price={price}
            title={title}
          />;
        })}

        {/* {cartItems2.map((items) => {
          const [key, { id, img, price, title }] = items;

          console.log(`key: ${key}, id: ${id}, img: ${img}, price: ${price}, title: ${title}`)
        })
         } */}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${(totalPrice/100).toFixed(2)}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={handleClearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
