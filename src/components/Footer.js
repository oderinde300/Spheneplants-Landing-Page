import React from 'react';
import './Footer.css';
import vector10 from '../assets/Vector10.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';

const Footer = () => {
    return (
        <section className='Footer'>
            <div className='Footer-container'>
                <div className='Footer-item1'>
                    <div className='Footer-item-title'><img src={vector10} alt='logo' /> Spheneplants
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetuer<br></br>  ipiscing elit. Aenean commodo ligula eget
                        <br></br>dolor. Aeneaassa. Cum sociis natoque iula<br></br> eget dolor. Aenean massa.  dolor. Aenean
                        <br></br>massa. Lorem ipsum dolor sit ansectetuer  <br></br>ipiscing elit. Aenean commodo ligula eget
                        <br></br>dolor. Aeneaassa. Cum sociis natoque iul</p>
                </div>
                <div className='Footer-item2'>
                    <div className='Footer-item-title'>Quick Links</div>
                    <p>Home</p>
                    <p>Products</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>How It Works</p>
                </div>
                <div className='Footer-item3'>
                    <div className='Footer-item-title'>Our Address</div>
                    <p>1234, Lagos, Nigeria</p>
                    <p>Spheneplants Head office</p>
                    <div className='Footer-item3-icons'>
                        <img src={facebook} alt='facebook' />
                        <img src={twitter} alt='twitter' />
                        <img src={instagram} alt='instagram' />
                    </div>
                </div>
                <div className='Footer-item4'>
                    <div className='Footer-item-title'>Have any questions for us</div>
                    <p>Get updates on jobs that you might be <br></br>interested in when you subcribe.</p>
                    <input
                        type='text' placeholder='Your Email' />
                    <div className='Footer-item4-btn'>Subscribe</div>
                </div>
            </div>
            <p className='Footer-copyright'>&copy; 2022 Spheneplants. All Right Reserved.</p>
        </section>
    )
}

export default Footer;
