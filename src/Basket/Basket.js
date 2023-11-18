import BasketApi from './BasketApi/BasketApi';
import { useParams } from 'react-router-dom';

const Basket = props => {
  const { } = useParams();
  console.log("Basket: " + props.clientId)
  return (  <div>
     Koszyk:
     <BasketApi />
    </div>
  );
};
  
  export default Basket;