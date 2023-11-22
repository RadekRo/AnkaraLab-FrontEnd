import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = props => 
{
  const AddToBasket = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://localhost:7162/api/basket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ClientId: props.clientId,
          ProductId: props.product.id,
          Quantity: 2,
          OrderId: 0,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add the product to the basket');
      }
  
      console.log('Added to basket successfully');
    } catch (error) {
      console.error('Error adding to basket:', error.message);
    }
  };
  
  return (
    <Row className="border-top pb-3 pt-3">
      <Col>
        {props.product.description}
      </Col>
      <Col>
        {props.product.price} PLN/szt.
      </Col>
      <Col>
        <button onClick={AddToBasket} className="btn btn-sm btn-success"><Link to = {`../basket`} className="text-white text-decoration-none">Dodaj do koszyka</Link></button>
      </Col>
    </Row>
  )
}
  export default Product;