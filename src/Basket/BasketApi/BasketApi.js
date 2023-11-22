import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
//import './BasketApi.css'
import { Container, Row, Col } from 'react-bootstrap';

const BasketsApi = (props) => {
  const [data, setData] = useState([]);

  const fetchBasketData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await fetch(`https://localhost:7162/api/basket/${props.clientId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch basket data');
      }
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching basket data:', error);
      setData([]);
    }
  };
  
  useEffect(() => {
    if (props.clientId !== null) {
      fetchBasketData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col xs={6}></Col>
          <Col xs={2} className="text-end fw-bold">cena</Col>
          <Col xs={1} className="text-end fw-bold">sztuk</Col>
          <Col xs={2} className="text-end fw-bold">wartość</Col>
        </Row>
      { data.length > 0 ? (
        data.map((item, index) => (
          <Item key={item.id} item={item} index={index + 1} />
        ))
      ) : (
        <Row>
          <Col>Twój koszyk jest pusty!</Col>
        </Row>
      )}
      </Container>
  );
}
export default BasketsApi;