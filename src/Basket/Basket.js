import BasketApi from './BasketApi/BasketApi';
import { Link } from "react-router-dom";

const Basket = props => {
  return (  <div>
     <BasketApi clientId={props.clientId} />
    </div>
  );
};
  
  export default Basket;