import React from 'react';
import PropTypes from 'prop-types';

import styles from './sprint.less';

const SwimlanePreview = props => (
    <div className={styles.swimlane}>
        <span>{props.swimlane.title}</span>
        <span className={styles.taskList}>
            <span>{props.swimlane.tasksToDo}</span>
            <span>{props.swimlane.tasksInProgress}</span>
            <span>{props.swimlane.tasksInVerify}</span>
            <span>{props.swimlane.tasksDone}</span>
        </span>
    </div>
);
SwimlanePreview.prototype.propTypes = {
    swimlane: PropTypes.object.isRequired
};

export default SwimlanePreview;
