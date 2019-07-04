import React from 'react';

import { CarouselMotionArt, CarouselATD } from './Carousel.js';

import SummarMaxTemp from './assets/shiny/summer-max.png';
import SummerMinTemp from './assets/shiny/summer-min.png';

export class ProjectMotionArt extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Motion Art</h2>
        <div className="Projects-2-col">
          <div className="Projects-col-left">
            <div className="Project-skills">
              <p>AndroidStudio</p>
              <p>Java</p>
              <p>Sensors</p>
            </div>
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
          <div className="Project-skills">
            <p>Unity</p>
            <p>C#</p>
            <p>Game Mechanics</p>
            <p>Pathfinding</p>
            <p>Object Oriented Design</p>
            <p>Modularity</p>
          </div>
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
          <div className="Project-skills">
            <p>R</p>
            <p>SQLite</p>
            <p>R Studio</p>
            <p>R Shiny</p>
          </div>
          <p>The full detailed analysis is hosted at <a href="https://shiny.rcg.sfu.ca/u/achon/" target="_blank" rel="noopener noreferrer">https://shiny.rcg.sfu.ca/u/achon/</a>. It includes interactive graphs where you can manipulate the given parameters and variables of the data shown.</p>
          <h3>Correlation or Coincidence?</h3>
          <p>Unnatural sources of CO2 emissions across the world have been steadily climbing over the past 100 years. Despite this, there has not been an equal increase in natural or unnatural means of CO2 removal to counter-balance the increasing production. With CO2 being a greenhouse gas, this imbalance contributes to overall increasing deposits of greenhouse gases in the atmosphere.</p>
          <p>Locally in Vancouver, BC, denizens can note the noticable increase in temperatures over the past decade. Since Vancouver is a coastal city, the weather is typically milder and many houses do not come equipped with air conditioners. Unexpectedly warm weather can affect locals who are not properly prepared. This observational data is reflected in the empirical dataset of surface temperatures in Vancouver, BC.</p>
          <figure>
            <img src={SummarMaxTemp} alt="Graph of maximum temperature line of best fit"/>
            <figcaption>Figure 1: Max temperature line of best fit; slight increase of ~1 degree</figcaption>
          </figure>
          <figure>
            <img src={SummerMinTemp} alt="Graph of minimum temperature line of best fit"/>
            <figcaption>Figure 2: Min temperature line of best fit; substantial increase of ~4 degrees</figcaption>
          </figure>
          <p>Looking at seasonal weather data in Vancouver, we can see some trends in the moving average (bandwidth = 50) of seasonal increases per dataset. The maximum temperatures by season experience increases by a slight margin (Figure 1). In comparision, minimum temperatures have a drastic increase (Figure 2). This is reflected in the overall mean where the minimum temperature is the greater contributer to the overall delta. With these results, we can infer that over the past century the seasonal range in temperatures are narrowing where the minimum value is slowly converging to the maximum.</p>
          <table className='tableInfo'>
            <thead>
              <tr>
                <th colSpan='4' id='tableName'>Approximate Delta Increase in Temperature (°C) with Moving Average Bandwidth = 50</th>
              </tr>
              <tr>
                <th>Season</th>
                <th>Max Temperature</th>
                <th>Min Temperature</th>
                <th>Mean Temperature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Spring</td>
                <td>+0.8</td>
                <td>+2.0</td>
                <td>+1.4</td>
              </tr>
              <tr>
                <td>Summer</td>
                <td>+1.1</td>
                <td>+3.1</td>
                <td>+2.1</td>
              </tr>
              <tr>
                <td>Autumn</td>
                <td>+0.6</td>
                <td>+1.7</td>
                <td>+1.2</td>
              </tr>
              <tr>
                <td>Winter</td>
                <td>+0.3</td>
                <td>+0.8</td>
                <td>+0.6</td>
                </tr>
            </tbody>
          </table>
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