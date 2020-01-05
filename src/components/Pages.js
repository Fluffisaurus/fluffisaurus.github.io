import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { CustomProjectLink } from './RouterLinks.js'
import { RouteWithSubRoutes } from './RouterLinks.js';
import { Route } from "react-router-dom";
import { Switch } from "react-router";

import linkedinIcon from '../assets/linkedin.svg'
import emailIcon from '../assets/email.svg'
import githubMark from '../assets/GitHub-Mark.svg'

export class DefaultPage extends React.Component {
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

export class DNEPage extends React.Component{
  render(){
    return(
      <React.Fragment>
        <section className="Page bgAccent2">
          <h1>Oops!</h1>
          <p>The URL you typed in does not exist... yet? Who knows, maybe it will one day. Perhaps you misspelled it? If not, I'm as lost as you are.</p>
          <p>Use the navigation above to go to an existing page!</p>
        </section>
      </React.Fragment>
    );
  }
}

export class AboutPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="Page bgAccent2">
          <h1>5W + 1H = Angus H.</h1>
          <div className="About-info">
            <h2>Who is Angus?</h2>
            <p>He's a software engineer to be.</p>

            <h2>What is Angus?</h2>
            <p>He is a human who is ethnically Chinese that was born / raised in Vancouver, Canada. As noted by many, Angus also happens to be a type of beef.</p>

            <h2>Where is Angus?</h2>
            <p>He is currently in Vancouver, BC, Canada.</p>

            <h2>When is Angus?</h2>
            <p>Now.</p>

            <h2>Why is Angus?</h2>
            <p>That is a question he frequently asks himself.</p>

            <h2>How is Angus?</h2>
            <p>He's doing fine, thanks. He is currently finishing his undergraduate studies at Simon Fraser University. In his spare time, he enjoys hanging out with his friends, working on random projects, playing video games, and watching the NBA.</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export class DNEProject extends React.Component{
  render(){
  return(
    <React.Fragment>
        <section className="Page bgAccent2">
          <h1>Oops! The project "{(window.location.href).replace(/.*\//, "")}" does not exist!</h1>
          <p>There may have been a typo in the URL you inputted. The naming convention I use for my project domains are ".../projects/project-name". You may have mistyped the project name if you are looking for a specific one!</p>
          <p>Click any of the projects above to see my existing ones!</p>
        </section>
      </React.Fragment>
  );
  }
}

export class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: "motion-art"
    }
    this.setCurrProject = this.setCurrProject.bind(this);
  }

  setCurrProject(projectName){
    this.setState({
      currentProject: projectName
    }/*,()=> console.log(this.state.currentProject)*/);
  }

  render() {
    return (
      <React.Fragment>
        <section className="Page bgAccent2">
          <h1>Things I've worked on</h1>
          <div className="Project-icons-list">
            <CustomProjectLink to={"/projects/motion-art"} label="MotionArt" handleMenuClick={() => this.setCurrProject("motion-art")} />
            <CustomProjectLink to={"/projects/ant-tower-defense"} label="ATD" handleMenuClick={() => this.setCurrProject("ant-tower-defense")} />
            <CustomProjectLink to={"/projects/climate-analysis"} label="ClimateAnalysis" handleMenuClick={() => this.setCurrProject("climate-analysis")} />
            <CustomProjectLink to={"/projects/wifi-opt"} label="WifiOpt" handleMenuClick={() => this.setCurrProject("wifi-opt")} />
          </div>
          <div>
            <Switch>
              {this.props.routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Route component={DNEProject}/>
            </Switch>     
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      myEmail: "angushon96@gmail.com"
    }
    this.handleClick = this.handleClick.bind(this);
    this.toastCopyClip = "copy2Clipboard";
  }

  handleClick() {
    if(!toast.isActive(this.toastCopyClip)){
      toast.info("Copied to clipboard!", 
      {
        toastId: this.toastCopyClip,
        autoClose: 3000,
        position: "bottom-center",
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        transition: Slide
      });
    } //if
  }

  render() {
    return (
      <React.Fragment>
        <section className="Page bgAccent2">
          <h1>Grab a hold of me!</h1>
          <a href="https://github.com/Fluffisaurus/" target="_blank" rel="noopener noreferrer">
            <img className="Contact-icons" src={githubMark} alt="GitHub Mark by GitHub" />
            <span>https://github.com/Fluffisaurus/</span>
          </a>
          <a href="https://www.linkedin.com/in/angus-hon/" target="_blank" rel="noopener noreferrer">
            <img className="Contact-icons" src={linkedinIcon} alt="linkedin logo made by Freepik" />
            <span>https://www.linkedin.com/in/angus-hon/</span>
          </a>
          <CopyToClipboard text={this.state.myEmail} onCopy={() => this.handleClick()}>
            {/* eslint-disable-next-line */}
            <a>
              <img className="Contact-icons" src={emailIcon} alt="email icon made by Freepik" />            
              <span aria-label="email" tabIndex="0" onKeyPress={() => this.handleClick()}>{this.state.myEmail}</span>          
            </a>
          </CopyToClipboard>
          <ToastContainer newestOnTop={true}/>
        </section>
      </React.Fragment>
    );
  }
}