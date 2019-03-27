import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransitionGroup';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import logo from './assets/logo.svg';
import './css/App.css';
import './css/palette.css';
import './css/hexagon.css'

import { DefaultPage, AboutPage, ProjectsPage, ContactPage } from './Pages.js';

function GetComponent(props) {
  let component;
  switch (props) {
    case "About":
      component = <AboutPage />;
      break;
    case "Projects":
      component = <ProjectsPage />;
      break;
    case "Contact":
      component = <ContactPage />;
      break;
    case "Default":
      component = <DefaultPage />;
      break;
  }
  return component;
}

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

  render() {
    return (
      <div className="App bgAlmostBlack">
        <svg version="1.1" class="hexagon_formation" x="0px" y="0px"
          viewBox="0 0 650.1 433" >
          <g>
            <polygon class="hex" points="350.1,259.8 300.1,173.2 350.1,86.6 450.1,86.6 500.1,173.2 450.1,259.8 	" />
            <polygon class="hex" points="500.1,173.2 450.1,86.6 500.1,0 600.1,0 650.1,86.6 600.1,173.2 	" />
            <polygon class="hex" points="350.2,433 300.2,346.4 350.2,259.8 450.2,259.8 500.2,346.4 450.2,433 	" />
            <polygon class="hex" points="200.1,346.4 150.1,259.8 200.1,173.2 300.1,173.2 350.1,259.8 300.1,346.4 	" />
            <polygon class="hex" points="200.1,173.2 150.1,86.6 200.1,0 300.1,0 350.1,86.6 300.1,173.2 	" />
            <polygon class="hex" points="50,433 0,346.4 50,259.8 150,259.8 200,346.4 150,433 	" />
          </g>
        </svg>
        <header className={this.state.headerExpand ? "App-header App-header-expanded" : "App-header App-header-compressed"}>
          <img className={this.state.headerExpand ? "App-logo App-logo-pin" : "App-logo"} onClick={() => this.nextComponent("Default")}
            src={logo} alt="temp react logo" />
          <nav className="Navigation">
            <span className={this.state.currentComponent === "About" ? "colNeonBlue" : "colBlue"} onClick={() => this.nextComponent("About")}>About</span>
            <span className={this.state.currentComponent === "Projects" ? "colNeonBlue" : "colBlue"} onClick={() => this.nextComponent("Projects")}>Projects</span>
            <span className={this.state.currentComponent === "Contact" ? "colNeonBlue" : "colBlue"} onClick={() => this.nextComponent("Contact")}>Contact</span>
          </nav>
        </header>
        <div className={this.state.headerExpand ? "Container-expanded Container" : "Container"}>
          {GetComponent(this.state.currentComponent)}
          {/* <CSSTransition key={this.state.currentComponent} className="fade">
            {GetComponent(this.state.currentComponent)}
          </CSSTransition> */}
        </div>
      </div>
    );
  }
}

export default App;
