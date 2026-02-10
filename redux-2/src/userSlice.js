import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
});


const userSlice = createSlice({
  name: 'users',
  initialState: { list: [], status: 'idle' }, 
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'success';
        state.list = action.payload;
      });
  }
});

export default userSlice.reducer;