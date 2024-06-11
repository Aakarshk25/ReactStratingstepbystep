import React from "react";

var isDone = false;

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
  // isDone = true; we have to use this by the help of hooks and
  // usestate
}

function unStrike() {
  document.getElementById("root").style.textDecoration = null;

  // isDone = false; we have to use this by the help of hooks and
  // usestate
}

function App() {
  return (
    <div>
      <img
        src="https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-246f760158f6c3ef276ade2bdea3c09d_l3.svg"
        alt=""
      />
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
