import React, {useState, useEffect} from 'react'
import Product from '../Product/Product'

const ProductsAPI = props => {

    const [data, setData] = useState([])
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://localhost:7162/api/products/byCategory/${props.categoryId}`)
        const data = await response.json()
        setData(data)
      }
  
      fetchData()
    }, [props.categoryId])
    console.log("ProductsAPI: " + props.clientId)
  return (<div>
        FetchApi
        {data && data.map((item) => <Product product={item} key={item.id} clientId={props.clientId} />)}
      </div>)
}

export default ProductsAPI;