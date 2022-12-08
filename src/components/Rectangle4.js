import React from 'react';
import './Rectangle4.css';
import rectangle7 from '../assets/Rectangle7.png';
import arrow2 from '../assets/arrow2.png';

const Rectangle4 = () => {
    return (
        <section className='Rectangle4'>
            <div className='rectangle4-box1'>
                <img src={rectangle7} alt='rectangle7' />
            </div>
            <div className='rectangle4-box2'>
                <div>
                    <p className='rectangle4-box2-title'>Let us <br></br>collaborate</p>
                    <p className='rectangle4-box2-subtitle'>Spheneplants provides the<br></br> whole supply chain extra<br></br> time to
                        preserve farm<br></br> produce. And that’s better<br></br> for your business, we all and<br></br> the planet in general.</p>
                    <div className='rectangle4-box2-btn'>More Details
                        <img src={arrow2} alt='arrow2' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rectangle4;
