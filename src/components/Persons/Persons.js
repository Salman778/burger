import React, {Component} from 'react'
import './Persons.css'
import Person from './Person/Person'

class Persons extends Component {
    render(){
        return(
        this.props.persons.map(person => <Person 
        name={person.name} 
        age={person.age} 
        key={person.id}
        click={() => this.props.click(person.id)}
        changed={(event) => this.props.changed(event, person.id)}
        />))
    }
}
export default Persons