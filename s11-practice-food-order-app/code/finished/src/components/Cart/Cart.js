import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [orderSubmited, setOrderSubmited] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalPrice = `$${cartCtx.totalPrice.toFixed(2)}`;
  const cartIsNotEmpty = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const orderHandler = (event) => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    await fetch(
      'https://react-udemy-s14-dcbf6-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      },
    ).catch((error) => {
      setSubmitError(error.message);
    })
    setOrderSubmited(true);
    cartCtx.clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {cartIsNotEmpty && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const didSubmitModalContent = (
    <>
      <p>{orderSubmited ? 'Successfully sent the order!' : 'Something went wrong'}</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal onClose={props.onClose}>
      {!orderSubmited && !submitError && (
        <>
          <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
              <CartItem
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                key={item.id}
                onRemove={() => cartItemRemoveHandler(item.id)}
                onAdd={() => cartItemAddHandler(item)}
              />
            ))}
          </ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalPrice}</span>
          </div>
          {isCheckout && (
            <Checkout onCancel={props.onClose} onSubmit={submitOrderHandler} />
          )}
        </>
      )}
      {!isCheckout && modalActions}
      {orderSubmited && didSubmitModalContent}
      {!orderSubmited && submitError && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
