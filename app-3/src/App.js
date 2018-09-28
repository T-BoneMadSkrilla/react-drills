import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      stros: "",
      bestTeam: [
        "Astros",
        "are",
        "the",
        "best",
        "team"
      ]
    }
  }

  handleChange( filter ) {
    this.setState({ stros: filter })
  }

  render() {
    let myboyz = this.state.bestTeam.filter( (element, index) => {
      return element.includes( this.state.stros );
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })

    return (
      <div className="App">

        <input onChange={ (e) => this.handleChange( e.target.value ) } type="text" />

        { myboyz }
      </div>
    );
  }
}

export default App;
