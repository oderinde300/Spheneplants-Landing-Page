import React from 'react';
import './Rectangle1.css';
import frame5 from '../assets/Frame 5.png';
import shape from '../assets/shape.png';
import shape2 from '../assets/Shape2.png';

const Rectangle1 = () => {
    return (
        <div className='Rectangle1'>
            <div className='rectangle1-content'>
                <img className='rectangle1-shape' src={shape} alt={shape} />
                <img className='rectangle1-shape2' src={shape2} alt={shape2} />
                <img src={frame5} className='frame5' alt='frame5' />
                <div className='rectangle1-text'>
                    <p className='rectangle1-subtitle'>Getting to know about better</p>
                    <p className='rectangle1-title'>The reason behind why some <br></br> vegetables & fruits last longer
                        <br></br> than the other.</p>
                </div>
            </div>
        </div>
    )
}

export default Rectangle1;
