// src/pages/home/Home.tsx

import React from 'react';

interface HomeProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Home: React.FC<HomeProps> = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Home;
