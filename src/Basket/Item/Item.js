import React from 'react'
import "./Basket.css";

const Basket = (props) => (
  <div>
  <div>
    <h1></h1>
  </div>
<div className="default">Id koszyka: {props.basket.id}</div>
<div className="default">Id klienta: {props.basket.clientId}</div>
<div className="default">Id produktu: {props.basket.productId}</div>
<div className="default">Ilość: {props.basket.quantity}</div>
<div className="default">Id zamówienia: {props.basket.orderId}</div>
</div>
  )
  
  export default Basket