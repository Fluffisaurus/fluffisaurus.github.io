import React from 'react';
import { Carousel } from 'react-responsive-carousel';

//went into carousel.css and added padding-inline-start:0px; under .carousel .control-dots 
import "react-responsive-carousel/lib/styles/carousel.css";
import motionArt1 from './assets/motionart1.jpg'
import motionArt2 from './assets/motionart2.jpg'
import motionArt3 from './assets/motionart3.jpg'
import motionArt4 from './assets/motionart4.jpg'
import motionArt5 from './assets/motionart5.jpg'

export class CarouselCarousel extends React.Component {
  render() {
    return (
      <React.Fragment >
        <Carousel
        showThumbs = {false}
        useKeyboardArrows = {true}
        infiniteLoop = {true}
        // width="50%"
        className="Projects-gallery">
        <div>
          <img src={motionArt3} alt="MotionArt home page"/>
          <p className="legend">Default screen.</p>
        </div>
        <div>
          <img src={motionArt1} alt="MotionArt brush select"/>
          <p className="legend">Brush size select interface.</p>
        </div>
        <div>
          <img src={motionArt2} alt="MotionArt palette changer" />
          <p className="legend">Demo of MotionArt's palette changer.</p>
        </div>
        <div>
          <img src={motionArt4} alt="MotionArt edit artboard name"/>
          <p className="legend">Artboard renaming feature.</p>
        </div>
        <div>
          <img src={motionArt5} alt="MotionArt sample drawing"/>
          <p className="legend">A sample drawing done on the app.</p>
        </div>
      </Carousel>
    </React.Fragment>
    );
  }
}