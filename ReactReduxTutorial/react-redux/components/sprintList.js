import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './sprintList.less';

import { getSprints } from '../actions/sprintActions';
import CardList from '../../react/components/cardList';

class SprintList extends Component {

    static propTypes = {
        sprints: PropTypes.array,
        sprintMap: PropTypes.object,
        getSprints: PropTypes.func.isRequired
    }
    static defaultProps = {
        sprintMap: {},
        sprints: []
    }

    componentDidMount() {
        this.props.getSprints();
    }

    render() {

        return (
            <CardList>
                {this.props.sprints.map(it => (
                    <Link key={it} className={styles.sprint} to={`/sprints/${it}`}>
                        {this.props.sprintMap[it].title}
                    </Link>))}
            </CardList>
        );
    }
}

const mapStateToProps = state => ({
    sprintMap: state.sprints,
    sprints: Object.keys(state.sprints || {})
});

const mapDispatchToProps = dispatch => ({
    getSprints: () => dispatch(getSprints())
});

export default connect(mapStateToProps, mapDispatchToProps)(SprintList);
