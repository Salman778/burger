import React, { Component } from 'react'
import './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../Cockpit/Cockpit'

class App extends Component {
  state = {
  persons: [
    { id: 1, name: "Salman", age: 25 },
    { id: 2, name: "Ali", age: 18 },
    { id: 3, name: "Omar", age: 27 }
    ],
    showPersons: false
  }
  
  deletePersonHadler = (personId) => {
    const persons = [...this.state.persons]
    const personIndex = persons.findIndex(person => person.id = personId)
    persons.splice(personIndex, 1)
    this.setState({
      persons:persons
    })
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }
  
  onChangeHandler = (event, personId) => {
    const persons = [...this.state.persons]
    const personIndex = persons.findIndex(person => person.id === personId)
    persons[personIndex].name = event.target.value
    this.setState({
      persons: persons
    })
  }
  render(){
    let persons = null
    if(this.state.showPersons)
     persons = 
        <Persons 
        persons={this.state.persons} 
        click={this.deletePersonHadler}
        changed={this.onChangeHandler}/>
    
    return (
        <div className="App">
          <h1>{this.props.title}</h1>
          <Cockpit click={this.togglePersonsHandler}/>
          {persons}
        </div>
    )
  }
  
}

export default App
