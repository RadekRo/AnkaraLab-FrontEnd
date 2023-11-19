import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'

const BasketsApi = (props) => {
  const [data, setData] = useState([]);

  const fetchBasketData = async () => {
    try {
      const response = await fetch(`https://localhost:7162/api/basket/${props.clientId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch basket data');
      }
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching basket data:', error);
      setData([]);
    }
  };

  useEffect(() => { fetchBasketData(); });

  return (
    <div>
      <h1>Koszyk</h1>
      {data.length > 0 ? (
        data.map((item) => (
          <Item key={item.id} basket={item} />
        ))
      ) : (
        <p>Twój koszyk jest pusty ziomuś!</p>
      )}
    </div>
  );
}
export default BasketsApi;