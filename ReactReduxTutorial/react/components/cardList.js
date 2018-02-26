import React from 'react';
import PropTypes from 'prop-types';

import styles from './cardList.less';
import Card from './card';

const CardList = props => (
    <div className={styles.cardList}>
        {props.children.map((it, idx) => <Card key={idx}>{it}</Card>)}
    </div>
);
CardList.prototype.propTypes = {
    children: PropTypes.element.isRequired
};

export default CardList;
