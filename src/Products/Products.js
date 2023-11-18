import ProductsAPI from './ProductsAPI/ProductsAPI'
import { useParams } from 'react-router-dom';
const Products = props => {
  const { categoryId } = useParams();
  console.log("Products.js: " + props.clientId)
  return (  <div>
     Products:
     <ProductsAPI categoryId={categoryId} clientId={props.clientId} />
    </div>
  );
};
  
  export default Products;
