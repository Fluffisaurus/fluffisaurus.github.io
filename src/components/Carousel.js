import React from 'react';
import { Carousel } from 'react-responsive-carousel';

//went into carousel.css and added padding-inline-start:0px; under .carousel .control-dots 
import "react-responsive-carousel/lib/styles/carousel.css";
import motionArt1 from '../assets/motionart/motionart1.jpg';
import motionArt2 from '../assets/motionart/motionart2.jpg';
import motionArt3 from '../assets/motionart/motionart3.jpg';
import motionArt4 from '../assets/motionart/motionart4.jpg';
import motionArt5 from '../assets/motionart/motionart5.jpg';

import atd1 from '../assets/atd/atd-pathfinding.png';
import atd2 from '../assets/atd/atd-start-screen.png';
import atd3 from '../assets/atd/atd-story.png';
import atd4 from '../assets/atd/atd-level-select.png';
import atd5 from '../assets/atd/atd-gameplay.png';
import atd6 from '../assets/atd/atd-win-screen.png';
import atd7 from '../assets/atd/atd-lose-screen.png';

export class CarouselMotionArt extends React.Component {
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

export class CarouselATD extends React.Component {
  render() {
    return (
      <React.Fragment >
        <Carousel
        showThumbs = {false}
        useKeyboardArrows = {true}
        infiniteLoop = {true}>
        <div>
          <img src={atd1} alt="ATD A* Pathfinding"/>
          <p className="legend">A* Pathfinding for enemies shown by lines and points.</p>
        </div>
        <div>
          <img src={atd2} alt="ATD Start Screen"/>
          <p className="legend">Start screen for the game.</p>
        </div>
        <div>
          <img src={atd3} alt="ATD Story Screen" />
          <p className="legend">Scrollable story and narrative screen.</p>
        </div>
        <div>
          <img src={atd4} alt="ATD Level Select Screen"/>
          <p className="legend">Level select screen.</p>
        </div>
        <div>
          <img src={atd5} alt="ATD Sample Gameplay"/>
          <p className="legend">Sample gameplay of the game.</p>
        </div>
        <div>
          <img src={atd6} alt="ATD Win Screen"/>
          <p className="legend">Game's win screen.</p>
        </div>
        <div>
          <img src={atd7} alt="ATD Lose Screen"/>
          <p className="legend">Game's lose screen.</p>
        </div>
      </Carousel>
    </React.Fragment>
    );
  }
}