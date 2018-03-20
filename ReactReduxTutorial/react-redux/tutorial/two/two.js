import React from 'react';

const pets = [
    { name: 'Havoc', breed: 'Black Lab' },
    { name: 'Lilah', breed: 'Border Collie' },
];

const Two = () => (
    <div>
        <h1>Props</h1>

        <ul>
            <li>{pets[0].name}</li>
            <li>{pets[1].name}</li>
        </ul>
    </div>
);

export default Two;
