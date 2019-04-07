import React from 'react';
import { DefaultProject, ProjectMotionArt, ProjectWifiOptimization } from './Projects.js'
import linkedinIcon from './assets/linkedin.svg'
import emailIcon from './assets/email.svg'
import phoneIcon from './assets/chat.svg'

export class DefaultPage extends React.Component {
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

export class AboutPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="About Page bgGrey">
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
}

export class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.nextProject = this.nextProject.bind(this);
    this.state = {
      currentProject: "MotionArt"
    }
  }
  getProject() {
    let project;
    switch (this.state.currentProject) {
      case "MotionArt":
        project = <ProjectMotionArt />;
        break;
      case "WifiOptimization":
        project = <ProjectWifiOptimization />;
        break;
      default:
        project = <DefaultProject />
        break;
    }
    return project;
  }

  nextProject(projectName) {
    this.setState({
      currentProject: projectName
    });
  }
  render() {
    return (
      <React.Fragment>
        <section className="Projects Page bgGrey">
          <h1>Things I've worked on</h1>
          <div className="Project-icons-list">
            <div className={this.state.currentProject === "MotionArt" ? "Project-icons Project-icons-selected bgAlmostBlack" : "Project-icons bgAlmostBlack"}
              onClick={this.state.currentProject !== "MotionArt" ?
                () => this.nextProject("MotionArt") : () => this.nextProject("Default")}>
              <p className="Project-name">MotionArt</p>
            </div>
            <div className={this.state.currentProject === "WifiOptimization" ? "Project-icons Project-icons-selected bgAlmostBlack" : "Project-icons bgAlmostBlack"}
              onClick={this.state.currentProject !== "WifiOptimization" ?
                () => this.nextProject("WifiOptimization") : () => this.nextProject("Default")}>
              <p className="Project-name">Wifi Opt.</p>
            </div>
          </div>
          <div className={this.state.currentProject !== "Default" ? "Container Container-expanded" : "Container"}>
            {this.getProject()}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export class ContactPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showEmailMe: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState({
      showEmailMe: !this.state.showEmailMe
    });
  }

  getComponent(){
    if(this.state.showEmailMe === true){
      return <EmailMe/>
    }else{
      return <React.Fragment></React.Fragment>
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="Contact Page bgGrey">
          <h1>Grab a hold of me!</h1>
          <a href="https://www.linkedin.com/in/angus-hon/" target="_blank" rel="noopener noreferrer">
            <img className="Contact-icons" src={linkedinIcon} alt="linkedin logo made by Freepik" />
            <span>https://www.linkedin.com/in/angus-hon/</span>
          </a>
          <a onClick={() => this.handleClick()}>
            <img className="Contact-icons" src={emailIcon} alt="email icon made by Freepik" />
            <span aria-label="email" tabIndex="0" onKeyPress={() => this.handleClick()}>angus_hon@sfu.ca</span>
          </a>
          <div className={this.state.showEmailMe ? "Container-expanded Container Container-email": "Container Container-email"}>
            {this.getComponent()}
          </div>
          <a>
            <img className="Contact-icons" src={phoneIcon} alt="phone icon made by Zurb" />
            <span aria-label="phone number">+1 (778) 788 9168</span>
          </a>
          <p className="Icon-reference"> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/<?=_('authors').'/'?>zurb" title="Zurb">Zurb</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> and editted by Angus Hon. </p>
        </section>
      </React.Fragment>
    );
  }
}

export class EmailMe extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form method="POST" action="http://www.sfu.ca/cgi-bin/mailto.pl">
          <label htmlFor="email">E-Mail Address</label><input name="email" size="36"/>
          <label htmlFor="name">Name</label><input name="name" size="36"/>
          <label htmlFor="body">Send a greeting:</label>
          <textarea name="body" rows="10" cols = "60">Send a greeting here</textarea>
          <input type="hidden" name="recipient" value="angus.hon@sfu.ca"/>
          <input type="hidden" name="subject" value="Sample web form"/>
          <input type="hidden" name="redirect_url" value="<a href=http://www.sfu.ca/acs&gt; the IT Services Home Page</a&gt;"/>
          <div className="Container-email-buttons">
            <button role="button" type="reset" value="Clear Form" className="button-nav">Clear</button>
            <button role="button" type="submit" value="Send Form" className="button-nav">Send</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}