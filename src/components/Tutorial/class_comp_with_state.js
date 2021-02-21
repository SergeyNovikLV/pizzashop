import React, { Component } from 'react';
import Pica from './Pica/Pica.js'
// import ReactDOM from 'react-dom';

class App extends Component  {
  state = {
    picas: [
      { name: 'Sieru', price: 2.80 },
      { name: 'Desu', price: 3.80 },
      { name: 'Sieru', price: 4.80},
      { name: 'Sieru', price: 5.80 },
    ]
  }
  
  swithcHandler = () => {
  this.setState({
    picas: [
      { name: 'Sieru', price: 5 },
      { name: 'Desu', price: 7 },
      { name: 'Sieru', price: 8},
      { name: 'Sieru', price: 9 },
    ]
  })
  }
  
  render(){
    return (
      <div className="App">
        <button onClick={this.swithcHandler}>Big pica</button>
        <Pica name={this.state.picas[0].name} price={this.state.picas[0].price} />
        <Pica name={this.state.picas[1].name} price={this.state.picas[1].price} />
        <Pica name={this.state.picas[2].name} price={this.state.picas[2].price} />
        <Pica name={this.state.picas[3].name} price={this.state.picas[3].price} />
      
      </div>
    );
 };
}

export default App;
