import React from 'react'
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function ProductDetailpage() {
 const [data,setData] = useState({})
 const {id} =useParams()
 
 useEffect(() =>{
    const fetchData = async()=>{
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const apidata = await response.json()
        setData(apidata)
    }
    fetchData()
 },[id])
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <img  src={data.images} class="w-100" />
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center text-center">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
