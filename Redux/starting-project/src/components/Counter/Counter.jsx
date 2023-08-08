import classes from './Counter.module.css';
import { useSelector, useDispatch } from "react-redux";//дає доступ до певної частини стану в сховищі

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);//передаємо callback який отримає state зі сховища і повертатиме slice, тобто якусь частину зі state.
  //Коли ми використовуємо цей хук, redux автоматично встановить підписку на store для цього компонента, тобто як тільки counter буде змінено в state, тут в компоненті значення змінної теж оновиться
  const showCounter = useSelector(state => state.showCounter);
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };
  const increaseHandler = () => {
    dispatch({ type: 'increase', payload: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggleShowCounter' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
