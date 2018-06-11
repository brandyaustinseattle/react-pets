// Chef, Indeed, Amazon Kubernetes, Hulu, Amazon Subscription Boxes, Nordstrom

import React, { Component } from 'react';
import './App.css';
import PetCollection from './components/PetCollection';

class App extends Component {
  render() {

    const petData = [
      {
        name: 'Jerome',
        breed: 'Pitbull',
        age: 3,
        about: 'Sweet and lovely'
      },
      {
        name: 'Stanley',
        breed: 'Cat',
        age: 11,
        about: 'Aged intelligence'
      }
    ];

    return (

      <div className="App">
        <PetCollection data={petData} />
      </div>

    );
  }
}

export default App;
