import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const quantityInputRef = useRef();
  const [quantityIsValid, setQuantityIsValid] = useState(true);

  const addToCartHandler = (event) => {
    event.preventDefault();
    const chosenQuantity = quantityInputRef.current.value;

    if (chosenQuantity.trim().length === 0
      || +chosenQuantity < 1 || +chosenQuantity > 5) {
      setQuantityIsValid(false);
      return;
    }

    props.onAddToCart(+chosenQuantity);
  };
  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <Input
        ref={quantityInputRef}
        label='Quantity'
        input={{
          id: 'quantity_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!quantityIsValid && <p>Please enter a valid quantity</p>}
    </form>
  );
};

export default MealItemForm;
