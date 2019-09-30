//Home Component
import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import {getProducts} from './apiCore';

const Home = () => {
    
    const [productBySell, setProductsBySell] = useState([])
    const [productByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)

    const loadProductBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductsBySell(data)
            }
        })
    }

    const loadProductByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductsByArrival(data)
            }
        })
    }

    useEffect(() => {
        loadProductByArrival()
        loadProductBySell()
    }, [])

    return (
        <Layout title="Home Page" description="Node React E-commerce App">
            {JSON.stringify(productByArrival)}
            <hr />
            {JSON.stringify(productBySell)}
        </Layout>
    );
};

export default Home;