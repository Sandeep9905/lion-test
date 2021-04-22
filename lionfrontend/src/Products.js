import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import { makeCall } from './apiservice/apiCall';
export default function Products() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        makeCall('get', 'http://localhost:5000/allproducts')
            .then(res => {
                setData(res.data);
                setLoading(false)
            }).catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <>
            <div style={{ backgroundColor: '#f5f5f0' }} >
                {loading ? <div><h1>Loading....</h1></div> :
                    <div className="container">
                        <h1 className="product-header">Mobiles</h1>
                        <div className="row">
                            {data.map(res => {
                                return (
                                    <div className="col-md-6">
                                        <ProductCard _id={res._id} pimage={res.pimage} pname={res.pname} pcost={res.pcost} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
        </>
    )
}