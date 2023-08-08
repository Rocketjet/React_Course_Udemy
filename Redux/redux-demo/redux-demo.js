const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {//Дефолтне значення для state потрібне по тій причині, що при ініціалізації самого store, викликається автоматично і reducer, який в нього переданий, який в свою чергу може модифікувати стан
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      }
    case 'decrement':
      return {
        counter: state.counter - 1
      }
    
    default:
      return state;
  }
};//!this function will be executed by the Redux library
//?Inputs: Old state + Dispatched Action //Output: New state object
//?Also reducer function should be a pure function -> при отриманні одних і тих же даних на виході буде один і той же результат 
//?Also there should be no side effects inside reducer function

const store = redux.legacy_createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();//вбудований метод сховища, повертає актуальний стан
  console.log(latestState);
};

store.subscribe(counterSubscriber); //вбудований метод сховища, очікує функцію, яку Redux викликатиме самостійно, коли дані в сховищі будуть змінені

store.dispatch({ type: 'increment' });//метод який змінює стан, викор. action, який в нього передається. action - об'єкт з властивістю type і значенням типу string де записується унікальна назва тієї дії, яку треба виконати
store.dispatch({ type: 'decrement' });