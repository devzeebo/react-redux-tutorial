import axios from 'axios';
import { throwError } from './errorActions';
import { getSwimlaneSuccess } from './swimlaneActions';
import { SPRINT_GET_SUCCESS } from './constants';
import config from '../config';

function getSprintSuccess(sprint) {
    return {
        type: SPRINT_GET_SUCCESS,
        sprint
    };
}

export const getSprints = () =>
    dispatch => axios.get(`${config.apiHost}/api/sprints`).then(
        res => res.data.map(it => dispatch(getSprintSuccess(it))),
        err => dispatch(throwError(err))
    );

export const getSprint = (guid) =>
    dispatch => axios.get(`${config.apiHost}/api/sprints/${guid}`).then(
        res => {
            dispatch(getSprintSuccess(res.data));
            res.data.swimlanes.forEach(swimlane => dispatch(getSwimlaneSuccess(swimlane)));
        },
        err => dispatch(throwError(err))
    );

export default {
    getSprint,
    getSprints
};
