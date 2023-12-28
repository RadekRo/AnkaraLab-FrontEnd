import { useParams } from "react-router";
import products from "../TempData/ProductData";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
    // pobranie parametrów z adresu w przegladarce
const {categoryId} = useParams();
// symulacja endpointu na backendzie
const getProductByCategory = (id) => {
    return products.filter(product => product.categoryId === parseInt(id));
};
// symulacja fetcha
const filteredProducts = getProductByCategory(categoryId);


    return (
      <div>
        <Link to = "/" className="btn btn-sn btn-info p-1"> HomePage </Link>
        <h1>Products</h1>
        {filteredProducts.map(product =>(
         <div>{product.name}</div>
        ))}
      </div>
    
    )
    };
    
    export default Products;