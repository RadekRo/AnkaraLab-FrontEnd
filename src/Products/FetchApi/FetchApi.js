import React, {useState, useEffect} from 'react'
import Product from '../Product/Product'

const FetchApi = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://localhost:7162/api/products')
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [])

return (<div>
      <h1>FetchApi</h1>
      {data && data.map((item) => <Product product={item} key={item.id} />)}

    </div>)
  }

export default FetchApi;
