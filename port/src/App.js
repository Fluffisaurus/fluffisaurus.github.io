import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransitionGroup';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import logo from './assets/logo.svg';
import './css/App.css';
import './css/palette.css';

import { DefaultPage, AboutPage, ProjectsPage, ContactPage } from './Pages.js';

function GetComponent(props){
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
        <header className={this.state.headerExpand ? "App-header App-header-expanded" : "App-header App-header-compressed"}>
          <img className={this.state.headerExpand ? "App-logo App-logo-pin" : "App-logo"} onClick={() => this.nextComponent("Default")}
            src={logo} alt="temp react logo" />
          <nav className="Navigation">
            <span className={this.state.currentComponent === "About" ? "colNeonBlue" : "colBlue"} onClick={() => this.nextComponent("About")}>About</span>
            <span className={this.state.currentComponent === "Projects" ? "colNeonBlue" : "colBlue"} onClick={() => this.nextComponent("Projects")}>Projects</span>
            <span className={this.state.currentComponent === "Contact" ? "colNeonBlue" : "colBlue"} onClick={() => this.nextComponent("Contact")}>Contact</span>
          </nav>
        </header>
        <div className={this.state.headerExpand ?  "Container-expanded Container": "Container"}>
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
