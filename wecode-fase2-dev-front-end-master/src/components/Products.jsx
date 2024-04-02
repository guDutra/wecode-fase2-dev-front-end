import React from 'react'
import { getProducts } from '../utils'
import { useEffect } from 'react'
import { useState } from 'react'
const Products = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        getProducts().then(res => {
            setData(res.Products);
            console.log(data);
        }).catch(error => {
            console.error('Erro ao carregar imagem', error);
        });
    }, []);
    return (
        <div>
            <h1>erfeferferf</h1>
            
        </div>
    )
}

export default Products