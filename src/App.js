import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [
        {
          name: 'dracula',
          id: 1
        },
        {
          name: 'zombie',
          id: 2
        }, 
        {
          name: 'freskinestan',
          id: 3
        },
      ]
    }
  }
  render() {
    const {monsters} = this.state
    return (
      <div className="App">
      { monsters && monsters.map(monster => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
      </div>
    )
  }
}

export default App;

