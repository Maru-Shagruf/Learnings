import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch(API); return res.json();
});

export const addUser = createAsyncThunk("users/add", async (user) => {
  const res = await fetch(API, { method: "POST", body: JSON.stringify(user) });
  return { ...user, id: Date.now() }; 
});

export const updateUser = createAsyncThunk("users/update", async (user) => {
  await fetch(`${API}/${user.id}`, { method: "PUT", body: JSON.stringify(user) });
  return user; 
});

export const deleteUser = createAsyncThunk("users/delete", async (id) => {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  return id; 
});

const userSlice = createSlice({
  name: "users",
  initialState: { list: [] }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => { state.list = action.payload; })
      .addCase(addUser.fulfilled, (state, action) => { state.list.push(action.payload); })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
      });
  },
});

export const store = configureStore({ reducer: { users: userSlice.reducer } });