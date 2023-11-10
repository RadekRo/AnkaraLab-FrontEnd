import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";

const CategoryApi = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://localhost:7162/api/category/categoryId:int')
        const data = await response.json()
        setData(data)
      }
      fetchData()
    }, [])
  return (<div>
        <h1>CategoryApi o api po kategorii</h1>
        {data && data.map((item) => <Product product={item} key={item.id} />)}
      </div>)
    }
  
  export default CategoryApi;
  