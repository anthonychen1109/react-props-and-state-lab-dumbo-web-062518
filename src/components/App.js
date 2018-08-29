import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  setPet = (animal) => {
    this.setState({
      ...this.state.pets,
      filters: {
        type: animal
      }
    })
  }

  findPets = () => {
    if (this.state.filters.type === "all") {
      fetch("/api/pets").then(response => response.json())
        .then( pets => this.setState({ pets }))
    } else {
       fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(response => response.json())
        .then( pets => this.setState({ pets }))
    }
  }

  adoptPet = (id) => {
    let pets = this.state.pets.map(pet => {return pet.id === id ? {...pet, isAdopted: true} : pet})
    this.setState({
      pets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.setPet} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
