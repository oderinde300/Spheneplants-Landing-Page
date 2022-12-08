import React from 'react';
import './Products.css';
import shape3 from '../assets/Shape3.png';
import shape4 from '../assets/Shape4.png';
import product1 from '../assets/Product1.png';
import product2 from '../assets/Product2.png';
import product3 from '../assets/Product3.png';
import product4 from '../assets/Product4.png';


const Products = () => {



    return (
        <section className='Products'>
            <img src={shape3} className='shape3' alt='shape3' />
            <img src={shape4} className='shape4' alt='shape4' />
            <p className='products-title'>Fruits & Vegetables,<br></br>preserved by Spheneplants.</p>
            <p className='products-subtitle'>Explore and discover our products available in Africa and Europe.</p>
            <div className='products-container'>
                <div className='product'>
                    <div className='product-img-container'>
                        <img src={product1} alt='avocados' className='product-img' />
                    </div>
                    <p className='product-title'>Avocados</p>
                    <p className='product-location'>West Africa & Europe</p>
                    <div className='product-btn'>View Product</div>
                </div>
                <div className='product'>
                    <div className='product-img-container'>
                        <img src={product2} alt='mangoes' className='product-img' />
                    </div>
                    <p className='product-title'>Mangos</p>
                    <p className='product-location'>West Africa & Europe</p>
                    <div className='product-btn'>View Product</div>
                </div>
                <div className='product'>
                    <div className='product-img-container'>
                        <img src={product3} alt='apples' className='product-img' />
                    </div>
                    <p className='product-title'>Apples</p>
                    <p className='product-location'>West Africa & Europe</p>
                    <div className='product-btn'>View Product</div>
                </div>
                <div className='product'>
                    <div className='product-img-container'>
                        <img src={product4} alt='lemons' className='product-img' />
                    </div>
                    <p className='product-title'>Lemons</p>
                    <p className='product-location'>West Africa & Europe</p>
                    <div className='product-btn'>View Product</div>
                </div>
            </div>
        </section >
    )
}

export default Products;
