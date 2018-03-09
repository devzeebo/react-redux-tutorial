import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSprints } from '../../actions/sprintActions';
import CardList from '../presentation/general/cardList';
import SprintLink from '../presentation/sprintList/sprintLink';

class SprintListContainer extends Component {

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
                {this.props.sprints.map(it => <SprintLink key={it} sprint={this.props.sprintMap[it]} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(SprintListContainer);
