import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function FetchProducts() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async()=> {
            const response = await fetch("https://dummyjson.com/products")
            const apidata = await response.json()
            setData(apidata.products)
        }
        fetchData()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                { 
                  data.map((w)=>{
                    return(
                    <div className="col-lg-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <NavLink to={`/detail/${w.id}`}><img src={w.images[0]} className="card-img-top" alt="..." /></NavLink>
                            <div className="card-body">
                                <h5 className="card-title">{w.title}</h5>
                                <p className="card-text">{w.description}</p>
                                <a href="#" className="btn btn-primary">{w.price}</a>
                            </div>
                        </div>
                    </div>
                    )
                })
                }
                </div>
            </div>
        </div>
    )
}

// this page is used to fetch the data from the api and display it in the card format usind url .

