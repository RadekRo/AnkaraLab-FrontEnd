const Product = (props) => (
    <div>
    <div>
      <h1>Product:</h1>
    </div>
    <div>{props.product.id}</div>
    <div>{props.product.name}</div>
    <div>{props.product.price}</div>
    <div>{props.product.description}</div>
    </div>
  )
  
  export default Product;