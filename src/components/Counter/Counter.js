import React, { useState } from "react";

// Styles
import styles from "./Counter.module.css";
// Styles

const Counter = () => {
  let [count, setCount] = useState(0);

  const decrement = () => setCount((count -= 1));
  const increment = () => setCount((count += 1));

  return (
    <div data-testid="counter" className={styles.counter} id="counter">
      <p data-testid="count" id="countValue">{count}</p>
      <div className={styles.buttons_box}>
        <button
          data-testid="decrement"
          type="button"
          onClick={decrement}
          className={styles.button}
        >
          -
        </button>
        <button
          data-testid="increment"
          type="button"
          onClick={increment}
          className={styles.button}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
