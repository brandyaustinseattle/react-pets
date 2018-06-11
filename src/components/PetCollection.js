import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet';
import NewPetForm from './NewPetForm';

class PetCollection extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  constructor(props) {
    super();

    this.state = {
      pets: props.data
    };
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
