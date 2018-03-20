import React from 'react';
import PropTypes from 'prop-types';

import styles from './sprint.less';

import SwimlanePreview from './swimlanePreview';
import { date } from '../../../helpers/formatters';
import Card from '../general/card';

const Sprint = ({ sprint, swimlanes }) => (
    <Card>
        <section className={styles.sprint}>
            <header>
                <span>{sprint.title}</span>
                <span>{date(sprint.sprintStart, 'MMM DD')}</span>
            </header>
            <div className={styles.sprintBody}>
                <div className={[styles.swimlane, styles.headerRow].join(' ')}>
                    <span>Story Name</span>
                    <div>
                        <span>Tasks In Story</span>
                        <span className={styles.taskList}>
                            <span>To Do</span>
                            <span>In Progress</span>
                            <span>In Verify</span>
                            <span>Done</span>
                        </span>
                    </div>
                </div>
                {swimlanes.map((it, idx) => <SwimlanePreview key={idx} sprintGuid={sprint.guid} swimlane={it} />)}
            </div>
        </section>
    </Card>
);
Sprint.propTypes = {
    sprint: PropTypes.object.isRequired,
    swimlanes: PropTypes.array.isRequired
};
export default Sprint;
