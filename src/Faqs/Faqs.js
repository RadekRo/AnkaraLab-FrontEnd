import FaqsApi from './FaqsApi/FaqsApi';
import { useParams } from 'react-router-dom';

const Faqs = () => {
  const { } = useParams();
  return (  <div>
     <FaqsApi />
    </div>
  );
};
  
  export default Faqs;