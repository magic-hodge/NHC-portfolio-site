import React from 'react';
import styled from 'styled-components';
import HomeCarousel from './HomeCarousel';
import IntroBlock from './IntroBlock';
import DisciplinesBlock from './DisciplinesBlock';
import TestimonialBlock from './TestimonialBlock';
import GetInTouch from './GetInTouch';

const HomeBlock = styled.div`

    background-color: #f0f5f9;

`;

function HomePage() {
    return(
        <HomeBlock className="nhc-title">
            <HomeCarousel/>
            <IntroBlock/>
            <DisciplinesBlock/>
            <TestimonialBlock/>
            <GetInTouch/>
        </HomeBlock>
    );
}

export default HomePage;