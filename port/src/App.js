import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import logo from './assets/logo.svg'
import linkedinIcon from './assets/linkedin.svg'
import emailIcon from './assets/email.svg'
import phoneIcon from './assets/chat.svg'
import './css/App.css';
import './css/palette.css'

// var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.nextComponent = this.nextComponent.bind(this);
    this.state = {
      currentComponent: "Default",
      headerExpand: false
    }
  }

  getComponent() {
    let component;
    switch (this.state.currentComponent) {
      case "About":
        component = this.aboutPage();
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

  contactPage() {
    return (
      <React.Fragment>
        <section className="Contact bgGrey">
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
            <span className="colBlue">Projects</span>
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
