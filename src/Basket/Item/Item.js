import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Item = props => 
{
    const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await fetch(`https://localhost:7162/api/products/${props.item.productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const newData = await response.json();
        setProduct(newData); 
      } catch (error) {
        console.error('Error fetching product data:', error);
        setProduct(null); 
      }
    };

    fetchItemData(); 
  }, [props.item.productId]);
    
  return (
    <tr>
      <td></td>
      <td>{product.description}</td>
      <td>{product.price} PLN</td>
      <td>{props.item.quantity}</td>
      <td>{product.price * props.item.quantity} PLN</td>
    </tr>
  )
};
  export default Item;
