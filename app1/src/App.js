import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {
    text: "my friend from Pluto"
  };
  this.updateText = this.updateText.bind(this);
}
updateText() {
  this.setState({
    text: "my friend from Uranus"
  });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>{this.props.msg}, {this.state.text}!</h1>
            <button class="button" onClick={this.updateText} width="60" height="100">Click me!</button>
          </p>
         
        </header>
      </div>
    );
  }
}

export default App;
