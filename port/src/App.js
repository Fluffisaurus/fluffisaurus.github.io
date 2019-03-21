import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import logo from './assets/logo.svg'
import './css/App.css';
import './css/palette.css'

import { DefaultPage, AboutPage, ProjectsPage, ContactPage } from './Pages.js'

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
        component = <AboutPage/>;
        break;
      case "Projects":
        component = <ProjectsPage/>;
        break;
      case "Contact":
        component = <ContactPage/>;
      case "Default":
        component = <DefaultPage />;
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
        {/* <CSSTransition
          in={headerExpand}
          timeout={300}
          classNames="message"
          unmountOnExit
        >
        {this.getComponent()}
        </CSSTransition> */}
      </div>
    );
  }
}

export default App;
