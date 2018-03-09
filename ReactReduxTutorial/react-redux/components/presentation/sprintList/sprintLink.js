import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './sprintList.less';

import Card from '../general/card';

const SprintLink = ({ sprint }) => (
    <Link className={styles.sprint} to={`/sprints/${sprint.guid}`}>
        <Card>
            {sprint.title}
        </Card>
    </Link>
);

SprintLink.prototype.propTypes = {
    sprint: PropTypes.object.isRequired
};

export default SprintLink;
