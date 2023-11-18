import { Link } from "react-router-dom";

const Product = props => 
{
  const AddToBasket = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://localhost:7162/api/basket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ClientId: props.clientId,
          ProductId: props.product.productId,
          Quantity: 1,
          OrderId: 0,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add the product to the basket');
      }
  
      console.log('Added to basket successfully');
      // Additional logic if needed after successful addition to the basket
    } catch (error) {
      console.error('Error adding to basket:', error.message);
      // Show a user-friendly message or retry the request
      // Handle the error gracefully
    }
  };
  
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