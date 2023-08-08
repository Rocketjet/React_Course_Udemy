import React, { useReducer } from 'react';
import CardContext from './cart-context';

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (prevState, { type, payload }) => {
  if (type === 'ADD') {
    const updatedTotalPrice =
      prevState.totalPrice + payload.item.price * payload.item.quantity; //вираховуємо оновлену загальну вартість товарів в корзині

    const existingCartItemIndex = prevState.items.findIndex(
      (item) => item.id === payload.item.id,
    ); //перевіряємо чи товар, який ми додаємо, вже є в корзині
    const existingCartItem = prevState.items[existingCartItemIndex]; //створюємо прив'язку для цього товару
    let updatedItems;

    if (prevState.items[existingCartItemIndex]) {
      //перевіряємо чи товар все ж таки вже було додано раніше в корзину і якщо так, формуємо новий об'єкт для нього з новою кількість одиниць цього товару
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + payload.item.quantity,
      };
      updatedItems = [...prevState.items]; //копіюємо всі айтеми в новий масив
      updatedItems[existingCartItemIndex] = updatedItem; //і оновлюємо дані товару, який зараз додається в корзину
    } else {
      //спрацює якщо поточний товар додається в корзину вперше
      updatedItems = prevState.items.concat(payload.item);
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  if (type === 'REMOVE') {
    const existingCartItemIndex = prevState.items.findIndex(
      (item) => item.id === payload,
    ); //знаходимо в корзині товар, який ми модифікуємо
    const existingCartItem = prevState.items[existingCartItemIndex]; //доступаємось до нього
    const updatedTotalPrice = prevState.totalPrice - existingCartItem.price; //оновлюємо вартість товару
    let updatedItems;
    if (existingCartItem.quantity === 1) {
      //перевіряємо чи цей товар в корзині в кількості 1
      updatedItems = prevState.items.filter((item) => item.id !== payload.id); //якщо так, то ми цей товар взагалі прибираємо з корзини
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      }; // інакше ми зменшуємо кількість цього товару на 1
      updatedItems = [...prevState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  if (type === 'CLEAR') {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: 'ADD', payload: { item } });
  };
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const clearCartHandler = () => {
    dispatch({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CardContext.Provider value={cartContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CartProvider;
