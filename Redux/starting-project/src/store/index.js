import { legacy_createStore } from 'redux';

const initialState = {
  counter: 0, showCounter: true
}
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1
      };//!потрібно пам'ятати, що мутувати поточний state, state, який ми маємо на момент виклику reducer func, напряму неможна. Тобто ось так, наприклад: state.counter++
      //!ми завжди повинні повертати новий об'єкт, який буде копією старого state. Такий підхід спрощую порівняння об'єктів і дозволить зберегти історію змін в state
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1
      };
    case 'increase':
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case 'toggleShowCounter':
      return {
        ...state,
        showCounter: !state.showCounter
      }
    default:
      return state;
  };
};

const store = legacy_createStore(counterReducer);

export default store;