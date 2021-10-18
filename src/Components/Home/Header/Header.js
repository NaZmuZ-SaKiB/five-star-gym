import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import BG1 from '../../../Images/gym-bg-1.jpg';
import BG2 from '../../../Images/gym-bg-2.jpg';
import BG3 from '../../../Images/gym-bg-3.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Carousel infiniteLoop interval={5000} transitionTime={1000} autoPlay showThumbs={false} showArrows={false} showStatus={false}>

                <div className="slide">
                    <img src={BG1} alt='Background 1' />
                    <h1>Reach your goal at <br /> <span>five star gym</span></h1>
                </div>
                <div className="slide">
                    <img src={BG2} alt='Background 2' />
                    <h1>Build it powerful <br /> <span>five star gym</span></h1>
                </div>
                <div className="slide">
                    <img src={BG3} alt='Background 3' />
                    <h1>Expert trainer are here <br /> <span>Are you ready?</span></h1>
                </div>


            </Carousel>
        </div>
    );
};

export default Header;