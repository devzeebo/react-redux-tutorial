import React from 'react';

const pets = [
    { name: 'Havoc', breed: 'Black Lab' },
    { name: 'Lilah', breed: 'Border Collie', conditions: ['heartworm'] },
    { name: 'Bear', breed: 'German Shepherd', conditions: [] }
];

const Pet = ({ name, breed }) => <li>{name} is a {breed}</li>;

const Two = () => (
    <div>
        <h1>Props</h1>

        <ul>
            {pets.length >= 0 ? pets.map(it => <Pet key={it.name} {...it} />) : "No Pets"}
        </ul>
    </div>
);

export default Two;
