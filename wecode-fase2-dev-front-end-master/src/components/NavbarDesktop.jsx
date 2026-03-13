import React, { useEffect, useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md"
import '../components/navbarDesktop.scss'
const NavbarDesktop = ({countingProducts, toggleSidebar}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    
    
    
    return (
        <header className='navbar' 
        style={showSidebar ? {height: '373px', position: 'absolute', zIndex: '999', background: 'white', width: '100%'} : {}}>
           
            <nav className='navbar-white'>
                <div className='left'>
                    <div className='logo-name'>
                        <img src='/static/images/principais/logo-preta.png' alt="logo" />
                    </div>
                    <div className='links'>
                        <div className="titulo-container produtos-menu"
                        onMouseEnter={() => setShowSidebar(true)}
                        onMouseLeave={() => setShowSidebar(false)}>
                            <p>Produtos</p>

                            {showSidebar && (
                            <div className="mega-menu">
                                <div className="menu-left">
                                    <a href="#">Sapatos</a>
                                    <a href="#">Scarpins</a>
                                    <a href="#">Sandálias</a>
                                    <a href="#">Botas</a>
                                </div>

                                <div className="menu-image">
                                    <img src="/static/images/categorias/banner-botas.png" alt="produto" />
                                </div>
                            </div>
                            )}
                        </div>
                        <div className='titulo-container'>
                            <p>Lançamentos</p>
                        </div>
                        <div className='titulo-container'>
                            <p id='special'>Outlet</p>
                        </div>
                    </div>
                </div>
 
                <div className='icones-right'>
                    <div className='icons-content'>
                        <i><MdIcons.MdPerson color='black' /></i>
                        <i className='shopping-cart-icon'>
                            <AiIcons.AiOutlineShopping color='black' /> <span id='counting-shopcart'>{countingProducts}</span>
                        </i>
                    </div>
                </div> 
            </nav>
        </header>
    )
}

export default NavbarDesktop