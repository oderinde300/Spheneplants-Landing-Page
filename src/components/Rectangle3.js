import React from 'react';
import './Rectangle3.css';
import avocado2 from '../assets/avocado2.png';
import vector2 from '../assets/vector2.png';
import verified from '../assets/Veriied.png';

const Rectangle3 = () => {
    return (
        <section className='Rectangle3'>
            <div className='box1'>
                <p className='box1-title'>People believe<br></br> what they see more.</p>
                <img src={avocado2} alt='avocado2' />
                <p className='box1-footer'>Without Spheneplant</p>
            </div>
            <div className='box2'>
                <img src={avocado2} className='img-1' alt='avocado2' />
                <img src={vector2} className='img-2' alt='vector2' />
                <img src={verified} className='img-3' alt='verified' />
                <p className='box2-footer'>With Spheneplant</p>
            </div>
        </section>
    )
}

export default Rectangle3;
