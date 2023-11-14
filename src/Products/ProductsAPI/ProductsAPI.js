import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
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
    }, [])
    
  return (<div>
        FetchApi
        {data && data.map((item) => <Product product={item} key={item.id} />)}
      </div>)
}

export default ProductsAPI;