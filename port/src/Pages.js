import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { DefaultProject, ProjectMotionArt, ProjectWifiOptimization } from './Projects.js'
import linkedinIcon from './assets/linkedin.svg'
import emailIcon from './assets/email.svg'
import githubMark from './assets/GitHub-Mark.svg'

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
          <p>The URL you typed in does not exist... yet? Who knows, maybe it will one day. Maybe you misspelled it? If not, I'm as lost as you are... Use the navigation above to go to an existing page!</p>
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
            <p>He's a data scientist / software engineer to be.</p>

            <h2>What is Angus?</h2>
            <p>He is a human who is ethnically Chinese that was born / raised in Vancouver, Canada. Angus also happens to be a type of beef.</p>

            <h2>When is Angus?</h2>
            <p>Now.</p>

            <h2>Where is Angus?</h2>
            <p>He is currently in Vancouver, BC, Canada.</p>

            <h2>Why is Angus?</h2>
            <p>That is a question he asks himself too frequently.</p>

            <h2>How is Angus?</h2>
            <p>He is currently finishing his undergraduate studies at Simon Fraser University. In his spare time, he enjoys hanging out with his friends, working on random projects, playing video games, and watching the NBA.</p>
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
        <section className="Page bgAccent2">
          <h1>Things I've worked on</h1>
          <div className="Project-icons-list">
            <div className={this.state.currentProject === "MotionArt" ? "Project-icons Project-icons-selected bgAccent1" : "Project-icons bgAccent1"}
              onClick={this.state.currentProject !== "MotionArt" ?
                () => this.nextProject("MotionArt") : () => this.nextProject("Default")}>
              <p className="Project-name">MotionArt</p>
            </div>
            <div className={this.state.currentProject === "WifiOptimization" ? "Project-icons Project-icons-selected bgAccent1" : "Project-icons bgAccent1"}
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
  constructor(props) {
    super(props);
    this.state = {
      showEmailMe: false, 
      myEmail: "angus_hon@sfu.ca"
    }
    this.handleClick = this.handleClick.bind(this);
    this.toastCopyClip = "copy2Clipboard";
  }

  handleClick() {
    // this.setState({
    //   showEmailMe: !this.state.showEmailMe
    // });
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
    }
    
  }

  getComponent() {
    if (this.state.showEmailMe === true) {
      return <EmailMe />
    } else {
      return <React.Fragment></React.Fragment>
    }
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
            <a>
              <img className="Contact-icons" src={emailIcon} alt="email icon made by Freepik" />            
              <span aria-label="email" tabIndex="0" onKeyPress={() => this.handleClick()}>angus_hon@sfu.ca</span>          
            </a>
          </CopyToClipboard>
          <ToastContainer newestOnTop={true}/>
          {/* 
          <div className={this.state.showEmailMe ? "Container-expanded Container Container-email" : "Container Container-email"}>
            {this.getComponent()}
          </div>
           */}
          <p className="Icon-reference"> GitHub logo from <a href="https://github.com/logos" title="GitHub" target="_blank" rel="noopener noreferrer">https://github.com/logos</a>. LinkedIn and Mail icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> and <a href="https://www.flaticon.com/<?=_('authors').'/'?>zurb" title="Zurb" target="_blank" rel="noopener noreferrer">Zurb</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a> and is editted by Angus Hon.</p>
        </section>
      </React.Fragment>
    );
  }
}

export class EmailMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      nameValue: '',
      bodyValue:''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ 
      emailValue: event.target.value 
    }/*,
      ()=>console.log(this.state.emailValue)*/
    );
  }

  handleNameChange(event){
    this.setState({ 
      nameValue: event.target.value 
    }/*,
      ()=>console.log(this.state.nameValue)*/
    );
  }

  handleBodyChange(event){
    this.setState({ 
      bodyValue: event.target.value 
    }/*,
      ()=>console.log(this.state.bodyValue)*/
    );
  }

  handleClear(event){
    event.preventDefault();
    this.setState({
      emailValue: '',
      nameValue: '',
      bodyValue: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let userData ={
      newUser:{
        email: this.state.emailValue,
        name: this.state.nameValue,
        message: this.state.bodyValue
      }
    };
    const url = 'http://www.sfu.ca/cgi-bin/mailto.pl';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    fetch(url,{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(/*response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })}*/
        function(response) {
          console.log(response);
          return response.json();
        }).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">E-Mail Address</label>
          <input name="email" placeholder="Your Email" value={this.state.emailValue} onChange={this.handleEmailChange}/>
          
          <label htmlFor="name">Name</label>
          <input name="name" placeholder="Your name" value={this.state.nameValue} onChange={this.handleNameChange}/>

          <label htmlFor="body">Send a greeting:</label>
          <textarea name="body" rows="10" cols="60" placeholder="Send me a message!" value={this.state.bodyValue} onChange={this.handleBodyChange}/>
          <p>
            <input type="hidden" name="recipient" defaultValue="angus_hon@sfu.ca" />
            <input type="hidden" name="subject" defaultValue="Sample web form" />
            {/* <input type="hidden" name="redirect_url" defaultValue="<a href=index.html&gt; Home Page</a&gt;" /> */}
            {/* <div className="Container-email-buttons"> */}
              <button type="reset" value="Clear Form" className="button-nav" onClick={this.handleClear}>Clear</button>
              <button type="submit" value="Send Form" className="button-nav">Send</button>
            {/* </div> */}
          </p>
        </form>
      </React.Fragment>
    );
  }
}