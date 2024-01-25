import { useState } from "react";
import { Row, Col } from "react-bootstrap";

//const shippingAddress = () => {
    //const fetchedData = [data, setData] = useState();
//}
const Checkout = () => {
    const storedBasket = JSON.parse(sessionStorage.getItem("Basket"));
    const userData = JSON.parse(localStorage.getItem("User"));
return(
    <div>
        <p className="justify-items-center">Lista twoich zakupów kolego:</p> 
        <div className="form-basket">
          {storedBasket.map((basketItem, index) => (
            <Row className="m-1 border-bottom p-1 pb-2" key={index}>
              <Col>{index + 1} </Col>
              <Col className="col-9 d-flex justify-items-center">
                {basketItem.size}<br/>
                [{basketItem.paper} {basketItem.crop} {basketItem.frame}]
              </Col>
            </Row>
            ))}
        </div>
        {console.log(userData)}
        Tu będą dane do wysyłki+++
        Tu się też coś wstawi
    </div>
)
}

export default Checkout;