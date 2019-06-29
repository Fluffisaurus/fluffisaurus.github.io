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

// help to find exact match by having an exact value per page: https://stackoverflow.com/a/54381562
// documentation: https://reacttraining.com/react-router/web/example/route-config
export function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.exact} 
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export class CustomProjectLink extends React.Component{
  render() {
    return (
      <Route
        path={this.props.to}
        exact={this.props.activeOnlyWhenExact}
        children={({ match }) => (
          <div className="Project-name">
            <Link replace to={this.props.to} onClick={this.props.handleMenuClick} className={match ? "colSecondary bgAccent1" : "colPrimary bgAccent1"}>{this.props.label}</Link>
          </div>
        )}
      />
    );
  }
}