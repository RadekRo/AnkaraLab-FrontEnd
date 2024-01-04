import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Basket = () => {
  const [storedBasket, setStoredBasket] = useState([]);

useEffect(() => {
  const currentBasket = JSON.parse(sessionStorage.getItem("Basket"));
  setStoredBasket(currentBasket);
}, []);
  
  const removeFromBasket = (itemIndex) => {
    const updatedBasket = storedBasket.filter((_, index) => index !== itemIndex);
    setStoredBasket(updatedBasket);
    sessionStorage.setItem("Basket", JSON.stringify(updatedBasket));
  }

  return (
    <div>
  <Link to="/" className="btn btn-info">&larr; Home</Link>
  <div>Basket</div>
  <div>{storedBasket.map((basketItem, index) => (
    <div key = {index} className = "d-flex">
      <p>{index + 1} </p>
      <p>{basketItem.size}</p>
      <p>{basketItem.paper}</p>
      <p>{basketItem.crop}</p>
      <div className = "btn btn-danger" onClick={() => removeFromBasket(index)}>Usuń</div>
    </div>
  ))}</div>
  </div>
)};
export default Basket;
