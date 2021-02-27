// @flow
import * as React from 'react';
import './carousel-component.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = ({ images }) => {
    let num = 0;
    return (
        <div className="content">
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} className='car-container' >
                {
                    images.map( ( image ) => {
                        num ++;
                        return (
                            <div key={'img'+num} >
                                <img src={image} alt='dish' />
                            </div>
                        )
                    } )
                }
            </Carousel>    
        </div>
    );
};

export default CarouselComponent;