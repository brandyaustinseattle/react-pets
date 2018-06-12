import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet';
import NewPetForm from './NewPetForm';
import Status from './Status';
import axios from 'axios';

const PETS_URL = 'https://petdibs.herokuapp.com/pets';

class PetCollection extends Component {
  static propTypes = {
    updateStatusCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    console.log('in componentDidMount()');
    axios.get(PETS_URL)
      .then((response) => {
        console.log('success');
        console.log(response);

        this.props.updateStatusCallback('successfully loaded pets', 'success');

        const pets = response.data.slice(0,100);
        this.setState({pets: pets});
      })
      .catch((error) => {
        console.log('error');
        console.log(error);

        this.props.updateStatusCallback(error.message, 'error');
      });
  }

  addPet = (pet) => {
    let updatedPets = this.state.pets;
    updatedPets.push(pet);

    this.setState({pets: updatedPets});
  }

  render() {
    const pets = this.state.pets.map((pet, index) => {
      return <Pet key={index} name={pet.name} breed={pet.breed} age={pet.age} about={pet.about} />
    });

    return (

      <section>
        {pets}
        <NewPetForm addPetCallback={this.addPet}/>
      </section>
    );
  }
}

export default PetCollection;
