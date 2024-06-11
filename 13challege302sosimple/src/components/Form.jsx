import React from "react";
import Input from "./Input";

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="Confirm Password" />

      {/* <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" /> */}
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
