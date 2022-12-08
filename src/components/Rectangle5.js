import React from 'react';
import './Rectangle5.css';
import rectangle8 from '../assets/Rectangle8.png';
import rectangle9 from '../assets/Rectangle9.png';
import rectangle10 from '../assets/Rectangle10.png';
import arrow3 from '../assets/arrow3.png';

const Rectangle5 = () => {
    return (
        <section className='Rectangle5'>
            <div>
                <p className='rectangle5-title'>Explore, read and learn more about <br></br>produce preservation.</p>
                <div className='rectangle5-cards'>
                    <div className='rectangle5-card'>
                        <img src={rectangle8} alt='rectangle8' />
                        <p className='rectangle5-card-title'>Food Preservation</p>
                        <p className='rectangle5-card-subtitle'>How to make your oranges to be <br></br>perfectly ripe at the rght time.</p>
                        <div className='rectangle5-card-btn'>Read Blog Story
                            <img src={arrow3} alt='arrow3' />
                        </div>
                    </div>
                    <div className='rectangle5-card'>
                        <img src={rectangle9} alt='rectangle9' />
                        <p className='rectangle5-card-title'>Food Preservation</p>
                        <p className='rectangle5-card-subtitle'>How to make your vegetables to be <br></br>perfectly ripe at the rght time.</p>
                        <div className='rectangle5-card-btn'>Read Blog Story
                            <img src={arrow3} alt='arrow3' />
                        </div>
                    </div>
                    <div className='rectangle5-card'>
                        <img src={rectangle10} alt='rectangle10' />
                        <p className='rectangle5-card-title'>Food Preservation</p>
                        <p className='rectangle5-card-subtitle'>How to make your limes to be <br></br>perfectly ripe at the rght time.</p>
                        <div className='rectangle5-card-btn'>Read Blog Story
                            <img src={arrow3} alt='arrow3' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rectangle5;
