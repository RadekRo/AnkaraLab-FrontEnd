import React, {useState, useEffect} from 'react'
import Basket from '../Item/Item'

const BasketsApi = props => {

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() { 
        const response = await fetch(`https://localhost:7162/api/basket/${props.clientId}`)
        const data = await response.json()
        setData(data)
    }

    fetchData()
  }, [props.clientId])

  return (
    <div>
      <h1>Koszyk</h1>
      {data.length > 0 ? (
        data.map((item) => (
          <Basket key={item.id} basket={item} />
        ))
      ) : (
        <p>Twój koszyk jest pusty ziomuś!</p>
      )}
    </div>
  );
}
export default BasketsApi;