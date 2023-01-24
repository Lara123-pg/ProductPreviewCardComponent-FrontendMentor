import React from 'react';

import iconCart from '../assets/icon-cart.svg';
import product from '../assets/image-product-desktop.jpg';
import productMobile from '../assets/image-product-mobile.jpg';

import '../scss/main.scss';

export function ProductCard() {
    return(
        <div className="container">
            <main>
                <div className="card">
                    <div className="imageWeb">
                        <img src={product} alt="Product - Web format image" />
                    </div>

                    <div className="imageMobile">
                        <img src={productMobile} alt="Product - Mobile format image" />
                    </div>
                    <div className="contents">
                        <span className="name">PERFUME</span>

                        <h1>Gabrielle Essence Eau De Parfum</h1>

                        <p>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>

                        <div className="prices">
                            <span className="price1">$149.99</span>
                            <del>$169.99</del>
                        </div>

                        <button type="button"><img src={iconCart} alt="Cart icon" /> Add to Cart</button>
                    </div>
                </div>
            </main>

            <footer>
                <div className="footer">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="https://github.com/Lara123-pg/ProductPreviewCardComponent-FrontendMentor">Lara Fernanda</a>.
                </div>
            </footer>
        </div>
    );
}