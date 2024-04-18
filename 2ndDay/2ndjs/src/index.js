import React from "react";
import ReactDOM from "react-dom";
const fname = "Aakarsh";
const lname = "kumar";

const num = "1";
ReactDOM.render(
  <div>
    {/* <h1>Hello {fname + "" + lname}!</h1> or  */}
    <h1>
      Hello {fname} {lname}!
    </h1>

    <h2>my luckey nuber is {num}</h2>
  </div>,
  document.getElementById("root")
);
