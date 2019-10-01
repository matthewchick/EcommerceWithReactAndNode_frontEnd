//Home Component
import React, {useState, useEffect, useCallback} from 'react';
import Layout from './Layout';
import {getProducts} from './apiCore';
import Card from './Card';

const Home = () => {
    
    const [productBySell, setProductsBySell] = useState([])
    const [productByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)
    
    const loadProductBySell = useCallback(() => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductsBySell(data.products)
            }
        })
    },[setError, setProductsBySell]);
    
    const loadProductByArrival = useCallback(() => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductsByArrival(data.products)  //data is an object, map works with array
            }
        })
    },[setError, setProductsByArrival])

    useEffect(() => {
        loadProductByArrival();
        loadProductBySell();
    }, [loadProductByArrival], [loadProductBySell]);

    return (
        <Layout title="Home Page" description="Node React E-commerce App" className="container-fluid">
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productByArrival.map((product, i)=>(
                    <Card key={i} product={product} />
                ))}
            </div>
            
            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                {productBySell.map((product, i)=>(
                    <Card key={i} product={product} />
                ))}
            </div>
        </Layout>
    );
};


export default Home;