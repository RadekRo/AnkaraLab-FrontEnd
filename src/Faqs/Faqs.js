import FaqsApi from './FaqsApi/FaqsApi';

const Faqs = props => {
  console.log(props.clientId)
  return (  <div>
     Faqs:
     <FaqsApi />
    </div>
  );
};
  
  export default Faqs;