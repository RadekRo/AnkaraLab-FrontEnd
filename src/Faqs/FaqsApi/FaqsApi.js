import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import Faq from '../Faq/Faq'

const FaqsApi = () => {

  const [data, setData] = useState([])
  const [faq, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      if(!id) {
        const response = await fetch(`https://localhost:7162/api/faq/`)
        const data = await response.json()
        setData(data)
    } else {
        const response = await fetch(`https://localhost:7162/api/faq/${id}`)
        const data = await response.json()
        setProduct(data)
      }
    }

    fetchData()
  }, [id])

  return (
    <div>
      <h1>Frequently asked questions</h1>
      {id ? (
        faq ? (
          <Faq faq={faq} />
        ) : (
          <p>Loading...</p>
        )
      ) : (
        data.map((item) => (
          <Faq key={item.id} faq={item} />
        ))
      )}
    </div>
  );
}
export default FaqsApi;