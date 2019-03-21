import React from 'react';
import { DefaultProject, ProjectMotionArt } from './Projects.js'
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
}

export class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.nextProject = this.nextProject.bind(this);
    this.state = {
      currentProject: "Default"
    }
  }
  getProject(){
    let project;
    switch(this.state.currentProject){
      case "MotionArt":
        project = <ProjectMotionArt/>;
        break;
      default:
        project = <DefaultProject/>
        break;
    }
    return project;
  }

  nextProject(projectName){
    this.setState({
      currentProject: projectName
    });
  }
  render() {
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
}

export class ContactPage extends React.Component {
  render() {
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
}