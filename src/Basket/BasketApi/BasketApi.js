import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import Basket from '../Item/Item'

const BasketsApi = () => {

  const [data, setData] = useState([])
  const [basket, setProduct] = useState(null)
  const { id } = useParams() 

  useEffect(() => {
    async function fetchData() { 
        const response = await fetch(`https://localhost:7162/api/basket/`)
        const data = await response.json()
        setData(data)
    }

    fetchData()
  }, [id])

  return (
    <div>
      <h1>Koszyk</h1>
      {id ? (
        basket ? (
          <Basket basket={basket} />
        ) : (
          <p>Loading...</p>
        )
      ) : (
        data.map((item) => (
          <Basket key={item.id} basket={item} />
        ))
      )}
    </div>
  );
}
export default BasketsApi;