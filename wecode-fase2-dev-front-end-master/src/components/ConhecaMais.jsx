import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import './conhecaMais.scss'
const ConhecaMais = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    

    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    var settingsDesktop = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        centerMode: false,
        centerPadding: '30px',
        slidesToShow: 3,
        slidesToScroll: 1,

    };
    return (
        <div className='conhecaMaisPage'>
            <div className='titleConhecaMaisPage'>
                <h3>Conheça Mais</h3>
                <p>Fique por dentro de tudo que acontece na Bebecê.</p>
            </div>

            <Slider {...(isMobile ? settings : settingsDesktop)}>
                <div className='slider'>
                    <div className='slider-content'>
                        <img src={isMobile ? "/static/images/ConhecaMais/Frame 83 1.png" :"/static/images/ConhecaMais/desktop/banner1.png"} alt="" />
                        <h2>NOVO LOGO, MESMA ESSÊNCIA.</h2>
                        <p>Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!</p>
                        <a href="">Saiba Mais!</a>
                    </div>
                </div>
                <div className='slider'>
                    <div className='slider-content'>
                        <img src={isMobile ? "/static/images/ConhecaMais/Frame 83.png" : "/static/images/ConhecaMais/desktop/banner2.png"} alt="" />
                        <h2>É AMANHÃ</h2>
                        <p>SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️</p>
                        <a href="">Saiba Mais!</a>
                    </div>
                </div>
                <div className='slider'>
                    <div className='slider-content'>
                        <img src={isMobile ? "/static/images/ConhecaMais/image 5.png" : "/static/images/ConhecaMais/desktop/banner3.png"} alt="" />
                        <h2>DESCUBRA O GLAMOUR EM CADA PASSO.</h2>
                        <p>Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨</p>
                        <a href="">Saiba Mais!</a>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default ConhecaMais