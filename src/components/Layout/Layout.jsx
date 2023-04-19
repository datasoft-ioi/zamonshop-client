import React from 'react';
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import { parsePath } from 'react-router-dom';
import products from '../../assets/data/products';
import { useState } from 'react';
function Layout() {
    const [productsData, setProductsData] = useState(products)
    const [productUrl , setProductUrl] = useState()

    return ( 
        <div className='mdef'>
        <Header setProductsData={setProductsData} productsData={productsData} setProductUrl={setProductUrl} productUrl={productUrl}/>
        <div>
            <Routers Route={parsePath} productUrl={productUrl}/>
        </div>
        <Footer/>
        </div>
    );
}

export default Layout;