import React from 'react';
import{ Route, Link } from "react-router-dom";
import myLogo2 from './assets/myLogo2.svg';

export class CustomLogoLink extends React.Component{
  render(){
    return(
      <Route
        path={this.props.to}
        exact={this.props.activeOnlyWhenExact}
        children={({ match }) => (
          <Link to={this.props.to} onClick={this.props.handleLogoClick}>
            <img className={match ? "App-logo" : "App-logo App-logo-pin"} src={myLogo2} alt="my logo"/>
          </Link>
        )}
      />
    );
  }
}

export class CustomMenuLink extends React.Component {
  // access props for definitions, parent container will open if click is handled
  // handleClick either triggers containerOpen or containerClosed in parent function
  // it sets state of headerExpand, if its true then container will open up, else it'll stay closed or close
  // path defines its current public url + the url path passed in
  render() {
    return (
      <Route
        path={this.props.to}
        exact={this.props.activeOnlyWhenExact}
        children={({ match }) => (
          <div className="Nav-link">
            <Link to={this.props.to} onClick={this.props.handleMenuClick} className={match ? "colSecondary bgAccent1" : "colPrimary bgAccent1"}>{this.props.label}</Link>
          </div>
        )}
      />
    );
  }
}

