import React from 'react';
import HomeCarousel from './HomeCarousel';
import IntroBlock from './IntroBlock';
import DisciplinesBlock from './DisciplinesBlock';
import TestimonialBlock from './TestimonialBlock';
import GetInTouch from './GetInTouch';

function HomePage() {
    return(
        <div className="nhc-title nhc-bg-color-1">
            <HomeCarousel/>
            <IntroBlock/>
            <DisciplinesBlock/>
            <TestimonialBlock/>
            <GetInTouch/>
        </div>
    );
}

export default HomePage;