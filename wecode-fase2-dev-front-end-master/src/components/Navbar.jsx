import React, { useEffect, useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md"
import '../components/navbar.scss'
const Navbar = ({countingProducts, toggleSidebar}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState(false);
    

    useEffect(() => {
        const handleScroll = () => {
            const isNavbarBackground = window.scrollY > 0;
            setNavbarBackground(isNavbarBackground);

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className='navbar'>

                <nav className={`${navbarBackground ? 'navbar-white' : ''}`}>
                    <div className='icons-left'>
                        <i onClick={() => toggleSidebar()}><FaIcons.FaBars color={`${navbarBackground ? 'black' : 'white'}`} /></i>
                        <i><FaIcons.FaSearch color={`${navbarBackground ? 'black' : 'white'}`} /> </i>
                    </div>
                    <div className='logo-name'>
                        <img src={`${navbarBackground ? '/static/images/principais/logo-preta.png' : '/static/images/principais/Logo.png'}`} alt="logo" />
                    </div>
                    <div className='icons-right'>
                        <i><MdIcons.MdPerson color={`${navbarBackground ? 'black' : 'white'}`} /></i>
                        <i className='shopping-cart-icon'>
                            <AiIcons.AiOutlineShopping color={`${navbarBackground ? 'black' : 'white'}`} /> <span id='counting-shopcart'>{countingProducts}</span>
                        </i>
                    </div>
                </nav>
            </header>
    )
}

export default Navbar