import React from 'react';
import PropTypes from 'prop-types';

import styles from './card.less';

const Card = ({ children }) => {

    let child = typeof children === 'object' && React.Children.only(children);
    if (child) {
        child = React.cloneElement(child, {
            className: `${child.props.className || ''} ${styles.card}`.trim()
        });
    }

    return child || <div className={styles.card}>{children}</div> || null;
};
Card.propTypes = {
    children: PropTypes.element.isRequired
};

export default Card;
