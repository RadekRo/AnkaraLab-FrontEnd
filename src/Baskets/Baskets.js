import BasketsApi from './BasketsApi/BasketsApi';
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