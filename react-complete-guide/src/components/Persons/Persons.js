import React from 'react';

import Person from './Person/Person'

const persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                // click={this.deletePersonHandler.bind(this, index)}
                click={() => props.clicked(index)}
                // important key property to detect change, give uniqu value
                key={person.id}
                changed={(event) => props.changed(event, person.id)}
            />
        })
    );
}

export default persons;