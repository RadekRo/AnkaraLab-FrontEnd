import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
//import './BasketApi.css'
import { Container, Row, Col } from 'react-bootstrap';

const BasketsApi = (props) => {
  const [data, setData] = useState([]);
  const fetchBasketData = async () => {
    try {
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
    }, [props.clientId]);

  return (
      <Container>
      {data.length > 0 ? (
        data.map((item) => (
          <Item key={item.id} item={item} />
        ))
      ) : (
        <Row>
          <Col>Twój koszyk jest pusty ziomuś!</Col>
        </Row>
      )}
      </Container>
  );
}
export default BasketsApi;