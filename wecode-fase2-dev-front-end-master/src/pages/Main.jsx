import React, { useState } from 'react'
import NavbarComponent from '../components/Navbar'
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
    return (
        <>
            <div>
                {showSidebar && (

                    <SidebarComponent showSidebar={ToggleSidebar} />
                )}
                <NavbarComponent countingProducts={countingProducts} toggleSidebar={ToggleSidebar} />
                <TopPageComponent />
                <CategoriesComponent />
                <img id='bannerPequeno' src="/static/images/principais/banner-pequeno.png" alt="" />
                <img id='bannerGrande' src="/static/images/principais/banner-grande.png" alt="" />
                <LancamentosComponent updateCount={updateCount} />
                <ConhecaMaisComponent />
                <BottomPageComponent />
            </div>
        </>
    )
}
