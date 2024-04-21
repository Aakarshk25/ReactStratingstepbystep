//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
// import React from "react";
// import ReactDOM from "react-dom";

// const changedate = if (time < 12) {
//     greeting = "Good morning";
//   } else if (time < 18) {
//     greeting = "Good Afternoon";
//   } else {
//     greeting = "Good Night";
//   }

// ReactDOM.render(<h1>{greeting}!</h1>, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
const currentTime = date.getHours();
const customStyle = {
  color: "",
};
// we have to conacante to use cuatomstyle for css in if else like we do here 
let greeting;
if (currentTime < 12) {
  greeting = "good morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "good Afternoon";
  customStyle.color = "green";

} else {
  greeting = "good night";
  customStyle.color = "blue";

}
ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
