import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import HeadSupport from '../images/head_support_width.jpg';
import SpindleCoin from '../images/spindle_coin_cropped.jpg';
import SignatureFlag from '../images/upbd_signature_flag_cropped.jpg';

const ImageCarousel = styled.div`

    .home-carousel-image {
    }

    .carousel-item {
    }

    .carousel {
    }

`;

function HomeCarousel() {
    return(
        <ImageCarousel>
            <Carousel controls={false} touch={true}>
                <Carousel.Item interval={5000}>
                    <Image
                    className="home-carousel-image"
                    src={HeadSupport}
                    alt="head_support"
                    fluid
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <Image
                    className="home-carousel-image"
                    src={SpindleCoin}
                    alt="spindle_coin"
                    fluid
                    />
                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <Image
                    className="home-carousel-image"
                    src={SignatureFlag}
                    alt="upbd_signature_flag"
                    fluid
                    />
                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </ImageCarousel>
    );
}

export default HomeCarousel;