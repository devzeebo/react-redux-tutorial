import React from 'react';                              // imports
import PropTypes from 'prop-types';

import styles from './sprint.less';

import SwimlanePreview from './swimlanePreview';
import { date } from '../../../helpers/formatters';
import Card from '../../card';

const Sprint = props => (                     // Component Declaration. Just a function!
    <Card>                                    {/*custom component*/}
        <section className={styles.sprint}>   {/*since class is a reserved word: className*/}
            <header>
                <span>{props.sprint.title}</span>   {/*passed in by what uses this component*/}
                <span>{date(props.sprint.sprintStart, 'MMM DD')}</span>  {/*just a function that returns a string*/}
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
                {/*standard Javascript functions!*/}
                {props.swimlanes.map((it, idx) => <SwimlanePreview key={idx} swimlane={it} />)}
            </div>
        </section>
    </Card>
);
// Runtime binding checking
Sprint.prototype.propTypes = {
    sprint: PropTypes.object.isRequired,
    swimlanes: PropTypes.array.isRequired
};
export default Sprint; // ES6 export
