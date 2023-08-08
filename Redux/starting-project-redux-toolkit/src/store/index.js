import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import counterReducer from './slices/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});

export default store;