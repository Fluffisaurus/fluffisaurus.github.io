import React from 'react';

import { CarouselMotionArt, CarouselATD } from './Carousel.js'

export class ProjectMotionArt extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Motion Art</h2>
        <div className="Projects-2-col">
          <div className="Projects-col-left">
            <p>AndroidStudio, Java, Sensors</p>
            <p>The idea for this mobile application comes from the attempt to enable a means of drawing through your body's movement. My goal was to map device position to a blank canvas (on the mobile device) in which the user's movement would translate as a drawing stroke. However, given that this was a project for school I was restricted to the use of sensors native to mobile devices. This proved to be a limitation for what I had hoped to achieve.
            </p>
            <p>The native sensors that I experimented with include the accelerometer, gyroscope, and GPS. I wanted to implement a mapping of user movement to a 2D space using these sensors. The several issues that I came upon include</p>
            <ul>
              <li>Accelerometer: mathematical limitations with the inaccuracies of deriving position from a double integration of acceleration data.</li>
              <li>GPS: various levels of accuracy. Low accuracy is too imprecise with accuracy within 50 meters while high accuracy delivers accurate positioning within 5 meters but takes too much time to acquire data and has a high power consumption.</li>
              <li>Gyroscope: can only be used to determine device orientation</li>
            </ul>

            <p>I attempted to use a combination of gyroscope + accelerometer to essentailly create a variation of a gyromouse but its functionality was still too inaccurate.</p>
            <p>Given the obstacles that I encountered during the process, I was unable to implement the functionality that I initially started the project for. The resultant app for this project is a drawing application that contained a variety of features:</p>
            <ul>
              <li>renaming the art board,</li>
              <li>saving the artboard to the local device,</li>
              <li>customizing their colour palette,</li>
              <li>brush sizes,</li>
              <li>eraser sizes,</li>
              <li>andcreating new artboards.</li>
            </ul>
            <p>If I were to build upon this in the future, I could implement the use of an external sensor to do mapping of body movements to the mobile canvas. I would also like to implement more user-friendly features such as a UI for left-handed users, loading in art to edit, allowing the user to save to a specific location on their device, and so on.</p>

          </div>
          <div className="Projects-col-right">
            <CarouselMotionArt />
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export class ProjectATD extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h2>Antlion Tower Defense</h2>
        <div className="Projects-col">
            <p>Unity, C#, Game Mechanics, Pathfinding, Object Oriented Design, Modularity</p>
            <p>This is a 2D tower defense game where the player commands a battalion of ants (towers) to defend against invading antlions. The player plays as the queen ant in which they deploy their troops and setup for the invasion.</p>
            <p>In this project, my role and responsibilty as the game developer was to implement and create a system to that can manage </p>
            <ul>
              <li>a wave mechanic,</li>
              <li>an economy system / management,</li>
              <li>pathfinding for the antlion enemies,</li>
              <li>tower and enemy interactions,</li>
              <li>a spawner for enemies,</li>
              <li>user tower placements,</li>
              <li>and a node grid as the playing field.</li>
            </ul>
            <CarouselATD/>
            <p>Roles and Contributions: </p>
            <ul>
              <li>Angus Hon: Developer and UI Designer</li>
              <li>Vivian James: Character Design and Rigging, UI Designer</li>
              <li>Sky Li: Antlion Design and Art Assets </li>
              <li>Nijhum Mohammed: Ant Tower Design</li>
            </ul>

        </div>
      </React.Fragment>
    );
  }
}

export class ProjectClimateDataAnalysis extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h2>Canadian Climate Data Analysis</h2>
        <div className="Projects-col">
          <p>R, SQLite, R Studio, R Shiny</p>
          <p>The detailed analysis is hosted at <a href="https://shiny.rcg.sfu.ca/u/achon/" target="_blank" rel="noopener noreferrer">https://shiny.rcg.sfu.ca/u/achon/</a>.</p>
          <iframe className="Projects-iframe" src="https://shiny.rcg.sfu.ca/u/achon/" title="Climate Data Analysis"></iframe>
        </div>

      </React.Fragment>
    );
  }
}

export class ProjectWifiOptimization extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Optimization of SFU Bennett Library's WIFI Coverage</h2>
        <div className="Projects-col">
          <p>Contributers: Angus Hon, David Ling, Kaveh Alemi, and Anson Christo</p>
          <p>An optimization project within Operations Research (OR) in which we produced a mathematical model to optimize wi-fi coverage in population dense areas of SFU Bennett Library. This project goes in depth in the model's development while taking into account different parameters:</p>
          <ol>
            <li>floor plan of the library, </li>
            <li>capacity of the library at peak hours, </li>
            <li>data usage per user within the library, </li>
            <li>cost of data usage, </li>
            <li>network speeds, </li>
            <li>and current coverage setup.</li>
          </ol>
          <p>During its implementation, we were met with many obstacles in data collection. We managed to obtain the library seating capacity per floor, the router in use and its specifications, and the current coverage layout. Unfortunately we were unable to obtain data usage information and instead had to resort to a more creative represenation. This led to the development an alternative approximation model.</p>
          <p>With the data we need, we subdivided the library floors into sections. Each section is assigned an index value from [1, 5] which symbolizes their data requirement. This index is derived from a multitude of factors but is primarily influenced by population density and number of seats in their respective section. Finally we compute a binary coverage map for our optimized model.</p>
        </div>

      </React.Fragment>
    );
  }
}

export class ProjectDefault extends React.Component {
  render() {
    return (
      <React.Fragment></React.Fragment>
    );
  }
}