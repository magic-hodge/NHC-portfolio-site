import React from 'react';
import styled from 'styled-components';
import {Testimonials} from './Testimonials';
import TestimonialTemplate from './TestimonialTemplate';
import Carousel from 'react-bootstrap/Carousel';

const TestimonialCarousel = styled.div`

.testimonial-slide {
    min-height: 325px;
    background-color: #1e2022;
    color: #c9d6df;
}

.testimonial-slide h4 {
    padding-bottom: 15px;
}

.testimonial-inner {
}

.carousel-item {
    padding: 30px;
}

.carousel-control-prev {
    left: 7.5%;
}

.carousel-control-next {
    right: 7.5%;
}

@media screen and (max-width:1024px) {
    .carousel-control-prev {
        left: 0;
    }

    .carousel-control-next {
        right: 0;
    }
}

`;

function TestimonialBlock() {
    return(
        <TestimonialCarousel>
            <Carousel className="testimonial-carousel testimonial-inner" controls={true} touch={true}>
                {Testimonials.map((testimonialItem, index) => {
                    return (
                        <Carousel.Item className="testimonial-slide" key={index} id={index} interval={10000}>
                            <TestimonialTemplate
                            key={index}
                            id={index}
                            className="testimonial-template"
                            tagline={testimonialItem.tagline}
                            text={testimonialItem.text}
                            source={testimonialItem.source}
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </TestimonialCarousel>
    );
}

export default TestimonialBlock;