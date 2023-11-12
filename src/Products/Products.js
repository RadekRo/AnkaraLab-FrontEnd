import ProductsAPI from './ProductsAPI/ProductsAPI'
import { useParams } from 'react-router-dom';
const Products = () => {
  const { categoryId } = useParams();
  return (  <div>
     Products:
     <ProductsAPI categoryId={categoryId} />
    </div>
  );
};
  
  export default Products;
