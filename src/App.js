import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [myArray, setMyArray] = useState([]);
  const [myPrice, setMyPrice] = useState(0);
  function addToCart(index, name, price) {
    setMyArray([...myArray, name]);
    setMyPrice(myPrice + price);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map((item, index) => (
        <BakeryItem
          key={index}
          item={item}
          index={index}
          addToCart={addToCart}
        />
      ))}
      <div>
        <h2>Cart</h2>
        <li> {myArray}</li>

        <h2>Total: {myPrice}</h2>
      </div>
    </div>
  );
}

export default App;
