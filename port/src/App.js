import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import logo from './assets/logo.svg';
import './css/App.css';
import './css/palette.css';
import './css/hexagon.css';

import { DefaultPage, AboutPage, ProjectsPage, ContactPage } from './Pages.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.containerOpen = this.containerOpen.bind(this);
    this.containerClose = this.containerClose.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.randomPos = this.randomPos.bind(this);
    this.state = {
      headerExpand: false,
      width: window.innerWidth,
      height: window.innerHeight,
      posx: [0, 0, 0],
      posy: [0, 0, 0],
      rotate: 0
    }
  }

  // https://stackoverflow.com/a/42141641
  componentDidMount() {
    console.log("hi");
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.randomPos();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log("width: " + this.state.width + ", height: " + this.state.height);
  }

  randomPos() {
    this.setState({
      posx: [Math.random() * this.state.width, Math.random() * this.state.width, Math.random() * this.state.width],
      posy: [Math.random() * this.state.height, Math.random() * this.state.height, Math.random() * this.state.height],
      rotate: Math.random() * 360
    });
    //console.log("i am triggered width: " + this.state.posx + ", height: " + this.state.posy + ", rotate: " + this.state.rotate);
  }

  //if headerexpand is set to true, opens container height > 0 to show components
  containerOpen() {
    this.setState({
      headerExpand: true
    },() => {console.log("headerExpand: " + this.state.headerExpand)});
  }

  containerClose() {
    this.setState({
      headerExpand: false
    },() => {console.log("headerExpand: " + this.state.headerExpand)});
  }

  render() {
    const hex1 = {
      width: this.state.width / 2,
      height: this.state.height / 2,
      left: (this.state.posx[0] - this.state.width / 2) <= 0 ? this.state.width/10 : this.state.posx[0] - this.state.width / 2,
      top: (this.state.posy[0] - this.state.height / 2) <= 0 ? this.state.height/10 : this.state.posy[0] - this.state.height / 2,
      transform: 'rotate(' + this.state.rotate + 'deg)'
    };
    const hex2 = {
      width: this.state.width / 2,
      height: this.state.height / 2,
      left: (this.state.posx[1] - this.state.width / 2) <= 0 ? 0 : this.state.posx[1] - this.state.width / 2,
      top: (this.state.posy[1] - this.state.height / 2) <= 0 ? 0 : this.state.posy[1] - this.state.height / 2,
      transform: 'rotate(' + this.state.rotate * 3 / 4 + 'deg)'
    };
    const hex3 = {
      width: this.state.width / 2,
      height: this.state.height / 2,
      left: (this.state.posx[2] - this.state.width / 2) <= 0 ? 0 : this.state.posx[2] - this.state.width / 2,
      top: (this.state.posy[2] - this.state.height / 2) <= 0 ? 0 : this.state.posy[2] - this.state.height / 2,
      transform: 'rotate(' + this.state.rotate * 1 / 2 + 'deg)'
    };
    return (
      <div className="App bgAlmostBlack">
        <svg version="1.1" className="hexagon_formation" viewBox="0 0 503.7 522.6" id="hex1" style={hex1}>
          <g>
            <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="201.7,434.5 151.7,347.9 201.7,261.3 301.7,261.3 351.7,347.9 301.7,434.5 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="51.7,521.1 1.7,434.5 51.7,347.9 151.7,347.9 201.7,434.5 151.7,521.1 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="201.7,261.3 151.7,174.7 201.7,88.1 301.7,88.1 351.7,174.7 301.7,261.3 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="351.9,347.9 301.9,261.3 351.9,174.7 451.9,174.7 501.9,261.3 451.9,347.9 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="51.7,347.9 1.7,261.3 51.7,174.7 151.7,174.7 201.7,261.3 151.7,347.9 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="51.7,174.7 1.7,88.1 51.7,1.5 151.7,1.5 201.7,88.1 151.7,174.7 	" />
          </g>
        </svg>

        <svg version="1.1" className="hexagon_formation" x="0px" y="0px" viewBox="0 0 650.1 433" id="hex2" style={hex2}>
          <g>
            <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="350.1,259.8 300.1,173.2 350.1,86.6 450.1,86.6 500.1,173.2 450.1,259.8 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="500.1,173.2 450.1,86.6 500.1,0 600.1,0 650.1,86.6 600.1,173.2 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="350.2,433 300.2,346.4 350.2,259.8 450.2,259.8 500.2,346.4 450.2,433 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="200.1,346.4 150.1,259.8 200.1,173.2 300.1,173.2 350.1,259.8 300.1,346.4 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="200.1,173.2 150.1,86.6 200.1,0 300.1,0 350.1,86.6 300.1,173.2 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="50,433 0,346.4 50,259.8 150,259.8 200,346.4 150,433 	" />
          </g>
        </svg>

        <svg version="1.1" className="hexagon_formation" viewBox="0 0 653.7 436" id="hex3" style={hex3}>
          <g>
            <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="351.8,261.3 301.8,174.7 351.8,88.1 451.8,88.1 501.8,174.7 451.8,261.3 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="351.9,434.5 301.9,347.9 351.9,261.3 451.9,261.3 501.9,347.9 451.9,434.5 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="502,347.9 452,261.3 502,174.7 602,174.7 652,261.3 602,347.9 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="502,174.7 452,88.1 502,1.5 602,1.5 652,88.1 602,174.7 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="201.8,174.7 151.8,88.1 201.8,1.5 301.8,1.5 351.8,88.1 301.8,174.7 	" />
            <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="51.7,261.3 1.7,174.7 51.7,88.1 151.7,88.1 201.7,174.7 151.7,261.3 	" />
          </g>
        </svg>

        <Router>
          <header className={this.state.headerExpand ? "App-header App-header-expanded" : "App-header App-header-compressed"}>
            <CustomLogoLink activeOnlyWhenExact={true} to="/" label="Home" handleClick={this.containerClose}/>
            <nav className="Navigation">
              <CustomMenuLink to="/about" label="About" handleClick={this.containerOpen} />
              <CustomMenuLink to="/projects" label="Projects" handleClick={this.containerOpen} />
              <CustomMenuLink to="/contact" label="Contact" handleClick={this.containerOpen} />
            </nav>
          </header>
          <div tabIndex="0" className={this.state.headerExpand ? "Container-expanded Container" : "Container"}>
            <Switch>
              <Route exact path="/" component={DefaultPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/contact" component={ContactPage} />
            </Switch>
          </div>
        </Router>
      </div >
    );
  }
}

class CustomLogoLink extends React.Component{
  render(){
    return(
      <Route
        path={this.props.to}
        exact={this.props.activeOnlyWhenExact}
        children={({ match }) => (
          <Link to={this.props.to} onClick={this.props.handleClick}>
            <img className={match ? "App-logo" : "App-logo App-logo-pin"} src={logo} alt="temp react logo"/>
          </Link>
        )}
      />
    );
  }
}

class CustomMenuLink extends React.Component {
  // access props for definitions, parent container will open if click is handled
  // handleClick either triggers containerOpen or containerClosed in parent function
  // it sets state of headerExpand, if its true then container will open up, else it'll stay closed or close
  render() {
    return (
      <Route
        path={this.props.to}
        exact={this.props.activeOnlyWhenExact}
        children={({ match }) => (
          <div className={match ? "colNeonBlue bgAlmostBlack" : "colBlue bgAlmostBlack"}>
            <Link to={this.props.to} onClick={this.props.handleClick}>{this.props.label}</Link>
          </div>
        )}
      />
    );
  }
}


export default App;
