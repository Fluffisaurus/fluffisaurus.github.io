import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import * as Router from "react-router";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast, Slide } from 'react-toastify';
import Switch from "react-switch";

import './css/App.css';
import './css/palette.css';
import './css/hexagon.css';

import { DNEPage } from './components/Pages.js';
import { CustomLogoLink, CustomMenuLink, RouteWithSubRoutes } from './components/RouterLinks.js';
import { routes } from './components/Routes.js';
import linkedinIcon from './assets/linkedin.svg';
import emailIcon from './assets/email.svg';
import githubMark from './assets/GitHub-Mark.svg';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.containerOpen = this.containerOpen.bind(this);
    this.containerClose = this.containerClose.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.randomPos = this.randomPos.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.state = {
      headerExpand: false,
      width: window.innerWidth,
      height: window.innerHeight,
      posx: [0, 0, 0],
      posy: [0, 0, 0],
      rotate: 0,
      theme: "dark",
      checked: false,
      myEmail: "angushon96@gmail.ca"
    }
    this.handleClick = this.handleClick.bind(this);
    this.toastCopyClip = "copy2Clipboard";
  }

  // grab window dimensions on load https://stackoverflow.com/a/42141641
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    this.randomPos(); //initial randomize
    this.timePassed = setInterval(()=>this.randomPos(), 6500);

    //can probably be done better with react-router by checking current location within router
    if((window.location.href).replace(/.*\//, "") !== ""){
      this.containerOpen();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  randomPos() {
    if(!this.state.headerExpand){
      this.setState({
        posx: [Math.random() * this.state.width, Math.random() * this.state.width, Math.random() * this.state.width],
        posy: [Math.random() * this.state.height, Math.random() * this.state.height, Math.random() * this.state.height],
        rotate: Math.random() * 360
      });
    }
  }

  // https://medium.com/@harishv6665_49536/theming-with-react-js-or-any-in-minutes-with-css-variables-11d4ebecdb41
  toggleTheme(){
    const theme = this.state.theme === "dark" ? "light" : "dark";
    const checked = this.state.checked === false ? true : false;
    this.setState({ 
      checked: checked,
      theme: theme 
    });
    console.log("changed theme to: " + theme);
    document.documentElement.classList.add("theme-transition");
    document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(function() {
      document.documentElement.classList.remove("theme-transition")
    }, 1000);
  }

  containerOpen() {
    this.setState({ //if headerexpand is set to true, opens container height > 0 to show components
      headerExpand: true
    }/*,() => {console.log("headerExpand: " + this.state.headerExpand)}*/);
  }

  containerClose() {
    this.setState({
      headerExpand: false
    }/*,() => {console.log("headerExpand: " + this.state.headerExpand)}*/);
  }

  handleClick() {
    if(!toast.isActive(this.toastCopyClip)){
      toast.info(`email copied to clipboard!`, 
      {
        bodyClassName: "Toast-container",
        toastId: this.toastCopyClip,
        autoClose: 2000,
        position: "bottom-center",
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        transition: Slide,
        newestOnTop: true,
      });
    } //if
  }

  render() {
    const hex = {
      1 : {width: this.state.width / 2,
        height: this.state.height / 2,
        left: (this.state.posx[0] - this.state.width / 2) <= 0 ? this.state.width/10 : this.state.posx[0] - this.state.width / 2,
        top: (this.state.posy[0] - this.state.height / 2) <= 0 ? this.state.height/10 : this.state.posy[0] - this.state.height / 2,
        transform: 'rotate(' + this.state.rotate + 'deg)'
      },
      2 : {width: this.state.width / 2,
        height: this.state.height / 2,
        left: (this.state.posx[1] - this.state.width / 2) <= 0 ? 0 : this.state.posx[1] - this.state.width / 2,
        top: (this.state.posy[1] - this.state.height / 2) <= 0 ? 0 : this.state.posy[1] - this.state.height / 2,
        transform: 'rotate(' + this.state.rotate * 3 / 4 + 'deg)'
      },
      3 : {width: this.state.width / 2,
        height: this.state.height / 2,
        left: (this.state.posx[2] - this.state.width / 2) <= 0 ? 0 : this.state.posx[2] - this.state.width / 2,
        top: (this.state.posy[2] - this.state.height / 2) <= 0 ? 0 : this.state.posy[2] - this.state.height / 2,
        transform: 'rotate(' + this.state.rotate * 1 / 2 + 'deg)'
      }
    };
    return (
      <div className="App bgAccent1">
        <div id="hexagon_div">
          <svg version="1.1" className="hexagon_formation" viewBox="0 0 503.7 522.6" id="hex1" style={hex[1]}>
            <g>
              <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="201.7,434.5 151.7,347.9 201.7,261.3 301.7,261.3 351.7,347.9 301.7,434.5 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="51.7,521.1 1.7,434.5 51.7,347.9 151.7,347.9 201.7,434.5 151.7,521.1 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="201.7,261.3 151.7,174.7 201.7,88.1 301.7,88.1 351.7,174.7 301.7,261.3 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="351.9,347.9 301.9,261.3 351.9,174.7 451.9,174.7 501.9,261.3 451.9,347.9 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="51.7,347.9 1.7,261.3 51.7,174.7 151.7,174.7 201.7,261.3 151.7,347.9 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex1"} points="51.7,174.7 1.7,88.1 51.7,1.5 151.7,1.5 201.7,88.1 151.7,174.7 	" />
            </g>
          </svg>

          <svg version="1.1" className="hexagon_formation" viewBox="0 0 650.1 433" id="hex2" style={hex[2]}>
            <g>
              <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="350.1,259.8 300.1,173.2 350.1,86.6 450.1,86.6 500.1,173.2 450.1,259.8 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="500.1,173.2 450.1,86.6 500.1,0 600.1,0 650.1,86.6 600.1,173.2 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="350.2,433 300.2,346.4 350.2,259.8 450.2,259.8 500.2,346.4 450.2,433 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="200.1,346.4 150.1,259.8 200.1,173.2 300.1,173.2 350.1,259.8 300.1,346.4 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="200.1,173.2 150.1,86.6 200.1,0 300.1,0 350.1,86.6 300.1,173.2 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex2"} points="50,433 0,346.4 50,259.8 150,259.8 200,346.4 150,433 	" />
            </g>
          </svg>

          <svg version="1.1" className="hexagon_formation" viewBox="0 0 653.7 436" id="hex3" style={hex[3]}>
            <g>
              <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="351.8,261.3 301.8,174.7 351.8,88.1 451.8,88.1 501.8,174.7 451.8,261.3 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="351.9,434.5 301.9,347.9 351.9,261.3 451.9,261.3 501.9,347.9 451.9,434.5 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="502,347.9 452,261.3 502,174.7 602,174.7 652,261.3 602,347.9 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="502,174.7 452,88.1 502,1.5 602,1.5 652,88.1 602,174.7 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="201.8,174.7 151.8,88.1 201.8,1.5 301.8,1.5 351.8,88.1 301.8,174.7 	" />
              <polygon className={this.state.headerExpand ? "hex" : "hex hex3"} points="51.7,261.3 1.7,174.7 51.7,88.1 151.7,88.1 201.7,174.7 151.7,261.3 	" />
            </g>
          </svg>
        </div>
        
        {/*
        Remember to set homepage: "https://www.yourserver.ca/path/subdirectory/project/" in package.json
        links that helped: 
          https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1
          https://muffinman.io/react-router-subfolder-on-server/
          https://reacttraining.com/react-router/web/api/HashRouter
        using HashRouter, look at import statement!!! 
        base url is left empty for hashrouter since its history references its hash location already
        if I were to use BrowserRouter, I should reference basename to be process.env.PUBLIC_HTML
        */}
        <HashRouter basename="">
          <header className={this.state.headerExpand ? "App-header App-header-expanded" : "App-header App-header-compressed"}>
            <button className={this.state.headerExpand ? "button-nav Theme-button Theme-button-expanded" : "button-nav Theme-button"} 
              onClick={()=>this.toggleTheme()}>
              {/* display the name of the theme to change to */}
              switch to: {this.state.theme === "dark" ? "light" : "dark"} theme
            </button>
            <Switch
              checked={this.state.checked}
              onChange={this.toggleTheme}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
              id="material-switch"
            />
            <div className={this.state.headerExpand ? "Logo-group Logo-group-pinned" : "Logo-group"}>
              <CustomLogoLink activeOnlyWhenExact={true} to= "/" label="Home" handleLogoClick={this.containerClose} headerExpand={this.state.headerExpand}/>
              <div className="Contact-group">
                <a href="https://github.com/Fluffisaurus/" target="_blank" rel="noopener noreferrer">
                  <img className="Contact-icons bgAccent1" src={githubMark} alt="GitHub Mark by GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/angus-hon/" target="_blank" rel="noopener noreferrer">
                  <img className="Contact-icons bgAccent1" src={linkedinIcon} alt="linkedin logo made by Freepik" />
                </a>
                <CopyToClipboard text={this.state.myEmail} onCopy={() => this.handleClick()}>
                  {/* eslint-disable-next-line */}
                  <a>
                    <img className="Contact-icons bgAccent1" src={emailIcon} alt="email icon made by Freepik" onKeyPress={() => this.handleClick()}/>        
                  </a>
                </CopyToClipboard>
                <ToastContainer/>
              </div>
            </div>
            <nav className="Navigation">
              <CustomMenuLink to="/about" label="About" handleMenuClick={this.containerOpen} />
              <CustomMenuLink to="/projects/motion-art" label="Projects" handleMenuClick={this.containerOpen} />
              {/* <CustomMenuLink to="/contact" label="Contact" handleMenuClick={this.containerOpen} /> */}
            </nav>
          </header>
          <div tabIndex="0" className={this.state.headerExpand ? "Container-expanded Container" : "Container"}>
            <Router.Switch>
              {
                routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))
              }
              <Route component={DNEPage} />
            </Router.Switch> 
          </div>
        </HashRouter>
      </div >
    );
  }
}

export default App;
