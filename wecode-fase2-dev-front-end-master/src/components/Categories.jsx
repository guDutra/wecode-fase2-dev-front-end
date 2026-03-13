import React, {useEffect, useState} from 'react'
import './categories.scss'
const Categories = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='categoriesPage'>
            <h2 >Categorias</h2>
            <div className='categoriesPage-slider'>
                <div className='productDiv'>
                    <img src={isMobile ? "/static/images/categorias/banner-botas.png" 
                        : "/static/images/categorias/desktop/banner-botas.png" } alt="" />
                    <p>Botas</p>
                </div>
                <div className='productDiv'>
                    <img src={isMobile ? "/static/images/categorias/banner-sandalias.png" 
                        : "/static/images/categorias/desktop/banner-sapatilha.png" } alt="" />
                    <p>Sandalias</p>
                </div>
                <div className='productDiv'>
                    <img src={isMobile ? "/static/images/categorias/banner-sapatilhas.png" 
                        : "/static/images/categorias/desktop/banner-sapatilha2.png"} alt="" />
                    <p>Sapatilhas</p>
                </div>
                <div className='productDiv'>
                    <img src={isMobile ? "/static/images/categorias/banner-scarpins.png" 
                        : "/static/images/categorias/desktop/banner-sapatilha3.png"} alt="" />
                    <p>Scarpins</p>
                </div>
            </div>

        </div >

    )
}

export default Categories