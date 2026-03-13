import React, { useState, useEffect } from 'react'
import NavbarComponent from '../components/Navbar'
import NavbarDesktopComponent from '../components/NavbarDesktop'
import SidebarComponent from '../components/Sidebar'
import TopPageComponent from '../components/TopPage'
import CategoriesComponent from '../components/Categories'
import LancamentosComponent from '../components/Lancamentos'
import ConhecaMaisComponent from '../components/ConhecaMais'
import BottomPageComponent from '../components/BottomPage'
import '../App.scss'
export const Main = () => {
    const [countingProducts, setCountingProducts] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);

    const ToggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    const updateCount = () => {
        setCountingProducts(countingProducts + 1);
    };

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
        <>
            <div>
                {showSidebar && (

                    <SidebarComponent showSidebar={ToggleSidebar} />
                )}
                {isMobile ? (
                    <NavbarComponent countingProducts={countingProducts} toggleSidebar={ToggleSidebar} />
                ) : (
                    <NavbarDesktopComponent countingProducts={countingProducts}  />
                )}
                <TopPageComponent />
                <CategoriesComponent />
                {isMobile ? (
                    <>
                        <img id='bannerPequeno' src="/static/images/principais/banner-pequeno.png" alt="" />
                        <img id='bannerGrande' src="/static/images/principais/banner-grande.png" alt="" />
                    </>
                ) : (
                    <div className='divBannersGrandes'>
                        <img id='banner1' src="/static/images/navegacao-desktop/image 6.png" alt="" />
                        <img id='banner2' src="/static/images/navegacao-desktop/banner-grande.png" alt="" />
                    </div>
                )}
                <LancamentosComponent updateCount={updateCount} />
                <ConhecaMaisComponent />
                <BottomPageComponent />
            </div>
        </>
    )
}
