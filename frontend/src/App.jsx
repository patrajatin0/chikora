import { useEffect, useState } from 'react'
import Product from './components/Product'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await fetch("http://localhost:8917/api/product")
        const json = await data.json()
        console.log(json.map((c) => (c.productName)));
        setData(json)
      } catch (error) {
        console.error("Error fetching data:", error);
      }


    }
    fetchdata()
  }, [])

  return (
    <>
      <div >
        <div className='flex flex-wrap'>{data.map((product, index) => (<div ><Product key={index} productData={product} /></div>))}</div>
      </div>

    </>
  )
}

export default App
