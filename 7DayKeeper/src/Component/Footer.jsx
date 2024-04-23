import React from "react";
const RealDate = new Date().getFullYear();

function footer(params) {
  return (
    <footer>
      {" "}
      <p>Copyright {RealDate}</p>
    </footer>
  );
}

export default footer;
