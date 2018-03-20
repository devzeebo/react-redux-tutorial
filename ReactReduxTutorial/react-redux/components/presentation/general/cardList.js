import React from 'react';
import PropTypes from 'prop-types';

import styles from './cardList.less';
import Card from './card';

const CardList = ({ children, className }) => (
    <div className={[className, styles.cardList].join(' ')}>
        {children.map((it, idx) => <Card key={idx}>{it}</Card>)}
    </div>
);
CardList.propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string
};
CardList.defaultProps = {
    className: ''
};

export default CardList;
