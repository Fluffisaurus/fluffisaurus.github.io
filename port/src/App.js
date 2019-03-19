import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import logo from './assets/logo.svg'
import linkedinIcon from './assets/linkedin.svg'
import emailIcon from './assets/email.svg'
import phoneIcon from './assets/chat.svg'
import motionArt1 from './assets/motionart1.jpg'
import motionArt2 from './assets/motionart2.jpg'
import motionArt3 from './assets/motionart3.jpg'
import motionArt4 from './assets/motionart4.jpg'
import motionArt5 from './assets/motionart5.jpg'
import './css/App.css';
import './css/palette.css'

// var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.nextComponent = this.nextComponent.bind(this);
    this.state = {
      currentComponent: "Default",
      currentProject: "Default",
      headerExpand: false
    }
  }

  getComponent() {
    let component;
    switch (this.state.currentComponent) {
      case "About":
        component = this.aboutPage();
        break;
      case "Projects":
        component = this.projectsPage();
        break;
      case "Contact":
        component = this.contactPage();
        break;
      case "Default":
        component = this.defaultPage();
        break;
    }
    return component;
  }

  nextComponent(pageName) {
    this.setState({
      currentComponent: pageName
    });
    // if header is expanded, container expanded to 100% height 
    if (pageName !== "Default") {
      this.setState({
        headerExpand: true
      });
    } else {
      this.setState({
        headerExpand: false
      })
    }
  }

  defaultPage() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }

  aboutPage() {
    return (
      <React.Fragment>
        <section className="About bgGrey">
          <h1>5W + 1H = Angus H.</h1>
          <div className="About-info">
            <h2>Who is Angus?</h2>
            <p>He's a data scientist / software engineer to be.</p>
          </div>
          <div className="About-info">
            <h2>What is Angus?</h2>
            <p>He is a human who is ethnically Chinese that was born / raised in Vancouver, Canada. Angus also happens to be a
            type of beef.</p>
          </div>
          <div className="About-info">
            <h2>When is Angus?</h2>
            <p>Now.</p>
          </div>
          <div className="About-info">
            <h2>Where is Angus?</h2>
            <p>He is currently in Vancouver, BC, Canada.</p>
          </div>
          <div className="About-info">
            <h2>Why is Angus?</h2>
            <p>That is a question he asks himself too frequently.</p>
          </div>
          <div className="About-info">
            <h2>How is Angus?</h2>
            <p>He is currently finishing his undergraduate studies at Simon Fraser University. In his spare time, he enjoys
              hanging out with his friends, working on random projects, playing video games, and watching the NBA.
          </p>
          </div>
        </section>
      </React.Fragment>
    );
  }

  getProject(){
    let project;
    switch(this.state.currentProject){
      case "MotionArt":
        project = this.projectMotionArt();
        break;
      default:
        project = <React.Fragment></React.Fragment>
        break;
    }
    return project;
  }

  nextProject(projectName){
    this.setState({
      currentProject: projectName
    });
  }
  
  projectsPage() {
    return (
      <React.Fragment>
        <section className="Projects bgGrey">
          <h1>Things I've worked on</h1>
          <div className="Project-icons-list">
            <div className={this.state.currentProject === "MotionArt" ? "Project-icons-selected bgAlmostBlack" : "Project-icons bgAlmostBlack"} 
              onClick={this.state.currentProject !== "MotionArt" ? 
              () => this.nextProject("MotionArt") : () => this.nextProject("Default")}></div>
            <div className="Project-icons bgBlue"></div>
            <div className="Project-icons bgNeonBlue"></div>
            <div className="Project-icons bgWhite"></div>
          </div>
          <div className={this.state.currentProject !== "Default" ? "Container Container-expanded" : "Container"}>
            {this.getProject()}
          </div>
        </section>
      </React.Fragment>
    );
  }

  projectMotionArt(){
    return(
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

  contactPage() {
    return (
      <React.Fragment>
        <section className="Contact bgGrey">
          <h1>Grab a hold of me here!</h1>
          <a href="https://www.linkedin.com/in/angus-hon/" target="_blank" rel="noopener noreferrer">
            <img className="Contact-icons" src={linkedinIcon} alt="linkedin logo made by Freepik" />
            <span>https://www.linkedin.com/in/angus-hon/</span>
          </a>
          <a>
            <img className="Contact-icons" src={emailIcon} alt="email icon made by Freepik" />
            <span>angus_hon@sfu.ca</span>
          </a>
          <a>
            <img className="Contact-icons" src={phoneIcon} alt="phone icon made by Zurb" />
            <span>+1 (778) 788 9168</span>
          </a>

          <div className="Icon-reference">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/<?=_('authors').'/'?>zurb" title="Zurb">Zurb</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>        </section>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="App bgAlmostBlack">
        <header className={this.state.headerExpand ? "App-header-expanded" : "App-header-compressed"}>
          <img className={this.state.headerExpand ? "App-logo App-logo-pin" : "App-logo"} onClick={() => this.nextComponent("Default")}
            src={logo} alt="temp react logo" />
          <nav className="Navigation">
            <span className={this.state.currentComponent === "About" ? "colNeonBlue" : "colBlue"} onClick={() => this.nextComponent("About")}>About</span>
            <span className={this.state.currentComponent === "Projects" ? "colNeonBlue" : "colBlue"} onClick={() => this.nextComponent("Projects")}>Projects</span>
            <span className={this.state.currentComponent === "Contact" ? "colNeonBlue" : "colBlue"} onClick={() => this.nextComponent("Contact")}>Contact</span>
          </nav>
        </header>
        <div className={this.state.headerExpand ? "Container Container-expanded" : "Container"}>
          {this.getComponent()}
        </div>
      </div>
    );
  }
}

export default App;
