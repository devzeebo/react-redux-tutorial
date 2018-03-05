import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSprint } from '../../actions/sprintActions';
import Sprint from '../presentation/sprint/sprint';

class SprintContainer extends Component {

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
        return <Sprint sprint={this.props.sprint} swimlanes={this.props.swimlanes} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(SprintContainer);
