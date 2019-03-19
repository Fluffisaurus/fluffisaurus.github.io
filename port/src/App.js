import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './css/App.css';
import './css/palette.css'

// var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.nextComponent = this.nextComponent.bind(this);
    this.state = {
      currentComponent: "default"
    }
  }

  getComponent() {
    let component;
    switch (this.state.currentComponent) {
      case "About":
        component = this.aboutPage();
        break;
      default:
        component = this.defaultPage();
    }
    return component;
  }

  nextComponent(pageName) {
    this.setState({
      currentComponent: pageName
    });
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

  render() {
    return (
      <div className="App bgAlmostBlack">
        <header className="App-header">
          <nav className="Navigation">
            <span className="colBlue" onClick={() => this.nextComponent("About")}>About</span>
            <span className="colBlue">Projects</span>
            <span className="colBlue">Contact</span>
          </nav>
        </header>
        <div className="Container">
          {this.getComponent()}
        </div>
      </div>
    );
  }
}

export default App;
