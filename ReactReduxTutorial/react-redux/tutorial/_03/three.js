import React from 'react';
import myImg from './cat.webp';

const Pet = ({ name, breed, conditions }) => (
    <li>
        <span>{name} is a {breed}.</span>
        {conditions && <span> {name} has {conditions.join(', ')}</span>}
    </li>
);

class Three extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor() {
        super();

        this.state = {
            pets: [
                { name: 'Havoc', breed: 'Black Lab' },
                { name: 'Lilah', breed: 'Border Collie', conditions: ['heartworm'] }
            ],
            title: 'Classes'
        };
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('submitted');

        const newPets = [...this.state.pets, {
            name: this.name.value,
            breed: this.breed.value
        }];

        this.setState({
            pets: newPets,
            catchyThing: 'New Pets Available!'
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                {this.state.catchyThing && <h2>{this.state.catchyThing}</h2>}

                <form onSubmit={e => this.onSubmit(e)}>
                    <label>
                        Name: <input ref={ref => (this.name = ref)} />
                    </label>
                    <label>
                        Breed: <input ref={ref => (this.breed = ref)} />
                    </label>
                    <button type="submit">
                        Add
                    </button>
                </form>

                <img src={myImg} alt="the cat" />

                <ul>
                    {this.state.pets.map(it => <Pet key={it.name} {...it} />)}
                </ul>
            </div>
        );
    }
}

export default Three;
