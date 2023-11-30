import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from '../Product/Product';

const ProductsAPI = props => {

    const [data, setData] = useState([])
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://localhost:7162/api/products/byCategory/${props.categoryId}`)
        const data = await response.json()
        setData(data)
      }
  
      fetchData()
    }, [props.categoryId])
    let theme = "";
    switch (props.categoryId) {
      case '1':
        theme = "Odbitki fotograficzne";
        break;
      case '2':
        theme = "Wydruki wielkoformatowe";
        break;
      case '3':
        theme = "Fotogadżety";
        break;
      case '6':
        theme = "Wydruki magnetyczne";
        break;
      case '5':
        theme = "Fotoobrazy (canvas)";
        break;
      default:
        theme = "Kategoria nieznana";
        break;
    }
  return (
      <Container>
        <Row>
          <Col className="fs-2 bg-success text-white pt-1 pb-1 rounded">{theme}</Col>
        </Row>
        <Row className="border-bottom pt-2 pb-2">
          <Col>Kategorie &rarr;</Col>
          <Col><Link className="text-decoration-none" to = {`../products/1`}>Odbitki fotograficzne</Link></Col>
          <Col><Link className="text-decoration-none" to = {`../products/2`}>Wielki format</Link></Col>
          <Col><Link className="text-decoration-none" to = {`../products/5`}>Fotoobrazy</Link></Col>
          <Col><Link className="text-decoration-none" to = {`../products/6`}>Wydruki magnetyczne</Link></Col>
          <Col><Link className="text-decoration-none" to = {`../products/3`}>Fotogadżety</Link></Col>
        </Row>
        {/* {data && data.map((item) => <Product product={item} key={item.id} clientId={props.clientId} />)} */}
        <Form>
          <Form.Group as={Col} xs={12} md={6}>
            <Form.Label>Wybierz format odbitki:</Form.Label>
            <Form.Select name="selectedSize" aria-label="Default select example">
              {data && data.map((item, index) => (
                <option key={index} value={item.size}>
                  {item.size}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>)
}

export default ProductsAPI;