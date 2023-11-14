import { Link } from "react-router-dom";

const Product = (props) => 
{
  const AddToBasket = (event) => 
  {
    event.preventDefault();
    console.log("Added to basket")
    fetch('https://localhost:7162/api/products/api/products/new',
    {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
        {
        "id": 12,
        "size": "big",
        "description": "nice",
        "price": props.product.categoryId,
        "deadline": 0,
        "isAvaliable": true,
        "photoHeight": 0,
        "photoWidth": 0,
        "categoryId": 1
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