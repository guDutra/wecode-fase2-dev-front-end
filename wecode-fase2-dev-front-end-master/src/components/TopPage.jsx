import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/topPage.scss'
const TopPage = () => {

    var settings = {
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    display: 'flex',
                    paddingBottom: '40px',
                    justifyContent: 'space-around'
                }}
            >
                <button className='btnStart'>
                    Conheça Agora
                </button>
                <ul className='dots' style={{ marginLeft: '0px', marginRight: '0px' }}> {dots} </ul>

            </div>
        )


    };
    return (

            <div className='topPage'>

                <Slider {...settings}>
                    <div className='image-slider'>
                        <img src="/static/images/principais/banner-principal-1.png" alt="" />
                    </div>
                    <div>
                        <img src="/static/images/principais/banner-principal-2.png" alt="" />
                    </div>
                    <div>
                        <img src="/static/images/principais/banner-principal-3.png" alt="" />
                    </div>
                </Slider>

            </div>
    );
    ;
}

export default TopPage