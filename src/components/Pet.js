import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pet extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number,
    about: PropTypes.string
  };

  render() {
    return (
      <section>
        {this.props.name}
        {this.props.breed}
        {this.props.age}
        {this.props.about}
      </section>
    )
  }
}

export default Pet;
