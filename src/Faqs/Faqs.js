import FaqsApi from './FaqsApi/FaqsApi';
import { useParams } from 'react-router-dom';

const Faqs = props => {
  console.log(props.clientId)
  const { } = useParams();
  return (  <div>
     Faqs:
     <FaqsApi />
    </div>
  );
};
  
  export default Faqs;