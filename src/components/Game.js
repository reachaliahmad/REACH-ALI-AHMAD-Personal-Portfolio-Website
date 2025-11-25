import React, { useState } from 'react';

const Game = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="game">
      <h3>Simple Game</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Game;
