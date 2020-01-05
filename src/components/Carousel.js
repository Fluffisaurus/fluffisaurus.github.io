import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css"; //went into carousel.css and added padding-inline-start:0px; under .carousel .control-dots 
import placeholder from "../assets/placeholderGallery.png";

export class CarouselMaker extends React.Component {
  render() {
    // only render if there are actually images https://react-cn.github.io/react/tips/if-else-in-JSX.html
    if(this.props.info.length === 0){
      return(
        <React.Fragment>
          <div className="Carousel-placeholder">
            <img src={placeholder} alt="placeholder image"></img>
            <p>Nothing here yet, images to come!</p>
          </div>
        </React.Fragment>
      );
    }
    else{
      return (
        <React.Fragment>
          <Carousel 
            showThumbs = {false}
            useKeyboardArrows = {true}
            infiniteLoop = {true}
            className="Carousel">
            {
              this.props.info.map((curr) => (
                <div key={curr.src}>
                  <img src={require(`../assets/${curr.src}`)} alt={curr.alt}/>
                  <p>{curr.description}</p>
                </div>
              ))
            }
          </Carousel>
        </React.Fragment>
      );
    }
  }
}
