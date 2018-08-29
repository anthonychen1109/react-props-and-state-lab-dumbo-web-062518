import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () => {
    console.log(this.props.pets);
    return this.props.pets.map((pet, index) => {
      return <Pet
        key={index}
        pet={pet}
        onAdoptPet={this.props.onAdoptPet}
      />
    })
  }

  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser;
