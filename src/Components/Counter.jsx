import React, { useState } from "react";

function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  const handleAdd = (event) => {
    setCount(count + 1);
    onClick();
  };
  return (
    <div className="counter">
      <p className="number">
        {count} <span className="total">/{total}</span>
      </p>
      <button className="button" onClick={handleAdd}>
        Add +
      </button>
    </div>
  );
}

export default Counter;
