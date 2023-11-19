import BasketApi from './BasketApi/BasketApi';

const Basket = props => {
  return (  <div>
     Koszyk:
     <BasketApi clientId={props.clientId} />
    </div>
  );
};
  
  export default Basket;