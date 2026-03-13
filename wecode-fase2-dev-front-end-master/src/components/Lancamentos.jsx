import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { getProducts, getProductsDesktop } from '../utils';
import './lancamentos.scss'
const Lancamentos = ({ updateCount }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [products, setProducts] = useState(null);
    const [showAlertAdd, setShowAlertAdd] = useState(false);
    const [showAlertAlreadyAdd, setShowAlertAlreadyAdd] = useState(false);
    useEffect(() => {

        if(isMobile) {
            getProducts().then(res => {
                setProducts(res);
            }).catch(error => console.log("Erro ao carregar produtos", error));
        } else {
            getProductsDesktop().then(res => {
                setProducts(res);
            }).catch(error => console.log("Erro ao carregar produtos", error));
        }
    }, []);

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1.5,
        swipeToSlide: true,
        arrows: false,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    const settingsDesktop = {
        className: "center",
        infinite: false,
        centerPadding: "30px",
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: true,
        dots: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    const ToggleFavorite = (e) => {
        if (e.target.attributes[0].value == '/static/images/white-heart.png') {
            e.target.attributes[0].value = '/static/images/black-heart.png'
        } else {
            e.target.attributes[0].value = '/static/images/white-heart.png'
        }
    }

    const addToCart = (product) => {

        if (shoppingCart.some(item => item.id === product.id)) {
            setShowAlertAlreadyAdd(true);
            setTimeout(() => {
                setShowAlertAlreadyAdd(false);
            }, 3000);
        } else {
            setShowAlertAdd(true);
            setTimeout(() => {
                setShowAlertAdd(false);
            }, 3000);
            setShoppingCart(prevArray => prevArray.concat(product));
            handleClick();
        }
    }

    const handleClick = () => {

        updateCount();
    };
    return (
        <>
            {showAlertAdd && (
                <div className='alert-add-cart'>
                    <p>Adicionado ao Carrinho</p>
                </div>
            )}
            {showAlertAlreadyAdd && (
                <div className='alert-add-cart'>
                    <p>Produto já está adicionado ao carrinho</p>
                </div>
            )}
            <h2 id='lancamento-title'>Lançamentos</h2>
            {products && products.length > 0 ? (
                <Slider {...(isMobile ? settings : settingsDesktop)}>
                    {products.map((product) => (
                        <div className='lancamento-page' key={product.id}>
                            <div className='img-lancamento'>
                                <div className='heart-lancamento'>
                                    <img onClick={(e) => ToggleFavorite(e)}
                                        src="/static/images/white-heart.png" alt="" />
                                </div>
                                <img id='image-product' src={product.image} alt="" />
                                <div id='img-bottom-info'>
                                    <p> {product.price.isDiscount !== null ?
                                        <span> {Math.abs((((product.price.isDiscount - product.price.amount) / product.price.amount) * 100).toFixed(1))}
                                            % OFF </span>
                                        : ''}
                                    </p>
                                    <span onClick={() => addToCart(product)}>
                                        <img src="/static/images/adicionar-carrinho.png" alt="" />
                                    </span>
                                </div>

                            </div>
                            <div className='info-lancamento'>
                                <p>{product.name}</p>
                                {product.price.isDiscount !== null ?
                                    <p className='amount'> <span id='discount-number'>R$ {product.price.amount} </span>
                                        <span>  R${product.price.isDiscount}
                                        </span> </p> :
                                    <p className='amount'>   R${product.price.amount} </p>}

                            </div>

                        </div>
                    ))}

                </Slider>
            ) : (
                <p>Erro ao carregar produtos</p>
            )}
        </>

    )
}

export default Lancamentos