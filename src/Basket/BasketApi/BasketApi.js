import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
import './BasketApi.css'

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
  
  useEffect(() => { fetchBasketData(); }, []);

  return (
    <div className="BasketApi">
      <table>
      <thead>
          <tr>
            <th></th>
            <th></th>
            <th>cena</th>
            <th>sztuk</th>
            <th>wartość</th>
          </tr>
      </thead>
      <tbody>
      {data.length > 0 ? (
        data.map((item) => (
          <Item key={item.id} item={item} />
        ))
      ) : (
        <tr><td>Twój koszyk jest pusty ziomuś!</td></tr>
      )}
      </tbody>
    </table>
    </div>
  );
}
export default BasketsApi;