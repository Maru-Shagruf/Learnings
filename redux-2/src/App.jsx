import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './store';
import { fetchUsers } from './userSlice';
import { useGetPostsQuery } from './postApi';

const UserList = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (status === 'loading') return <p> Loading Users...</p>;

  return (
    <div style={{ border: "1px solid blue", padding: 10, margin: 10 }}>
      <h3> Users (Manual Thunk)</h3>
      {list.slice(0, 3).map(u => <div key={u.id}>{u.name}</div>)}
    </div>
  );
};

const PostList = () => {
 
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading Posts...</p>;

  return (
    <div style={{ border: "1px solid green", padding: 10, margin: 10 }}>
      <h3>Posts (RTK Query)</h3>
      {data.map(p => <div key={p.id}>{p.title}</div>)}
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: 20 }}>
        <h1>Redux: Hard Way vs Easy Way</h1>
        <UserList />
        <PostList />
      </div>
    </Provider>
  );
}