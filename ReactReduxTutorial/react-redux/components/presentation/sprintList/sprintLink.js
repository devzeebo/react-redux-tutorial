import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './sprintList.less';

const SprintLink = props => (
    <Link className={styles.sprint} to={`/sprints/${props.sprint.guid}`}>
        {props.sprint.title}
    </Link>
);

SprintLink.prototype.propTypes = {
    sprint: PropTypes.object.isRequired
};

export default SprintLink;
