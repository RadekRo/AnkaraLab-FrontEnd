import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import Product from '../Product/Product'

const CategoryApi = () => {

  const [data, setData] = useState([])
  const [product, setProduct] = useState(null)
  const { categoryId } = useParams()

  useEffect(() => {
    async function fetchData() {
      if(!categoryId) {
        const response = await fetch(`https://localhost:7162/api/products/byCategory`)
        const data = await response.json()
        setData(data)
    } else {
        const response = await fetch(`https://localhost:7162/api/products/byCategory/${categoryId}`)
        const data = await response.json()
        setProduct(data)
      }
    }

    fetchData()
  }, [categoryId])
  console.log("dupa")
  return (
    <div>
      <h1>CategoryApi</h1>
      {categoryId ? (
        product ? (
          <Product product={product} />
          
        ) : (
          <p>Loading...</p>
        )
      ) : (
        data.map((item) => (
          <Product key={item.categoryId} product={item} />
        ))
      )}
    </div>
  );
}
export default CategoryApi;