import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './sprint.less';


const SwimlanePreview = ({ sprintGuid, swimlane }) => (
    <Link className={styles.swimlane} to={`/sprints/${sprintGuid}/${swimlane.guid}`}>
        <span>{swimlane.title}</span>
        <span className={styles.taskList}>
            <span>{swimlane.tasksToDo}</span>
            <span>{swimlane.tasksInProgress}</span>
            <span>{swimlane.tasksInVerify}</span>
            <span>{swimlane.tasksDone}</span>
        </span>
    </Link>
);
SwimlanePreview.prototype.propTypes = {
    sprintGuid: PropTypes.string.isRequired,
    swimlane: PropTypes.object.isRequired
};

export default SwimlanePreview;
