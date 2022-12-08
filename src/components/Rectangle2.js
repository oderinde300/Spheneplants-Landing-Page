import React from 'react';
import './Rectangle2.css';
import arrow from '../assets/arrow.png';

const Rectangle2 = () => {
    return (
        <section className='Rectangle2'>
            <div className='rectangle2-content'>
                <p className='rectangle2-title'>All round <br></br>Freshness.</p>
                <div className='rectangle2-text'>
                    <p className='rectangle2-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Sit turpis nec risus tincidunt nascetur.
                        Pulvinar aenean<br></br> congue nullam mauris dictum arcu risus. Fusce quisque<br></br> penatibus auctor etiam. Iaculis
                        netus diam egestas<br></br> faucibus vitae, fringilla. Odio ipsum, pellentesque in tellus<br></br> mauris, elit commodo.
                        Maecenas condimentum </p>
                    <div className='rectangle2-btn'>
                        How it works
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rectangle2;
