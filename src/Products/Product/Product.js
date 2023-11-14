import { Link } from "react-router-dom";

const Product = (props) => (
    <div>
      <div>
        <h1>Product:</h1>
      </div>
    <div>{props.product.categoryId}</div>
    <div>{props.product.name}</div>
    <div>{props.product.price}</div>
    <div>{props.product.description}</div>
    <div><button><Link to = {`../basket`}>Dodaj do koszyka</Link></button></div>
    </div>
  )
  
  export default Product;