import React from 'react';
import motionArt1 from './assets/motionart1.jpg'
import motionArt2 from './assets/motionart2.jpg'
import motionArt3 from './assets/motionart3.jpg'
import motionArt4 from './assets/motionart4.jpg'
import motionArt5 from './assets/motionart5.jpg'

export class DefaultProject extends React.Component {
  render() {
    return (
      <React.Fragment></React.Fragment>
    );
  }
}

export class ProjectMotionArt extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Motion Art</h2>
        <p>The idea for this mobile application dervies from the attempt to enable a means of drawing through your body's
          movement. My goal was to map device position to a blank canvas in which the user's movement would translate as a drawing stroke.
          However, given that this was a project for school I was restricted to only the use of the sensors native to mobile devices.
          This proved to be a limitation for what I had hoped to achieve.
        </p>
        <div className="Projects-gallery">
          <img src={motionArt1} alt="pic of motionart's brush select" />
          <img src={motionArt2} alt="pic of motionart's palette editor" />
          <img src={motionArt3} alt="pic of motionart's base screen" />
          <img src={motionArt4} alt="pic of motionart's artboard renaming" />
          <img src={motionArt5} alt="pic of motionart with sample art" />
        </div>
        <p>The native sensors that I experimented with include the accelerometer, gyroscope, and GPS.</p>
        <ul>
          <li>Mathematical limitations with the accelerometer pertain to the inaccuracies of deriving position from double integration.</li>
          <li>GPS has various levels of accuracy. Low accuracy is too imprecise with accuracys within 50m while high accuracy
            delivers accurate positioning within 5m but takes too much time to acquire data and too much power consumption.
          </li>
          <li>Gyroscope itself can determine device orientation</li>
        </ul>

        <p>Attempted gyroscope + accelerometer combination but still too inaccurate.</p>
        <p>At the end of the day, what I achieved was a basic drawing application without the special / intended feature.</p>
      </React.Fragment>
    );
  }
}

export class ProjectWifiOptimization extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Optimizaton of SFU Bennett Library's WIFI Coverage</h2>
        <p>Optimization project within Operations Research (OR) done with Kaveh Alemi, David Ling and Anson Christo in
        which we make
        a mathematical model to optimize wi-fi coverage in population dense areas of SFU's main library. To do so, we
        required data from SFU in regards to...
        </p>
        <div className="Projects-gallery"></div>
        <ol>
          <li>floor plan of the library, </li>
          <li>capacity of the library at peak hours, </li>
          <li>data usage per user within the library, </li>
          <li>cost of data usage, </li>
          <li>network speeds, </li>
          <li>and current coverage setup.</li>
        </ol>
        <p>In an ideal world, all the data we require would be provided to us. However, as students we had limited access
          to the
          institution's data. With the help of SFU's IT and Network Services, we were able to obtain a sufficient amount.
        </p>
      </React.Fragment>
    );
  }
}
