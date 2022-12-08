import React from 'react';
import './Hero.css';
import vector from '../assets/Vector.png';
import { FaTimes } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';

const Hero = () => {
    const [show, setShow] = React.useState(false);

    const handleShow = () => { setShow(!show) }

    return (
        <section className='Hero'>
            <nav className='nav-bar'>
                <div className='navigation'>
                    <ul className='nav-links-1'>
                        <li className='nav-link'> Our Story </li>
                        <li className='nav-link'> Products </li>
                    </ul>
                    <ul>
                        <img src={vector} alt='vector' />
                        <li className='nav-link-sphene'>Spheneplants </li>
                    </ul>
                    <ul className='nav-links-3'>
                        <li className='nav-link'>How it works </li>
                        <li className='nav-link-btn' id='nav-link-btn'>Contact Us </li>
                    </ul>
                </div>
            </nav>

            <div className='mobile-navigation-logo'>
                <ul className='mobile-nav-links-2'>
                    <img src={vector} alt='vector' />
                    <li className='mobile-nav-link-sphene'>Spheneplants </li>
                </ul>
                <div onClick={handleShow} className='mobile-navigation-icons'>
                    {show ? <FaTimes sixe={20} /> : <TiThMenu size={20} />}
                </div>
            </div>
            {show && (
                <nav className='mobile-nav-bar'>
                    <div className='mobile-navigation'>
                        <ul className='mobile-nav-links-1'>
                            <li className='mobile-nav-link'> Our Story </li>
                            <li className='mobile-nav-link'> Products </li>
                        </ul>
                        <ul className='mobile-nav-links-3'>
                            <li className='mobile-nav-link'>How it works </li>
                            <li className='mobile-nav-link-btn' id='nav-link-btn'>Contact Us </li>
                        </ul>
                    </div>
                </nav>
            )}

            <div className='hero-text'>
                <p className='hero-title'>Lasting produce then ever before..</p>
                <p className='hero-subtitle'>Natural based preservation <br></br> that protects the produce to stay <br></br>
                    fresh longer than before.</p>
                <button className='hero-btn'>Explore Plants</button>
            </div>
        </section>
    )
}

export default Hero;
