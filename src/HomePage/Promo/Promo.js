import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Promo = () => {

    const [data, setData] = useState([])
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://localhost:7162/api/products/api/products/random`)
        const data = await response.json()
        setData(data)
      }
  
      fetchData()
    })


return (
    <div>
        <h2>Promo</h2>
        <div>Opis: {data.description} </div>
        <div>Cena: {data.price}</div>
    </div>
)}

export default Promo;