import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './sprint.less';

import { getSprint } from '../actions/sprintActions';
import Card from '../../react/components/card';
import { date } from '../../react/helpers/formatters';

class Sprint extends Component {

    static propTypes = {
        guid: PropTypes.string.isRequired,
        getSprint: PropTypes.func.isRequired,
        sprint: PropTypes.object,
        swimlanes: PropTypes.array
    };
    static defaultProps = {
        sprint: {},
        swimlanes: []
    };

    componentDidMount() {
        this.props.getSprint(this.props.guid);
    }

    render() {
        return (
            <Card>
                <section className={styles.sprint}>
                    <header>
                        <span>{this.props.sprint.title}</span>
                        <span>{date(this.props.sprint.sprintStart, 'MMM DD')}</span>
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
                        {this.props.swimlanes.map((it, idx) => (
                            <div key={idx} className={styles.swimlane}>
                                <span>{it.title}</span>
                                <span className={styles.taskList}>
                                    <span>{it.tasksToDo}</span>
                                    <span>{it.tasksInProgress}</span>
                                    <span>{it.tasksInVerify}</span>
                                    <span>{it.tasksDone}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const sprint = state.sprints[ownProps.match.params.guid];

    return {
        sprint,
        swimlanes: sprint && sprint.swimlanes.map(guid => state.swimlanes[guid] || {}),
        guid: ownProps.match.params.guid
    };
};

const mapDispatchToProps = dispatch => ({
    getSprint: guid => dispatch(getSprint(guid))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sprint);
