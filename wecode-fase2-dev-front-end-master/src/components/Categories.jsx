import React from 'react'
import './categories.scss'
const Categories = () => {

    return (
        <div className='categoriesPage'>
            <h2 >Categorias</h2>
            <div className='categoriesPage-slider'>
                <div className='productDiv'>
                    <img src="/static/images/categorias/banner-botas.png" alt="" />
                    <p>Botas</p>
                </div>
                <div className='productDiv'>
                    <img src="/static/images/categorias/banner-sandalias.png" alt="" />
                    <p>Sandalias</p>
                </div>
                <div className='productDiv'>
                    <img src="/static/images/categorias/banner-sapatilhas.png" alt="" />
                    <p>Sapatilhas</p>
                </div>
                <div className='productDiv'>
                    <img src="/static/images/categorias/banner-scarpins.png" alt="" />
                    <p>Scarpins</p>
                </div>
            </div>

        </div >

    )
}

export default Categories