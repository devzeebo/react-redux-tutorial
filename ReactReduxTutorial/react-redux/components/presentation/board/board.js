import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './board.less';

import { date } from '../../../helpers/formatters';
import Card from '../general/card';

const Board = ({ sprint = {}, board, tasks }) => (
    <div className={styles.board}>
        <Card>
            <header>
                <Link to={`/sprints/${sprint.guid}`}><h1>{board.title}</h1></Link>
                <h2>{sprint.title} - {date(sprint.sprintStart, 'MMM DD')}</h2>
            </header>
        </Card>
        <Card>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <h3 className={styles.header}>To Do</h3>
                    {tasks.filter(it => it.status === 1).map(it => (
                        <Card key={it.guid}>
                            {it.title}
                        </Card>
                    ))}
                </div>
                <div className={styles.column}>
                    <h3 className={styles.header}>In Progress</h3>
                    {tasks.filter(it => it.status === 2).map(it => (
                        <Card key={it.guid}>
                            {it.title}
                        </Card>
                    ))}
                </div>
                <div className={styles.column}>
                    <h3 className={styles.header}>In Verify</h3>
                    {tasks.filter(it => it.status === 3).map(it => (
                        <Card key={it.guid}>
                            {it.title}
                        </Card>
                    ))}
                </div>
                <div className={styles.column}>
                    <h3 className={styles.header}>Done</h3>
                    {tasks.filter(it => it.status === 4).map(it => (
                        <Card key={it.guid}>
                            {it.title}
                        </Card>
                    ))}
                </div>
            </div>
        </Card>
    </div>
);
Board.propTypes = {
    sprint: PropTypes.object.isRequired,
    board: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired
};
export default Board;
