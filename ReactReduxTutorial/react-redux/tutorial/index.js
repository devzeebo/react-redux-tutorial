import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home';

document.addEventListener("DOMContentLoaded", () => {

    const target = document.getElementById('app');
    ReactDOM.render(<Home />, target);
});
