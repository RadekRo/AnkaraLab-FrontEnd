import React, {useState, useEffect } from 'react'
import { useParams  } from 'react-router-dom'
import Product from '../Product/Product'

const FetchApi = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [data , setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      if(!id) {
        const response = await fetch(`https://localhost:7162/api/products`)
        const data = await response.json()
        setData(data)
    } else {
        const response = await fetch(`https://localhost:7162/api/products/${id}`)
        const data = await response.json()
        setProduct(data)
      }
    }

    fetchData()
  }, [id])

  return (
    <div>
      <h1>FetchApi</h1>
      {id ? (
        product ? (
          <Product product={product} />
        ) : (
          <p>Loading...</p>
        )
      ) : (
        data.map((item) => (
          <Product key={item.id} product={item} />
        ))
      )}
    </div>
  );
}
export default FetchApi;
