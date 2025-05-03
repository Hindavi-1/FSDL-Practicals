import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)} style={styles.btn}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} style={styles.btn}>
          Decrement
        </button>
        <button onClick={() => setCount(0)} style={styles.btn}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  btn: {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
  },
};

export default CounterApp;
