import React, { Component } from 'react';

import './App.css';

class App extends Component {


  constructor(){

    super();

    this.state = { names: ['Tyler', ' Jerry', ' Ben']}

  }


  render() {

    let coolDudez = this.state.names.map( (element, index) => {return (<h2 key={index}> {element} </h2>)})

    return (
      <div className="App">
        <div className="App-header">
          
          { coolDudez }
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
