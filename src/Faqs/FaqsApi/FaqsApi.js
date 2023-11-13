import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import Faq from '../Faq/Faq'

const FaqsApi = props => {

    const [data, setData] = useState([])
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://localhost:7162/api/faq`)
        const data = await response.json()
        setData(data)
      }
  
      fetchData()
    }, [])
    
  return (<div>
        FetchApi FAQs
        {data && data.map((item) => <Faq faq={item}/>)}
      </div>)
}

export default FaqsApi;