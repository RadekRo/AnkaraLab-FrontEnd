import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
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
        {data && data.map((item) => <Product product={item} key={item.id} clientId={props.clientId} />)}
      </Container>)
}

export default ProductsAPI;