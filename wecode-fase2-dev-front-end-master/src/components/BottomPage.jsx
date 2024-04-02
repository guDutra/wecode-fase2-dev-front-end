import React from 'react'
import './bottomPage.scss'
const BottomPage = () => {
    return (
        <footer className='bottomPage'>

            <img src="/static/images/principais/logo-grande.png" alt="" />
            <div className='apps-logo-container'>
                <div className='app-logo-item'>
                    <img src="/static/images/logoApps/instagram.png" alt="" />
                </div>
                <div className='app-logo-item'>
                    <img src="/static/images/logoApps/facebook.png" alt="" />
                </div>
                <div className='app-logo-item'>
                    <img src="/static/images/logoApps/pinterest.png" alt="" />
                </div>
                <div className='app-logo-item'>
                    <img src="/static/images/logoApps/twitter.png" alt="" />
                </div>
                <div className='app-logo-item'>
                    <img src="/static/images/logoApps/tik-tok.png" alt="" />
                </div>
            </div>
            <div className='links'>
                <div className='link-content'>
                    <p>Sobre a Empresa</p>
                    <a href="">Quem somos</a>
                    <a href="">Fale conosco</a>
                </div>
                <div className='link-content'>
                    <p>Politicas</p>
                    <a href="">Política de Privacidade</a>
                    <a href="">Termos de Uso</a>
                    <a href="">Política de Entrega</a>
                    <a href="">Política de Cupom e Descontos</a>
                </div>
            </div>


        </footer>
    )
}

export default BottomPage