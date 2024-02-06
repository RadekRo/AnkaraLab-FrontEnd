import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Form } from 'react-bootstrap';

//const shippingAddress = () => {
    //const fetchedData = [data, setData] = useState();
//}
const Checkout = () => {
    const storedBasket = JSON.parse(sessionStorage.getItem("Basket"));
    const userData = JSON.parse(localStorage.getItem("User"));
    const [formData, setFormData] = useState({
      street: "",
      localNumber: "",
      city:"",
      zipCode: ""
    });

    const handleChange = ({ target: { name, value } }) => {
      setFormData({...formData, [name]: value });
    };

    const handleSubmit = (event) => {
    
      event.preventDefault();
      console.log(formData)
      };

      // fetch('https://localhost:7162/api/client/addAddress', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      // .then(response => {
      //   if (response.ok) {
      //     return response.json();

    const renderAddressForm = () => (
        <div className="Register border rounded shadow bg-light mt-4 p-3">
            <form className='none' onSubmit={handleSubmit}>
              <h3>Podaj adres do wysyłki</h3>
              <div>
                <Form.Group controlId="Street" className='mb-2'>
                  <Form.Label>Ulica:</Form.Label>
                  <Form.Control 
                    type="text"
                    name="street" 
                    placeholder="Podaj nazwę ulicy" 
                    onChange={handleChange}
                    required />
                </Form.Group>
                <Form.Group controlId="LocalNumber" className='mb-2'>
                  <Form.Label>Numer lokalu:</Form.Label>
                  <Form.Control 
                    type="text"
                    name="localNumber" 
                    placeholder="Podaj numer lokalu" 
                    onChange={handleChange}
                    required />
                </Form.Group>
              </div>
              <div>
                <Form.Group controlId="City" className='mb-2'>
                  <Form.Label>Miasto:</Form.Label>
                  <Form.Control 
                    type="text"
                    name="city" 
                    placeholder="Podaj nazwę miejscowości" 
                    onChange={handleChange}
                    required />
                  </Form.Group>
              </div>
              <div>
                <Form.Group controlId="ZipCode" className='mb-2'>
                  <Form.Label>Kod pocztowy:</Form.Label>
                  <Form.Control 
                    type="text"
                    name="zipCode" 
                    placeholder="Podaj kod pocztowy" 
                    onChange={handleChange}
                    required />
                  </Form.Group>
              </div>
              <button className="btn btn-success mt-4" type="submit">Przejdź do płatności</button>
            </form>
        </div>
      );     

return(
    <div>
        <p className="justify-items-center">Lista twoich zakupów kolego:</p> 
        <div className="form-basket">
          {storedBasket.map((basketItem, index) => (
            <Row className="m-1 border-bottom p-1 pb-2" key={index}>
              <Col>{index + 1} </Col>
              <Col className="col-9 d-flex justify-items-center">
                {basketItem.size}<br/>
                {/* [{basketItem.paper} {basketItem.crop} {basketItem.frame}] */}
              </Col>
            </Row>
            ))}
        </div>
        {console.log(userData)}
        <div>
        {renderAddressForm()}
        </div>
    </div>
    
)
}

export default Checkout;