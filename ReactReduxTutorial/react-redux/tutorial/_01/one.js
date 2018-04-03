import React from 'react';

import './one.global.less';
import styles from './one.less';

const message = (a, b) => a + b;

const ulStyle = {
    backgroundColor: 'blue',
};

const One = () => (
    <div>
        <h1 className={styles.tutorialTitle} id={Math.random() * 10}>
            {message(1, 2)}
            {message(3, 4)}
        </h1>
        <ul style={ulStyle}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
);
export default One;
