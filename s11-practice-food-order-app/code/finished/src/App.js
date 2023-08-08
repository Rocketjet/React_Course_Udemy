import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <React.StrictMode>
      <CartProvider>
        {showCart && <Cart onClose={showCartHandler} />}
        <Header onShow={showCartHandler} />
        <Meals />
      </CartProvider>
    </React.StrictMode>
  );
}

export default App;
