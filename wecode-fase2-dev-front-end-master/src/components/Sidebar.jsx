import React, { useState } from 'react'
import './sidebar.scss'
const Sidebar = ({ showSidebar }) => {
    const [showSubCategory, setShowSubCategory] = useState(false);
    const categories = [
        { name: 'Sapatos', subCategories: ['Scarpins', 'Mocassim', 'Sapatilhas', 'Mules', 'Peep Toe', 'Oxford'] },
        { name: 'Sandálias', subCategories: ['Coleção Verão', 'Alta'] },
        { name: 'Botas', subCategories: ['Couro', 'Cano Curto', 'Cano Longo'] },
        { name: 'Tênis', subCategories: ['Corrida', 'Sneaker'] },
        { name: 'Outlet', subCategories: ['Exemplo', 'Exemplo 2', 'Exemplo 3'] },

    ];
    
    const handleClick = () => {

        showSidebar();
    };
    const ToggleSubCategory = (index) => {
        setShowSubCategory(showSubCategory === index ? null : index);
    }
    return (

        <div className='sidebar'>
            <div className='header-sidebar'>
                <img src="/static/images/principais/logo-preta.png" alt="" />
                <span>
                    <img onClick={() => handleClick()} src="/static/images/close-sign.png" alt="" />
                </span>
            </div>
            <div className='image-sidebar'>
                <p>Celebration - 20 Anos</p>
                <a href="">Conheça</a>
            </div>
            <div className='options-sidebar'>
                <ul >
                    {categories.map((category, index) => (
                        <li key={index} className='category'>
                            <div className={`${showSubCategory === index ? 'title-category active' : 'title-category'}`} onClick={() => ToggleSubCategory(index)}>
                                <p>{category.name}</p>
                                <span><img src="/static/images/angulo-direito 1.png" alt="" /></span>
                            </div>
                            { }
                            {showSubCategory === index && (
                                <ul className="sub-category">
                                    {category.subCategories.map((subCategory, subIndex) => (
                                        <li key={subIndex}>{subCategory}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar