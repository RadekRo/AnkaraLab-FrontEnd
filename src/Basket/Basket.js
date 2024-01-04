import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Basket.css";
import { Row, Col } from "react-bootstrap";

const Basket = () => {
  const [storedBasket, setStoredBasket] = useState([]);

useEffect(() => {
  const currentBasket = JSON.parse(sessionStorage.getItem("Basket"));
  if (currentBasket) {
  setStoredBasket(currentBasket);}
}, []);
  
  const removeFromBasket = (itemIndex) => {
    const updatedBasket = storedBasket.filter((_, index) => index !== itemIndex);
    setStoredBasket(updatedBasket);
    sessionStorage.setItem("Basket", JSON.stringify(updatedBasket));
  }

  return (
    <div>
  <Link to="/" className="btn btn-info">&larr; Home</Link>
  <div>Basket logo</div>
  {storedBasket.length < 1 ? (
    <div>Twój koszyk jest pusty</div>
  ) : (
  <div className="form-basket">{storedBasket.map((basketItem, index) => (
    <Row className="m-1 border-bottom p-1 pb-2" key = {index}>
      <Col>{index + 1} </Col>
      <Col className="col-6 d-flex justify-items-left">{basketItem.size}</Col>
      <Col className="col-2">{basketItem.paper}</Col>
      <Col className="col-1">{basketItem.crop}</Col>
      <Col className="col-1">{basketItem.frame}</Col>
      <Col className="col-1"><div className = "btn btn-sm btn-danger" onClick={() => removeFromBasket(index)}>Usuń</div></Col>
    </Row>
  ))}</div>
  )}
  </div>
)};
export default Basket;
