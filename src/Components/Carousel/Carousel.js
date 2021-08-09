import React from 'react'
import Carousel from 'react-elastic-carousel';
import './carousel.css';

const CarouselC = (props) => {

    const breakPoints = [
        {width:500, itemsToShow : 1},
        {width:700, itemsToShow : 2},
        {width:900, itemsToShow : 3},
        {width:1200, itemsToShow : 4}
    ];

    return (
        <div className="carousel">
            <h1>{props.pageHeading}</h1>
            {!props.logo ?
            <Carousel className="cards" breakPoints={breakPoints}>
                {props.images.map((image) => {
                    return (
                    <div className="box">
                        <img src={image} alt=""/>
                    </div>
                    )
                })}
            </Carousel>
            :
            <Carousel className="cards" breakPoints={breakPoints}>
                {props.logo.map((num) => {
                    return (
                        <div className="box">
                            <img src={num.i} alt="not loaded"/>
                            <h3>{num.tex}</h3>
                        </div>
                    )
                })}
            </Carousel>
            }
        </div>
    )
}

export default CarouselC
