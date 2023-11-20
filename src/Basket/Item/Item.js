import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

const Item = (props) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isComponentMounted = true;

    const fetchItemData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://localhost:7162/api/products/${props.item.productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const newData = await response.json();
        if (isComponentMounted) {
          setProduct(newData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
        if (isComponentMounted) {
          setError('Error fetching product data');
          setLoading(false);
        }
      }
    };

    if (props.item.productId !== null) {
      fetchItemData();
    } else {
      setLoading(false);
      setProduct(null);
    }

    return () => {
      isComponentMounted = false;
    };
  }, [props.item.productId]);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  if (product === null) {
    return null; 
  }

  return (
  <Row>
    <Col xs={3}>{product.description}</Col>
    <Col xs={3}>{product.price} PLN</Col>
    <Col xs={3}>{props.item.quantity}</Col>
    <Col xs={3}>{product.price * props.item.quantity} PLN</Col>
  </Row>
  );
};

export default Item;
