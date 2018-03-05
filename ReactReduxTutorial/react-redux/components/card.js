import React from 'react';
import PropTypes from 'prop-types';

import styles from './card.less';

const Card = props => {

    let child = typeof props.children === 'object' && React.Children.only(props.children);
    if (child) {
        child = React.cloneElement(child, {
            className: `${child.props.className || ''} ${styles.card}`.trim()
        });
    }

    return child || <div className={styles.card}>{props.children}</div> || null;
};
Card.prototype.propTypes = {
    children: PropTypes.element.isRequired
};

export default Card;
