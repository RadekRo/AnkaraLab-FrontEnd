import { Link } from "react-router-dom";

const Product = props => 
{
  const AddToBasket = (event) => 
  {
    event.preventDefault();
    console.log("Added to basket")
    fetch('https://localhost:7162/api/basket',
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
        {
        "id": props.ProductId,
        "ClientId": 3,
        "ProductId": props.product.categoryId,
        "Quantity": 5,
        "OrderId": props.product.name
      })
    })
    
  }
  return (
    <div>
      <div>
        <h1>Product:</h1>
      </div>
    <div>{props.product.categoryId}</div>
    <div>{props.product.name}</div>
    <div>{props.product.price}</div>
    <div>{props.product.description}</div>
    <div><button onClick={AddToBasket}><Link to = {`../basket`}>Dodaj do koszyka</Link></button></div>
    </div>
  )
}
  export default Product;