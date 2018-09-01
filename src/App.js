import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    data: [
      {username: "Sarita", address: "Kilo"},
      {username: "Dhiraj", address: "Meri-Rastila"},
      {username: "[Type to change]", address: "[unknown]"}
    ] 
  }

  switchNameHandler = () => {
      this.setState({
        data: [
          {username: "Sarita Khanal", address: "Kilo"},
          {username: "Dhiraj Koirala", address: "Meri-Rastila"},
          {username: "[Type to change]", address: "[unknown]"}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      data: [
        {username: "Sarita", address: "Kilo"},
      {username: "Dhiraj", address: "Meri-Rastila"},
      {username: event.target.value, address: "[unknown]"}
    ]
  })
  }

  render() {
    return (
      <div className="App">
        <h1>
          <em>
              <UserOutput username="Sachenae" address="Espoo Keskus" />

              <UserInput changed={this.nameChangeHandler}/>
              
              <UserOutput
                username={this.state.data[0].username} 
                address={this.state.data[0].address} 
              />

              <UserOutput
                username={this.state.data[1].username} 
                address={this.state.data[1].address} 
              />

              <UserOutput
                username={this.state.data[2].username} 
                address={this.state.data[2].address} 
                changedName={this.nameChangeHandler}
              />
              <button onClick={this.switchNameHandler}>Show Full Names</button>
            </em>
          </h1>
      </div>
    );
  }
}

export default App;
