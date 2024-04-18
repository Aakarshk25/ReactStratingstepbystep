import React from "react";
import ReactDOM from "react-dom";
const random = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">Fav Food</h1>
    <img src={random} alt="" />
    <img
      className="food-img"
      src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
      alt="baccan"
    />
    <img
      className="food-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwum3hIBXmSvl_V-Oyc4EbUbwL7bgzt3Pvnz38P-ZIg&s"
      alt="aloo"
    />
    <img
      className="food-img"
      src="https://www.shutterstock.com/image-photo/arabic-cuisine-middle-eastern-traditional-260nw-1690553083.jpg"
      alt="zerra"
    />
  </div>,
  document.getElementById("root")
);
