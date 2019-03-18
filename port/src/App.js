import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="Navigation">
            <a href="">About Me</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
