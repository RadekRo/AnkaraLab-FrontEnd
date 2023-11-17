import BasketsApi from './BasketApi/BasketsApi';
import { useParams } from 'react-router-dom';

const Baskets = () => {
  const { } = useParams();
  return (  <div>
     Koszyk:
     <BasketsApi />
    </div>
  );
};
  
  export default Baskets;