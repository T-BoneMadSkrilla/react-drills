import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {message: " "}
  }

  myMethod(key){ this.setState({message: key})}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          
        <input onChange={(e) => this.myMethod(e.target.value)}/>
        </div>
        <h1 className="App-intro">
         {this.state.message}
        </h1>
      </div>
    );
  }
}

export default App;
