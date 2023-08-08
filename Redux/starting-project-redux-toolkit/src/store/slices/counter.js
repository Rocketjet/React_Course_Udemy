import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0, showCounter: true
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++
    }, //?в цих редюсерах ми можемо мутувати стейт напряму, хоча це все одно робити небажано. Це можливо тому, що redux toolkit автоматично клонує існуючий state, створює новий state object, переносить в нього всі частини state, що не змінились і перезаписує state, який ми змінили, не мутуючим шляхом 
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
})
//?доступ до ключів, які ми додали в об'єкт reducers ми матимемо через об'єкт actions, який буде створено redux toolkit автоматично: counterSlice.actions.increment. При такому зверненні до ключів ми звертаємось не до reducers methods, а до автоматично створених методів (action creators), які, при їх виклику, повертатимуть action object { type: 'auto-generated unique identifier', payload}

export const { increment, decrement, increase, toggleCounter } = counterSlice.reducer
export default counterSlice.reducer;