import React, { Component } from 'react';
import './App.css';
import CardList from './Components/card-list/card-list';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then(users => this.setState({monsters: users}))

  }
  
  

  render() {
    const {monsters} = this.state
    return (
      <div className="App">
      <CardList monsters={monsters} />
      </div>
    )
  }
}

export default App;

