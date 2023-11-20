import BasketApi from './BasketApi/BasketApi';

const Basket = props => {
  console.log("Basket.js: " + props.clientId)
  return (  <div>
     Koszyk:
     <BasketApi clientId={props.clientId} />
    </div>
  );
};
  
  export default Basket;