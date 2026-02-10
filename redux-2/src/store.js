import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { postApi } from './postApi';

export const store = configureStore({
  reducer: {
    users: userReducer,          
    [postApi.reducerPath]: postApi.reducer, 
  },
  middleware: (getDefault) => getDefault().concat(postApi.middleware),
});