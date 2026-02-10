import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';

// 1. ASYNC ACTION (Fetch User)
export const fetchUser = createAsyncThunk('user/fetch', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await res.json();
  return data.name; 
});

// 2. THE SLICE (State Logic)
const appSlice = createSlice({
  name: 'app',
  initialState: { count: 0, user: 'Guest' },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
    logout:    (state) => { state.user = 'Guest'; }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload; 
    });
  }
});

export const { increment, decrement, logout } = appSlice.actions;
export const store = configureStore({ reducer: { app: appSlice.reducer } });