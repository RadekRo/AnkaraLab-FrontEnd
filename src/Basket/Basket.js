import { useEffect, useState } from "react";
import "./Basket.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Basket = () => {
  const [storedBasket, setStoredBasket] = useState([]);

  useEffect(() => {
    const currentBasket = JSON.parse(sessionStorage.getItem("Basket"));
    if (currentBasket) {
      setStoredBasket(currentBasket);
    }
  }, []);

  const removeFromBasket = (itemIndex) => {
    const updatedBasket = storedBasket.filter(
      (_, index) => index !== itemIndex
    );
    setStoredBasket(updatedBasket);
    sessionStorage.setItem("Basket", JSON.stringify(updatedBasket));
  };

  return (
    <div>
      
      {storedBasket.length < 1 ? (
        
        <div>
          <div>
          <img src="/images/basket-empty.jpg" alt="basket-logo" />
          </div>
          Twój koszyk jest pusty
        </div>
      ) : (
        <div className="form-basket">
          {storedBasket.map((basketItem, index) => (
            <Row className="m-1 border-bottom p-1 pb-2" key={index}>
              <Col>{index + 1} </Col>
              <Col className="col-9 d-flex justify-items-left">
                {basketItem.description}<br/>
                {/* [{basketItem.paper} {basketItem.crop} {basketItem.frame}] */}
              </Col>
              <Col className="col-2 text-center">
                <div
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromBasket(index)}
                >
                  Usuń
                </div>
              </Col>
            </Row>

          ))}
        </div>
      )}
      {storedBasket.length > 0 && ( 
      <div>
      <Link to="/checkout">
          <button className="btn btn-large btn-success">Przejdź do kasy</button>
        </Link>
      </div>
      )}
    </div>
  );
};
export default Basket;
