import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home';

document.addEventListener("DOMContentLoaded", () => {

    const target = document.getElementById('app');
    if (target) {
        ReactDOM.render(<Home />, target);
    } else {
        console.warn('tried to load and failed :(');
    }
});
